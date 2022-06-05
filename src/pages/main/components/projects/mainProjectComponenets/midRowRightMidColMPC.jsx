import '../projectTest.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Computer from './Computer.js';


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
