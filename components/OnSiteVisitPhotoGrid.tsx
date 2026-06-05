import OperationalCaptureFrame from '@/components/visuals/OperationalCaptureFrame';

type Translator = (key: string, values?: Record<string, string | number | Date>) => string;

type PhotoSlot = {
  number: string;
  caption: string;
  kind: 'water' | 'boiler' | 'electrical' | 'lock';
};

export default function OnSiteVisitPhotoGrid({ t }: { t: Translator }) {
  const slots: PhotoSlot[] = [
    { number: '01', caption: t('photoGrid.captions.waterShutoff'), kind: 'water' },
    { number: '02', caption: t('photoGrid.captions.boilerUnit'), kind: 'boiler' },
    { number: '03', caption: t('photoGrid.captions.electricalPanel'), kind: 'electrical' },
    { number: '04', caption: t('photoGrid.captions.frontDoorLock'), kind: 'lock' },
  ];

  return (
    <div className="mt-8">
      <h3>
        {t('photoGrid.label')}
      </h3>

      <div className="grid grid-cols-2 gap-5">
        {slots.map((slot) => (
          <div key={slot.number}>
            <OperationalCaptureFrame
              reference={t('photoGrid.captureLabel', { number: slot.number })}
              label={slot.caption}
              note={t('photoGrid.ownerProvidedNote')}
              kind={slot.kind}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
