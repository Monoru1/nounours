import { useEffect, useState } from 'react';
import { CaseExperience } from './components/investigation/CaseExperience';
import { giftConfig } from './content/gift';
import './styles/investigation.css';
import './styles/casino.css';
import './styles/game.css';

export function App() {
  const [soundOn, setSoundOn] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update);
  }, []);
  return <CaseExperience config={giftConfig} soundOn={soundOn} onSoundChange={setSoundOn} reducedMotion={reducedMotion} onReducedMotionChange={setReducedMotion} />;
}
