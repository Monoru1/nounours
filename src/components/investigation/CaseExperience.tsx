import { useEffect, useMemo, useState } from 'react';
import type { GiftConfig } from '../../content/gift';
import casino from '../../assets/casino';
import desk from '../../assets/desk';

type Props = { config: GiftConfig; soundOn: boolean; onSoundChange: (value: boolean) => void; reducedMotion: boolean; onReducedMotionChange: (value: boolean) => void };
type ChapterId = 'bar' | 'office' | 'archives';
type Chapter = { id: ChapterId; number: string; place: string; character: string; activity: string; copy: string; clue: string; asset: string };

const chapters: Chapter[] = [
  { id: 'bar', number: '01', place: 'Le Bar Teddy Bear', character: 'Le Barman', activity: 'Il a préparé le chocolat chaud avant même que le King entre en annonçant un nouveau projet impossible.', copy: 'C’est ici que Lawal a toujours eu sa place : au milieu des idées trop grandes, des soirées qui dérapent et des retours après l’orage.', clue: 'Le Barman glisse une carte sous la tasse : « Lawal ne faisait jamais semblant d’écouter. Il restait. Même quand tout le monde aurait eu une excuse pour partir. »', asset: casino },
  { id: 'office', number: '02', place: 'Le bureau de l’Inspecteur', character: 'L’Inspecteur Nounours', activity: 'Il classe un dossier, rate l’alarme, remet son chapeau et fait comme si rien ne s’était passé.', copy: 'L’Inspecteur, c’est Lawal : celui qui observe avant de parler, désamorce une tempête sans faire de bruit et sait faire rire au bon moment.', clue: 'Dans le carnet, une phrase est soulignée : « Tu as connu les colères, les changements d’humeur et les idées de 2 h 47. Tu as choisi de répondre avec du calme, jamais avec du vide. »', asset: desk },
  { id: 'archives', number: '03', place: 'Les archives du Casino', character: 'Le Mafieux', activity: 'Il ferme un dossier intitulé “Projet commencé à 2 h 47”, avec un sérieux complètement suspect.', copy: 'Les archives ont gardé les preuves : Lawal est drôle sans jouer un rôle, mature sans devenir lourd, et loyal sans jamais demander de médaille.', clue: 'Dernier dossier : « Depuis plus de huit ans, tu n’es pas un pseudo dans les messages. Tu es le meilleur ami qui rend les jours compliqués beaucoup moins lourds. »', asset: desk },
];

function readProgress(): ChapterId[] {
  try { return (JSON.parse(localStorage.getItem('casino-progress') ?? '{}').clues ?? []) as ChapterId[]; } catch { return []; }
}

