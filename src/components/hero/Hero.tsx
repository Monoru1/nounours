import { lazy, Suspense } from 'react';
import type { BearStyle } from '../../App';
const BearScene = lazy(() => import('../scene/BearScene').then(module => ({ default: module.BearScene })));
export function Hero({ style }: { style: BearStyle }) { return <section id="accueil" className="hero"><div className="sunbeam"/><div className="hero-copy"><p className="eyebrow">Un compagnon pour longtemps</p><h1>Les années passent.<br/><em>Lui reste.</em></h1><a href="#personnaliser" className="soft-button">Commencer une histoire <span>↘</span></a></div><Suspense fallback={<div className="scene-loading"/>}><BearScene style={style} mode="hero"/></Suspense><p className="scroll-note">Descendre doucement <span>↓</span></p></section>; }
