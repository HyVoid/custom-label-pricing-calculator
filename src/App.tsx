import React, { useState, useEffect, useRef } from 'react';
import {
  WorkbookState,
  BatchQuoteRow,
  BenchmarkRow,
} from './types';
import { DEFAULT_WORKBOOK_STATE } from './pricingEngine';
import { CalcFrontSheet } from './components/CalcFrontSheet';
import { ParamConfigSheet } from './components/ParamConfigSheet';
import { EngineCalcSheet } from './components/EngineCalcSheet';
import { BenchmarkDataSheet } from './components/BenchmarkDataSheet';
import { ModelValidationSheet } from './components/ModelValidationSheet';

const STORAGE_KEY = 'parametric_pricing_engine_workbook_v1';

type SheetId =
  | '01_Calc_Front'
  | '02_Param_Config'
  | '03_Engine_Calc'
  | '04_Benchmark_Data'
  | '05_Model_Validation';

const SHEETS: { id: SheetId; label: string; shortLabel: string }[] = [
  { id: '01_Calc_Front', label: '01_Calc_Front', shortLabel: '01 Calculator' },
  { id: '02_Param_Config', label: '02_Param_Config', shortLabel: '02 Params (SSOT)' },
  { id: '03_Engine_Calc', label: '03_Engine_Calc', shortLabel: '03 Engine Pipeline' },
  { id: '04_Benchmark_Data', label: '04_Benchmark_Data', shortLabel: '04 Benchmarks' },
  { id: '05_Model_Validation', label: '05_Model_Validation', shortLabel: '05 Stress Test' },
];

