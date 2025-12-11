import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Model } from './Model'

interface GlassSceneProps {
  className?: string
}

export function GlassScene({ className = '' }: GlassSceneProps) {
  return (
    <div className={`${className}`} style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <Canvas style={{ background: '#000000' }}>
        <Suspense fallback={null}>
          <Model />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
