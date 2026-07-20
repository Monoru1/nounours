import { useState } from 'react';
export function SoundToggle() { const [on, setOn] = useState(false); return <button className="sound" onClick={() => setOn(!on)} aria-pressed={on}>{on ? '◼ Ambiance active' : '△ Activer l’ambiance'}</button>; }
