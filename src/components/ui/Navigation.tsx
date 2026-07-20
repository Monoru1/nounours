type Props = { reducedMotion: boolean; onMotionToggle: () => void };
export function Navigation({ reducedMotion, onMotionToggle }: Props) {
  return <header className="nav"><a href="#accueil" className="brand" aria-label="Inspecteur Nounours, accueil">Inspecteur <span>Nounours</span></a><div className="nav-actions"><a href="#personnaliser">Son dossier</a><button onClick={onMotionToggle} aria-pressed={reducedMotion} className="motion-toggle">{reducedMotion ? 'Mouvement désactivé' : 'Mouvement doux'}</button></div></header>;
}
