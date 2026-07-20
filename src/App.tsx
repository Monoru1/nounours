import { useEffect, useState } from 'react';
import { Hero } from './components/hero/Hero';
import { Chapter } from './components/story/Chapter';
import { Configurator } from './components/configurator/Configurator';
import { Closing } from './components/story/Closing';
import { Navigation } from './components/ui/Navigation';
import { SoundToggle } from './components/ui/SoundToggle';

export type BearStyle = { color: string; ribbon: string; size: 'Petit' | 'Classique' | 'Grand'; name: string };

export function App() {
  const [style, setStyle] = useState<BearStyle>({ color: '#b78055', ribbon: '#9d2434', size: 'Classique', name: 'Inspecteur' });
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync(); media.addEventListener('change', sync); return () => media.removeEventListener('change', sync);
  }, []);
  return <main className={reducedMotion ? 'reduced-motion' : ''}>
    <Navigation onMotionToggle={() => setReducedMotion(value => !value)} reducedMotion={reducedMotion} />
    <Hero style={style} />
    <Chapter eyebrow="Un fil, puis une histoire" title={<>Fait pour les bras.<br/>Pensé pour les années.</>} tone="linen" visual="craft" />
    <Chapter eyebrow="Ce qui reste" title={<>Le même regard.<br/>À chaque âge.</>} tone="night" visual="memory" />
    <Configurator style={style} onChange={setStyle} />
    <Chapter eyebrow="Une place dans la maison" title={<>Il n'occupe pas<br/>une étagère.</>} tone="forest" visual="scenes" />
    <Closing name={style.name} />
    <SoundToggle />
  </main>;
}
