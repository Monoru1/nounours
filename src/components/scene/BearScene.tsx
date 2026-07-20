import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Sparkles } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import type { BearStyle } from '../../App';

function Bear({ style, mode }: { style: BearStyle; mode: 'hero' | 'config' }) {
  const group = useRef<THREE.Group>(null); const [hug, setHug] = useState(0); const target = useRef(new THREE.Vector2());
  useFrame(({ clock, pointer }) => { if (!group.current) return; target.current.lerp(pointer, .025); const breath = Math.sin(clock.elapsedTime * 1.3) * .025; group.current.rotation.y = target.current.x * .16; group.current.rotation.x = -target.current.y * .06; group.current.position.y = breath; });
  const scale = style.size === 'Petit' ? .83 : style.size === 'Grand' ? 1.16 : 1;
  return <group ref={group} scale={scale} onClick={() => setHug(value => value ? 0 : 1)}>
    <mesh position={[0, .1, 0]} castShadow><sphereGeometry args={[.92, 48, 48]}/><meshStandardMaterial color={style.color} roughness={.92} metalness={.02}/></mesh>
    <mesh position={[0, 1.05, .02]} castShadow><sphereGeometry args={[.72, 48, 48]}/><meshStandardMaterial color={style.color} roughness={.9}/></mesh>
    {[-.5,.5].map(x => <mesh key={x} position={[x,1.63,0]} castShadow><sphereGeometry args={[.27,32,32]}/><meshStandardMaterial color={style.color} roughness={.95}/></mesh>)}
    {[-.25,.25].map(x => <mesh key={x} position={[x,1.18,.64]}><sphereGeometry args={[.065,24,24]}/><meshPhysicalMaterial color="#201716" roughness={.18} clearcoat={1}/></mesh>)}
    <mesh position={[0,.88,.68]} scale={[1.25,.85,1]}><sphereGeometry args={[.18,32,32]}/><meshStandardMaterial color="#d9ad80" roughness={.9}/></mesh><mesh position={[0,.9,.84]} scale={[1,.7,.55]}><sphereGeometry args={[.07,24,24]}/><meshPhysicalMaterial color="#30211e" roughness={.35}/></mesh>
    {[-1,1].map(side => <group key={side} rotation-z={side * (.38 - hug*.22)} position={[side*.78,.2,.05]}><mesh castShadow><capsuleGeometry args={[.22,.68,16,32]}/><meshStandardMaterial color={style.color} roughness={.94}/></mesh></group>)}
    <mesh position={[0,.22,.78]} rotation-x={Math.PI/2}><torusGeometry args={[.43,.055,16,48]}/><meshStandardMaterial color={style.ribbon} roughness={.7}/></mesh>
  </group>;
}
export function BearScene({ style, mode }: { style: BearStyle; mode: 'hero' | 'config' }) { return <div className={`bear-scene ${mode}`} aria-label="Nounours interactif : déplacez le curseur, puis cliquez pour un câlin"><Canvas shadows dpr={[1, 1.5]} camera={{ position:[0,1.1,4.3], fov:35 }}><color attach="background" args={[mode === 'hero' ? '#e9ddca' : '#d8c6ae']}/><ambientLight intensity={1.3}/><directionalLight position={[-3,5,4]} intensity={2.2} castShadow/><Environment preset="apartment"/><Float speed={.55} rotationIntensity={.04} floatIntensity={.12}><Bear style={style} mode={mode}/></Float><ContactShadows position={[0,-.88,0]} opacity={.28} scale={5} blur={2.5} far={4}/>{mode==='hero'&&<Sparkles count={45} scale={[5,4,2]} size={1.5} speed={.14} color="#fff7df"/>}</Canvas></div>; }
