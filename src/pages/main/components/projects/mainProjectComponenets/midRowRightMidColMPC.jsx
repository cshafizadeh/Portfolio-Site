import '../projectTest.css';
import React, { Suspense, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import marble from '../../../../../components/img/marble.jpeg';
import Computer from './Computer.js';

function Box() {
  const colorMap = useLoader(TextureLoader, marble);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default function MidRowRightMidComponent() {
  return (
    <Canvas className='canvas'>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1}/>
      <Suspense fallback={null}>
        <Computer />
      </Suspense>
    </Canvas>
  )
}