export function CaseExperience({ config, soundOn, onSoundChange, reducedMotion, onReducedMotionChange }: Props) {
  const [started, setStarted] = useState(false);
  const [currentId, setCurrentId] = useState<ChapterId>('bar');
  const [clues, setClues] = useState<ChapterId[]>([]);
  const [notice, setNotice] = useState('Choisissez un chapitre. L’Inspecteur a laissé trois souvenirs à retrouver.');
  const [isTravelling, setIsTravelling] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setClues(readProgress()), []);
  useEffect(() => localStorage.setItem('casino-progress', JSON.stringify({ clues })), [clues]);

  const current = useMemo(() => chapters.find((chapter) => chapter.id === currentId)!, [currentId]);
  const complete = clues.length === chapters.length;
  const collect = () => {
    if (clues.includes(current.id)) { setNotice('Indice déjà classé. L’Inspecteur vous regarde avec une discrète fierté.'); return; }
    setClues((saved) => [...saved, current.id]);
    setNotice(current.clue);
  };
  const travel = (chapter: Chapter) => {
    if (chapter.id === currentId || isTravelling) return;
    setIsTravelling(true);
    window.setTimeout(() => { setCurrentId(chapter.id); setNotice(`${chapter.place}. Un souvenir s’y cache.`); setIsTravelling(false); }, 330);
  };
  const revealLetter = () => {
    if (!complete || isTravelling) return;
    setIsTravelling(true);
    window.setTimeout(() => setRevealed(true), 430);
  };

  if (!started) return (
    <section className="case-intro" style={{ backgroundImage: `url(${desk})` }}>
      <div className="case-intro__veil" />
      <div className="case-intro__content">
        <p className="case-kicker">The King’s Casino présente</p>
        <p className="case-file">DOSSIER 0808 · POUR LAWAL</p>
        <h1>L’Inspecteur<br /><em>Nounours.</em></h1>
        <p className="case-lead">Une enquête-anniversaire en trois souvenirs. Ryad a confié l’affaire à celui qui sait rester quand les tempêtes passent.</p>
        <button className="case-primary" onClick={() => setStarted(true)}>Ouvrir le dossier <span>→</span></button>
      </div>
      <p className="case-caption">Le Casino n’est pas un casino.<br />C’est l’endroit où les vrais amis se retrouvent.</p>
    </section>
  );

  if (revealed) return (
    <section className="case-final" style={{ backgroundImage: `url(${casino})` }}>
      <div className="case-final__veil" />
      <article className="case-letter">
        <p className="case-kicker">Dossier 0808 · affaire résolue</p>
        <h1>Le vrai<br /><em>mystère.</em></h1>
        <p className="case-reveal">Personne n’essayait d’effacer les souvenirs. L’Inspecteur cherchait la bonne façon de dire merci.</p>
        <div className="case-letter__body">{config.birthdayMessage}</div>
        <p className="case-signature">Ryad, pour Lawal.</p>
        <button className="case-primary" onClick={() => { setCurrentId('bar'); setStarted(true); }}>Retourner au Bar Teddy Bear <span>↗</span></button>
      </article>
      <p className="case-final__sign">THE KING’S CASINO<br /><span>Les portes restent ouvertes pour les vrais amis.</span></p>
    </section>
  );

  return (
    <main className={reducedMotion ? 'case-experience is-still' : 'case-experience'}>
      <header className="case-topbar">
        <button className="case-monogram" onClick={() => setCurrentId('bar')} aria-label="Revenir au premier chapitre">IN</button>
        <p><span>Dossier 0808</span><b>{clues.length} / 3 souvenirs sauvés</b></p>
        <div>
          <button onClick={() => onSoundChange(!soundOn)} aria-pressed={soundOn}>{soundOn ? 'Son activé' : 'Son coupé'}</button>
          <button onClick={() => onReducedMotionChange(!reducedMotion)} aria-pressed={reducedMotion}>{reducedMotion ? 'Plans fixes' : 'Mouvement doux'}</button>
        </div>
      </header>
      <section className="case-scene" style={{ backgroundImage: `url(${current.asset})` }}>
        <div className="case-scene__veil" />
        <div className={isTravelling ? 'case-scene__transition is-active' : 'case-scene__transition'} aria-hidden="true"><span>THE KING’S CASINO</span></div>
        <div className="case-inspector" style={{ backgroundImage: `url(${desk})` }} aria-hidden="true" />
        <article key={current.id} className="case-scene__copy">
          <p className="case-kicker">Chapitre {current.number} · {current.character}</p>
          <h2>{current.place}</h2>
          <p className="case-scene__activity">{current.activity}</p>
          <p>{current.copy}</p>
          <button className="case-primary case-primary--dark" onClick={collect}>{clues.includes(current.id) ? 'Souvenir classé' : 'Sauver ce souvenir'} <span>⌕</span></button>
          <output className="case-notice" aria-live="polite">{notice}</output>
        </article>
        <nav className="case-map" aria-label="Explorer les chapitres du Casino">
          <p>Portes du Casino</p>
          {chapters.map((chapter) => <button key={chapter.id} className={chapter.id === currentId ? 'is-current' : ''} onClick={() => travel(chapter)}>
            <span>{chapter.number}</span>{chapter.place}<i aria-hidden="true" />
          </button>)}
          <button className={complete ? 'case-map__final is-open' : 'case-map__final'} onClick={revealLetter} disabled={!complete}>La lettre</button>
        </nav>
      </section>
    </main>
  );
}