export default function App() {
  const [activeSheet, setActiveSheet] = useState<SheetId>('01_Calc_Front');
  const [workbook, setWorkbook] = useState<WorkbookState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_WORKBOOK_STATE,
          ...parsed,
          paramConfig: {
            ...DEFAULT_WORKBOOK_STATE.paramConfig,
            ...(parsed.paramConfig || {}),
          },
        };
      }
    } catch {
      // Fallback to default state if corrupted
    }
    return DEFAULT_WORKBOOK_STATE;
  });

  const [csvModalOpen, setCsvModalOpen] = useState(false);
  const [csvTarget, setCsvTarget] = useState<'batchQuotes' | 'benchmarkData'>('batchQuotes');
  const [csvMode, setCsvMode] = useState<'append' | 'replace'>('append');
  const [csvText, setCsvText] = useState(
    'Q2026-101, 2.5, 3.5, 500\nQ2026-102, 4.0, 6.0, 1500\nQ2026-103, 5.0, 8.0, 5000'
  );
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const backupInputRef = useRef<HTMLInputElement | null>(null);
  const csvFileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-save to localStorage whenever workbook data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(workbook));
    } catch {
      // Ignore quota errors
    }
  }, [workbook]);

  const showNotice = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const updateWorkbook = (updater: (prev: WorkbookState) => WorkbookState) => {
    setWorkbook((prev) => {
      const next = updater(prev);
      return {
        ...next,
        lastSaved: new Date().toISOString(),
      };
    });
  };

  // Export Backup JSON
  const handleExportBackup = () => {
    const dataStr = JSON.stringify(workbook, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `parametric-pricing-engine-backup-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotice('Workbook JSON backup exported.');
  };

  // Import Backup JSON
  const handleImportBackupFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(String(event.target?.result || '{}'));
        if (parsed && parsed.paramConfig && Array.isArray(parsed.batchQuotes)) {
          updateWorkbook(() => ({
            ...DEFAULT_WORKBOOK_STATE,
            ...parsed,
          }));
          showNotice('Backup imported and applied across all 5 sheets.');
        } else {
          showNotice('Invalid backup JSON schema.');
        }
      } catch {
        showNotice('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Bulk CSV Import Parser
  const handleApplyCsvImport = () => {
    const lines = csvText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      showNotice('No CSV rows provided.');
      return;
    }

    if (csvTarget === 'batchQuotes') {
      const parsedRows: BatchQuoteRow[] = [];
      lines.forEach((line, idx) => {
        const cols = line.split(',').map((c) => c.trim());
        // Skip header line if first column is non-numeric width in col 2
        if (idx === 0 && isNaN(parseFloat(cols[1]))) return;
        if (cols.length >= 4) {
          const id = cols[0] || `CSV-${idx + 1}`;
          const width = parseFloat(cols[1]) || 2.0;
          const height = parseFloat(cols[2]) || 3.0;
          const quantity = parseInt(cols[3], 10) || 100;
          parsedRows.push({ id, width, height, quantity });
        } else if (cols.length === 3) {
          const width = parseFloat(cols[0]) || 2.0;
          const height = parseFloat(cols[1]) || 3.0;
          const quantity = parseInt(cols[2], 10) || 100;
          parsedRows.push({
            id: `CSV-${String(idx + 1).padStart(3, '0')}`,
            width,
            height,
            quantity,
          });
        }
      });

      if (parsedRows.length === 0) {
        showNotice('Could not parse valid Batch Quote rows from CSV.');
        return;
      }

      updateWorkbook((prev) => ({
        ...prev,
        batchQuotes:
          csvMode === 'replace'
            ? parsedRows
            : [...prev.batchQuotes, ...parsedRows],
      }));
      setCsvModalOpen(false);
      setActiveSheet('03_Engine_Calc');
      showNotice(`Imported ${parsedRows.length} rows into 03_Engine_Calc.`);
    } else {
      const parsedBench: BenchmarkRow[] = [];
      lines.forEach((line, idx) => {
        const cols = line.split(',').map((c) => c.trim());
        if (idx === 0 && isNaN(parseFloat(cols[1]))) return;
        if (cols.length >= 6) {
          const id = cols[0] || `BM-CSV-${idx + 1}`;
          const width = parseFloat(cols[1]) || 2.0;
          const height = parseFloat(cols[2]) || 3.0;
          const quantity = parseInt(cols[3], 10) || 500;
          const compName: BenchmarkRow['compName'] = cols[4]
            .toLowerCase()
            .includes('consolidated')
            ? 'Consolidated Label'
            : 'Wizard Labels';
          const compPrice = parseFloat(cols[5]) || 100.0;
          parsedBench.push({
            id,
            width,
            height,
            quantity,
            compName,
            compPrice,
          });
        }
      });

      if (parsedBench.length === 0) {
        showNotice('Could not parse valid Benchmark rows from CSV.');
        return;
      }

      updateWorkbook((prev) => ({
        ...prev,
        benchmarkData:
          csvMode === 'replace'
            ? parsedBench
            : [...prev.benchmarkData, ...parsedBench],
      }));
      setCsvModalOpen(false);
      setActiveSheet('04_Benchmark_Data');
      showNotice(`Imported ${parsedBench.length} samples into 04_Benchmark_Data.`);
    }
  };

  const handleCsvFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setCsvText(String(ev.target?.result || ''));
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleConfirmReset = () => {
    const fresh: WorkbookState = {
      ...DEFAULT_WORKBOOK_STATE,
      lastSaved: new Date().toISOString(),
    };
    setWorkbook(fresh);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    setResetConfirmOpen(false);
    showNotice('All workbook sheets reset to factory defaults.');
  };

  const formattedLastSaved = (() => {
    try {
      const d = new Date(workbook.lastSaved);
      return d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return 'Just now';
    }
  })();

  return (
    <div className="min-h-screen flex flex-col">
      {/* §1 Sticky 56px Light Navigation Bar */}
      <header className="nav-bar">
        <div className="page-wrapper h-full flex items-center justify-between gap-4">
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <span
              className="font-display text-lg font-semibold tracking-tight cursor-pointer"
              style={{ color: 'var(--nav-text)' }}
              onClick={() => setActiveSheet('01_Calc_Front')}
            >
              Parametric Competitive Pricing Engine
            </span>
          </div>

          {/* Center/Right: Worksheet Tab Switcher */}
          <nav className="flex items-center overflow-x-auto no-scrollbar">
            {SHEETS.map((sheet) => (
              <button
                key={sheet.id}
                type="button"
                onClick={() => setActiveSheet(sheet.id)}
                className={`nav-tab ${
                  activeSheet === sheet.id ? 'nav-tab-active' : ''
                }`}
              >
                <span className="hidden xl:inline">{sheet.label}</span>
                <span className="xl:hidden">{sheet.shortLabel}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Sub-header Utility Bar: Prominent Last Saved + Data Operations */}
      <div
        className="border-b"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="page-wrapper py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Prominent Last Saved Indicator */}
          <div className="flex items-center gap-3">
            <span className="status-pill status-pill-positive">
              Auto-Saved · LocalStorage
            </span>
            <span className="text-xs font-medium tabular-num" style={{ color: 'var(--color-primary)' }}>
              Last saved: <strong>{formattedLastSaved}</strong>
            </span>
            {toastMessage && (
              <span
                className="text-xs font-medium px-2.5 py-0.5 rounded"
                style={{
                  background: 'var(--insight-bg)',
                  color: 'var(--color-accent)',
                }}
              >
                {toastMessage}
              </span>
            )}
          </div>

          {/* Data Governance Actions: Export Backup, Bulk CSV Import, Import Backup, Reset Data */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setCsvTarget(
                  activeSheet === '04_Benchmark_Data'
                    ? 'benchmarkData'
                    : 'batchQuotes'
                );
                setCsvText(
                  activeSheet === '04_Benchmark_Data'
                    ? 'BM-101, 2.0, 3.0, 500, Wizard Labels, 79.50\nBM-102, 4.0, 6.0, 2500, Consolidated Label, 630.00'
                    : 'Q2026-101, 2.5, 3.5, 500\nQ2026-102, 4.0, 6.0, 1500\nQ2026-103, 5.0, 8.0, 5000'
                );
                setCsvModalOpen(true);
              }}
              className="btn-action"
            >
              Bulk CSV Import
            </button>

            <button
              type="button"
              onClick={handleExportBackup}
              className="btn-action"
            >
              Export Backup
            </button>

            <button
              type="button"
              onClick={() => backupInputRef.current?.click()}
              className="btn-action"
            >
              Import Backup
            </button>
            <input
              ref={backupInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleImportBackupFile}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => setResetConfirmOpen(true)}
              className="btn-action"
              style={{ color: 'var(--color-negative)' }}
            >
              Reset Data
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area (1400px max-width, 40px horizontal padding, 40px top breathing room) */}
      <main className="page-wrapper flex-1 pt-10 pb-12">
        {activeSheet === '01_Calc_Front' && (
          <CalcFrontSheet
            input={workbook.calcFront}
            params={workbook.paramConfig}
            onChange={(nextFront) =>
              updateWorkbook((prev) => ({ ...prev, calcFront: nextFront }))
            }
            onPushToBatch={(w, h, q) => {
              const nextId = `Q2026-${String(
                workbook.batchQuotes.length + 1
              ).padStart(3, '0')}`;
              updateWorkbook((prev) => ({
                ...prev,
                batchQuotes: [
                  ...prev.batchQuotes,
                  { id: nextId, width: w, height: h, quantity: q },
                ],
              }));
              setActiveSheet('03_Engine_Calc');
              showNotice(`Added ${nextId} (${w}"×${h}", ${q.toLocaleString()} pcs) to 03_Engine_Calc.`);
            }}
          />
        )}

        {activeSheet === '02_Param_Config' && (
          <ParamConfigSheet
            params={workbook.paramConfig}
            onChange={(nextParams) =>
              updateWorkbook((prev) => ({ ...prev, paramConfig: nextParams }))
            }
          />
        )}

        {activeSheet === '03_Engine_Calc' && (
          <EngineCalcSheet
            rows={workbook.batchQuotes}
            params={workbook.paramConfig}
            onChange={(nextRows) =>
              updateWorkbook((prev) => ({ ...prev, batchQuotes: nextRows }))
            }
            onOpenCsvModal={() => {
              setCsvTarget('batchQuotes');
              setCsvText(
                'Q2026-101, 2.5, 3.5, 500\nQ2026-102, 4.0, 6.0, 1500\nQ2026-103, 5.0, 8.0, 5000'
              );
              setCsvModalOpen(true);
            }}
          />
        )}

        {activeSheet === '04_Benchmark_Data' && (
          <BenchmarkDataSheet
            rows={workbook.benchmarkData}
            params={workbook.paramConfig}
            onChange={(nextRows) =>
              updateWorkbook((prev) => ({ ...prev, benchmarkData: nextRows }))
            }
            onOpenCsvModal={() => {
              setCsvTarget('benchmarkData');
              setCsvText(
                'BM-101, 2.0, 3.0, 500, Wizard Labels, 79.50\nBM-102, 4.0, 6.0, 2500, Consolidated Label, 630.00'
              );
              setCsvModalOpen(true);
            }}
          />
        )}

        {activeSheet === '05_Model_Validation' && (
          <ModelValidationSheet
            rows={workbook.validationCases}
            params={workbook.paramConfig}
            onChange={(nextRows) =>
              updateWorkbook((prev) => ({ ...prev, validationCases: nextRows }))
            }
            onInspectScenario={(w, h, q) => {
              updateWorkbook((prev) => ({
                ...prev,
                calcFront: { width: w, height: h, quantity: q },
              }));
              showNotice(
                `Loaded scenario (${w}"×${h}", ${q.toLocaleString()} pcs) into 01_Calc_Front.`
              );
            }}
          />
        )}
      </main>

      {/* Footer with Privacy & Data Security Note */}
      <footer
        className="border-t py-6"
        style={{
          borderColor: 'var(--color-border)',
          background: 'var(--color-surface)',
        }}
      >
        <div className="page-wrapper flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'var(--color-muted)' }}>
          <div>
            Parametric Competitive Pricing Engine · 5-Sheet Zero-Maintenance Dynamic Array Architecture
          </div>
          <div className="text-right">
            Privacy &amp; Data Security Notice: All data storage in this tool runs exclusively in your browser&apos;s localStorage; the page itself does not retain or transmit any user data.
          </div>
        </div>
      </footer>

      {/* Modal: Bulk CSV Import (Glassmorphism backdrop permitted on modal only) */}
      {csvModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(5, 28, 44, 0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="w-full max-w-xl p-6"
            style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="section-title">Bulk CSV Import</h3>
              <button
                type="button"
                onClick={() => setCsvModalOpen(false)}
                className="btn-action text-xs"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="kpi-label block mb-1">Target Worksheet</label>
                <select
                  value={csvTarget}
                  onChange={(e) => {
                    const nextTarget = e.target.value as 'batchQuotes' | 'benchmarkData';
                    setCsvTarget(nextTarget);
                    setCsvText(
                      nextTarget === 'benchmarkData'
                        ? 'BM-101, 2.0, 3.0, 500, Wizard Labels, 79.50\nBM-102, 4.0, 6.0, 2500, Consolidated Label, 630.00'
                        : 'Q2026-101, 2.5, 3.5, 500\nQ2026-102, 4.0, 6.0, 1500\nQ2026-103, 5.0, 8.0, 5000'
                    );
                  }}
                  className="editable-input w-full"
                >
                  <option value="batchQuotes">03_Engine_Calc (Quote_ID, Width, Height, Qty)</option>
                  <option value="benchmarkData">04_Benchmark_Data (ID, Width, Height, Qty, Competitor, Price)</option>
                </select>
              </div>

              <div>
                <label className="kpi-label block mb-1">Import Mode</label>
                <select
                  value={csvMode}
                  onChange={(e) => setCsvMode(e.target.value as 'append' | 'replace')}
                  className="editable-input w-full"
                >
                  <option value="append">Append to Existing Rows</option>
                  <option value="replace">Replace Existing Rows</option>
                </select>
              </div>
            </div>

            <div className="mb-3 flex items-center justify-between">
              <span className="kpi-label">
                {csvTarget === 'batchQuotes'
                  ? 'Format: Quote_ID, Width(in), Height(in), Quantity(pcs)'
                  : 'Format: Record_ID, Width(in), Height(in), Qty(pcs), Competitor, Price'}
              </span>
              <button
                type="button"
                onClick={() => csvFileInputRef.current?.click()}
                className="btn-action text-xs"
              >
                Load .CSV File
              </button>
              <input
                ref={csvFileInputRef}
                type="file"
                accept=".csv,text/csv,text/plain"
                onChange={handleCsvFileUpload}
                className="hidden"
              />
            </div>

            <textarea
              rows={6}
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              className="editable-input w-full font-mono text-xs mb-4"
              placeholder="Paste comma-separated rows here..."
            />

            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setCsvModalOpen(false)}
                className="btn-action"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyCsvImport}
                className="btn-action btn-action-primary"
              >
                Import CSV Data
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Reset Data Confirmation */}
      {resetConfirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(5, 28, 44, 0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="w-full max-w-md p-6"
            style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <h3 className="section-title mb-2">Reset All Workbook Data?</h3>
            <p className="text-xs mb-6" style={{ color: 'var(--color-muted)' }}>
              This action will restore all 5 worksheets (Calculator inputs, SSOT Parameters, Batch Quotes, Competitor Benchmarks, and 36 Stress Test cases) to their initial factory specifications and overwrite localStorage.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setResetConfirmOpen(false)}
                className="btn-action"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="btn-action"
                style={{
                  background: 'var(--color-negative)',
                  color: 'var(--color-surface)',
                  borderColor: 'var(--color-negative)',
                }}
              >
                Confirm Reset Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
