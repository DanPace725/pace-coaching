'use client';

import { useEffect, useState } from 'react';

const DOMAINS = ['Home', 'Work', 'Faith', 'Social', 'Self'] as const;
const SOURCES = ['Internal', 'Relational', 'Structural'] as const;
const STORAGE_KEY = 'friction-point-grid-v1';

type Domain = (typeof DOMAINS)[number];
type Source = (typeof SOURCES)[number];
type Rating = 1 | 2 | 3;
type GridState = Record<Domain, Record<Source, Rating | null>>;
type Reflections = {
  pattern: string;
  shift: string;
};

const emptyReflections: Reflections = { pattern: '', shift: '' };

const ratingStyles: Record<Rating, string> = {
  1: 'border-emerald-500/40 bg-emerald-500/10',
  2: 'border-amber-500/40 bg-amber-500/10',
  3: 'border-rose-500/40 bg-rose-500/10',
};

function createEmptyGrid(): GridState {
  return Object.fromEntries(
    DOMAINS.map((domain) => [
      domain,
      Object.fromEntries(SOURCES.map((source) => [source, null])),
    ]),
  ) as GridState;
}

function isRating(value: unknown): value is Rating {
  return value === 1 || value === 2 || value === 3;
}

function joinLabels(labels: string[]): string {
  if (labels.length < 2) return labels[0] ?? '';
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(', ')}, and ${labels.at(-1)}`;
}

export function FrictionGrid() {
  const [grid, setGrid] = useState<GridState>(createEmptyGrid);
  const [reflections, setReflections] = useState<Reflections>(emptyReflections);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;

      const parsed = JSON.parse(saved) as {
        grid?: Partial<Record<Domain, Partial<Record<Source, unknown>>>>;
        reflections?: Partial<Reflections>;
      };
      const restoredGrid = createEmptyGrid();

      DOMAINS.forEach((domain) => {
        SOURCES.forEach((source) => {
          const value = parsed.grid?.[domain]?.[source];
          if (isRating(value)) restoredGrid[domain][source] = value;
        });
      });

      const restoredReflections = {
        pattern: typeof parsed.reflections?.pattern === 'string' ? parsed.reflections.pattern : '',
        shift: typeof parsed.reflections?.shift === 'string' ? parsed.reflections.shift : '',
      };
      const restoreTimer = window.setTimeout(() => {
        setGrid(restoredGrid);
        setReflections(restoredReflections);
      }, 0);

      return () => window.clearTimeout(restoreTimer);
    } catch {
      // If browser storage is unavailable or invalid, the Grid still works for this visit.
    }
  }, []);

  function persist(nextGrid: GridState, nextReflections: Reflections) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ grid: nextGrid, reflections: nextReflections }));
    } catch {
      // Browser storage is optional.
    }
  }

  function updateRating(domain: Domain, source: Source, value: string) {
    const nextRating = Number(value);
    if (!isRating(nextRating)) return;

    const nextGrid = {
      ...grid,
      [domain]: { ...grid[domain], [source]: nextRating },
    };
    setGrid(nextGrid);
    persist(nextGrid, reflections);
  }

  function updateReflection(field: keyof Reflections, value: string) {
    const nextReflections = { ...reflections, [field]: value };
    setReflections(nextReflections);
    persist(grid, nextReflections);
  }

  function resetGrid() {
    const nextGrid = createEmptyGrid();
    setGrid(nextGrid);
    setReflections(emptyReflections);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Browser storage is optional.
    }
  }

  const ratings = DOMAINS.flatMap((domain) => SOURCES.map((source) => grid[domain][source]));
  const answeredCount = ratings.filter(isRating).length;
  const isComplete = answeredCount === DOMAINS.length * SOURCES.length;

  const domainTotals = Object.fromEntries(
    DOMAINS.map((domain) => [
      domain,
      SOURCES.reduce((sum, source) => sum + (grid[domain][source] ?? 0), 0),
    ]),
  ) as Record<Domain, number>;
  const sourceTotals = Object.fromEntries(
    SOURCES.map((source) => [
      source,
      DOMAINS.reduce((sum, domain) => sum + (grid[domain][source] ?? 0), 0),
    ]),
  ) as Record<Source, number>;

  const highestDomainTotal = Math.max(...Object.values(domainTotals));
  const highestSourceTotal = Math.max(...Object.values(sourceTotals));
  const highestDomains = DOMAINS.filter((domain) => domainTotals[domain] === highestDomainTotal);
  const highestSources = SOURCES.filter((source) => sourceTotals[source] === highestSourceTotal);

  return (
    <div className="space-y-8">
      <section aria-labelledby="grid-title" className="rounded-xl border border-linefp bg-surface p-5 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-steel">Interactive Grid</p>
            <h2 id="grid-title" className="mt-2 font-display text-3xl font-medium text-navy sm:text-4xl">
              Rate the friction you notice right now.
            </h2>
          </div>
          <div className="flex items-center gap-4 font-sans text-sm">
            <span aria-live="polite" className="text-mutedfp">{answeredCount} of 15 complete</span>
            <button type="button" onClick={resetGrid} className="font-medium text-steel hover:text-steeldeep">
              Reset
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto pb-2">
          <table className="w-full min-w-[42rem] border-separate border-spacing-0 font-sans text-sm">
            <thead>
              <tr>
                <th scope="col" className="border-b border-linefp px-3 py-3 text-left font-medium text-slatefp">Domain</th>
                {SOURCES.map((source) => (
                  <th key={source} scope="col" className="border-b border-linefp px-3 py-3 text-left font-medium text-slatefp">
                    {source}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DOMAINS.map((domain) => (
                <tr key={domain}>
                  <th scope="row" className="border-b border-linefp px-3 py-4 text-left font-semibold text-navy">
                    {domain}
                  </th>
                  {SOURCES.map((source) => {
                    const value = grid[domain][source];
                    return (
                      <td key={source} className="border-b border-linefp px-3 py-3">
                        <select
                          aria-label={`${domain}, ${source} friction`}
                          value={value ?? ''}
                          onChange={(event) => updateRating(domain, source, event.target.value)}
                          className={`w-full rounded-lg border px-3 py-2.5 text-ink outline-none transition-colors focus:border-steel ${
                            value ? ratingStyles[value] : 'border-linefp bg-page'
                          }`}
                        >
                          <option value="" disabled>Choose</option>
                          <option value="1">1: Low</option>
                          <option value="2">2: Moderate</option>
                          <option value="3">3: High</option>
                        </select>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-mutedfp">
          1 means little strain or obstruction. 2 means noticeable, recurring, or effortful friction. 3 means strong,
          persistent, or materially disruptive friction.
        </p>
      </section>

      {isComplete ? (
        <section aria-labelledby="summary-title" className="rounded-xl border border-linefp bg-mist2 p-5 sm:p-8">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-steel">Your current map</p>
          <h2 id="summary-title" className="mt-2 font-display text-3xl font-medium text-navy sm:text-4xl">
            Notice where friction is gathering.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-mutedfp">
            This summary describes the pattern you reported. It does not determine why the friction exists.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg border border-linefp bg-surface p-5">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slatefp">Highest domain total</p>
              <p className="mt-3 font-display text-3xl font-medium text-navy">{joinLabels(highestDomains)}</p>
              <p className="mt-2 text-sm text-mutedfp">{highestDomainTotal} of 9 across the three sources</p>
            </article>
            <article className="rounded-lg border border-linefp bg-surface p-5">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slatefp">Highest source total</p>
              <p className="mt-3 font-display text-3xl font-medium text-navy">{joinLabels(highestSources)}</p>
              <p className="mt-2 text-sm text-mutedfp">{highestSourceTotal} of 15 across the five domains</p>
            </article>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block rounded-lg border border-linefp bg-surface p-5">
              <span className="font-sans text-sm font-semibold text-navy">What stands out as a pattern?</span>
              <textarea
                value={reflections.pattern}
                onChange={(event) => updateReflection('pattern', event.target.value)}
                rows={5}
                placeholder="Name a repetition, rhythm, or recurring condition."
                className="mt-4 w-full resize-y rounded-lg border border-linefp bg-page px-3 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slatefp focus:border-steel"
              />
            </label>
            <label className="block rounded-lg border border-gold/60 bg-surface p-5">
              <span className="font-sans text-sm font-semibold text-navy">
                If one high-friction cell became moderate, what small change might help?
              </span>
              <textarea
                value={reflections.shift}
                onChange={(event) => updateReflection('shift', event.target.value)}
                rows={5}
                placeholder="Name one small experiment, not a total overhaul."
                className="mt-4 w-full resize-y rounded-lg border border-linefp bg-page px-3 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slatefp focus:border-steel"
              />
            </label>
          </div>
        </section>
      ) : (
        <p className="rounded-lg border border-linefp bg-mist2 px-5 py-4 text-sm text-mutedfp" aria-live="polite">
          Complete all 15 cells to see where friction is concentrating.
        </p>
      )}

      <p className="text-sm leading-relaxed text-slatefp">
        Your selections and reflection notes stay in this browser. Nothing is submitted to Friction Point.
      </p>
    </div>
  );
}
