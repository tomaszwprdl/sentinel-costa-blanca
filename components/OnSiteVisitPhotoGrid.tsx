type Translator = (key: string, values?: Record<string, string | number | Date>) => string;

type PhotoSlot = {
  number: string;
  caption: string;
};

export default function OnSiteVisitPhotoGrid({ t }: { t: Translator }) {
  const slots: PhotoSlot[] = [
    { number: '01', caption: t('photoGrid.captions.waterShutoff') },
    { number: '02', caption: t('photoGrid.captions.boilerUnit') },
    { number: '03', caption: t('photoGrid.captions.electricalPanel') },
    { number: '04', caption: t('photoGrid.captions.frontDoorLock') },
  ];

  return (
    <div className="mt-8">
      <h3>
        {t('photoGrid.label')}
      </h3>

      <div className="grid grid-cols-2 gap-5">
        {slots.map((slot) => (
          <div key={slot.number}>
            <div className="border border-structural-muted bg-surface-light-alt aspect-[4/3] p-5 flex flex-col justify-between">
              <div className="text-sm font-medium text-authority">
                {t('photoGrid.placeholderLabel', { number: slot.number })}
              </div>
              <div className="text-xs text-muted">
                {t('photoGrid.ownerProvidedNote')}
              </div>
            </div>
            <div className="mt-2 text-sm text-body">
              {slot.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

