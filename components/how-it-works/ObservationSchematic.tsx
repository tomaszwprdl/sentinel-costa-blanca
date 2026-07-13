type ObservationSchematicProps = {
  exampleLabel: string;
  title: string;
  observationLabel: string;
  observation: string;
  accessLabel: string;
  accessValue: string;
  checkLabel: string;
  checkValue: string;
  evidenceLabel: string;
  evidenceValue: string;
  note: string;
};

export default function ObservationSchematic({
  exampleLabel,
  title,
  observationLabel,
  observation,
  accessLabel,
  accessValue,
  checkLabel,
  checkValue,
  evidenceLabel,
  evidenceValue,
  note,
}: ObservationSchematicProps) {
  return (
    <article className="hiw-observation-board">
      <header className="hiw-observation-board__header">
        <span>{exampleLabel}</span>
        <strong>{title}</strong>
        <span>OBS / 01</span>
      </header>

      <div className="hiw-observation-board__canvas">
        <div className="hiw-observation-board__diagram" aria-label={title}>
          <svg viewBox="0 0 760 480" role="img" aria-labelledby="observation-schematic-title">
            <title id="observation-schematic-title">{title}</title>
            <path className="hiw-schematic__wall" d="M92 54H668V426H92Z" />
            <path className="hiw-schematic__door" d="M274 104H493V426H274Z" />
            <path className="hiw-schematic__glass" d="M296 127H471V388H296Z" />
            <path className="hiw-schematic__frame" d="M274 104L296 127M493 104L471 127M274 426L296 388M493 426L471 388" />
            <path className="hiw-schematic__floor" d="M92 426H668M132 449H628" />
            <path className="hiw-schematic__damp" d="M278 324c-18 12-24 31-15 48 7 13 3 27-9 39M289 332c-12 14-13 30-5 44" />
            <circle className="hiw-schematic__target" cx="278" cy="352" r="35" />
            <path className="hiw-schematic__leader" d="M307 333L444 238H618" />
            <circle className="hiw-schematic__point" cx="278" cy="352" r="5" />
          </svg>

          <div className="hiw-observation-board__finding">
            <span>{observationLabel}</span>
            <strong>{observation}</strong>
          </div>
        </div>

        <aside className="hiw-observation-board__register">
          <dl>
            <div><dt>{accessLabel}</dt><dd>{accessValue}</dd></div>
            <div><dt>{checkLabel}</dt><dd>{checkValue}</dd></div>
            <div><dt>{evidenceLabel}</dt><dd>{evidenceValue}</dd></div>
          </dl>
          <p>{note}</p>
        </aside>
      </div>
    </article>
  );
}
