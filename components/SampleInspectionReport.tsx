import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';
import OperationalCaptureFrame from '@/components/visuals/OperationalCaptureFrame';

type Translator = (key: string, values?: Record<string, string | number | Date>) => string;

type ChecklistItem = {
  itemLabel: string;
  statusLabel: string;
  note?: string;
};

export default function SampleInspectionReport({ t }: { t: Translator }) {
  const checklist: ChecklistItem[] = [
    { itemLabel: t('sampleReport.checklist.items.accessSecurity'), statusLabel: t('sampleReport.status.ok') },
    { itemLabel: t('sampleReport.checklist.items.doorsWindows'), statusLabel: t('sampleReport.status.ok') },
    {
      itemLabel: t('sampleReport.checklist.items.waterSystemVisual'),
      statusLabel: t('sampleReport.status.observation'),
      note: t('sampleReport.checklist.notes.waterSystemObservation'),
    },
    { itemLabel: t('sampleReport.checklist.items.electricalVisual'), statusLabel: t('sampleReport.status.ok') },
    { itemLabel: t('sampleReport.checklist.items.boilerHvacVisual'), statusLabel: t('sampleReport.status.ok') },
    { itemLabel: t('sampleReport.checklist.items.interiorCondition'), statusLabel: t('sampleReport.status.ok') },
    { itemLabel: t('sampleReport.checklist.items.signsOfMoisture'), statusLabel: t('sampleReport.status.ok') },
    { itemLabel: t('sampleReport.checklist.items.odorsVentilation'), statusLabel: t('sampleReport.status.ok') },
  ];

  const photoRefs = [
    { reference: 'SEN-CAP-01', label: t('sampleReport.photos.items.ref01'), kind: 'water' as const },
    { reference: 'SEN-CAP-02', label: t('sampleReport.photos.items.ref02'), kind: 'boiler' as const },
    { reference: 'SEN-CAP-03', label: t('sampleReport.photos.items.ref03'), kind: 'electrical' as const },
  ];

  return (
    <div className="report-table-card mt-10 border border-structural-light bg-surface-card r p-6">
      <h3>
        {t('sampleReport.label')}
      </h3>

      {/* 1) Header block */}
      <div className="border border-structural-light bg-surface-light r p-5">
        <div className="font-mono text-sm text-body whitespace-pre-line">
          {t('sampleReport.headerBlock')}
        </div>
      </div>

      {/* 2) Scope confirmation */}
      <div className="mt-5">
        <p className="text-body whitespace-pre-line">
          {t('sampleReport.scopeConfirmation')}
        </p>
      </div>

      {/* 3) Inspection checklist — report-table for dark-mode parity (Task 6.14) */}
      <div className="mt-5">
        <h4 className="text-base font-semibold text-authority mb-3">
          {t('sampleReport.checklist.title')}
        </h4>
        <div className="report-table-frame overflow-x-auto border border-structural-light bg-surface-light r">
          <table className="report-table w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="report-table__th">
                  {t('sampleReport.checklist.columns.item')}
                </th>
                <th className="report-table__th w-40">
                  {t('sampleReport.checklist.columns.status')}
                </th>
                <th className="report-table__th">
                  {t('sampleReport.checklist.columns.notes')}
                </th>
              </tr>
            </thead>
            <tbody>
              {checklist.map((row) => (
                <tr key={row.itemLabel} className="report-table__tr">
                  <td className="report-table__td">{row.itemLabel}</td>
                  <td className="report-table__td report-table__td--status">{row.statusLabel}</td>
                  <td className="report-table__td">{row.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4) Photo references */}
      <div className="mt-5">
        <h4 className="text-base font-semibold text-authority mb-3">
          {t('sampleReport.photos.title')}
        </h4>
        <GridFrame className="gap-3">
          {photoRefs.map((ref) => (
            <Region key={ref.reference} name="main" desktopSpan="third">
              <OperationalCaptureFrame
                reference={ref.reference}
                label={ref.label}
                kind={ref.kind}
                compact
              />
            </Region>
          ))}
        </GridFrame>
      </div>

      {/* 5) Summary & recommendations */}
      <div className="mt-5">
        <h4 className="text-base font-semibold text-authority mb-3">
          {t('sampleReport.summary.title')}
        </h4>
        <div className="text-body whitespace-pre-line">
          {t('sampleReport.summary.body')}
        </div>
      </div>

      {/* 6) Client acknowledgement note */}
      <div className="mt-10 border-t border-structural-light pt-5">
        <p className="text-body whitespace-pre-line">
          {t('sampleReport.acknowledgement')}
        </p>
      </div>
    </div>
  );
}
