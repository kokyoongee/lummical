import { useRef, useEffect, useState } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import type { Mesh, Group } from 'three'
import * as THREE from 'three'

export function Model() {
  const { nodes } = useGLTF('/medias/torrus.glb') as any
  const { viewport } = useThree()
  const torus = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)

  // Track mouse position
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (torus.current) {
      // Base rotation
      torus.current.rotation.x += 0.01

      // Smooth lerp towards mouse-influenced rotation
      targetRotation.current.x = mouse.y * 0.5
      targetRotation.current.y = mouse.x * 0.5
    }

    if (groupRef.current) {
      // Smoothly rotate group based on mouse
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.05
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        0.05
      )
    }
  })

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  }

  return (
    <group ref={groupRef} scale={viewport.width / 3.75}>
      <Text
        font="/fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hello, Lummical
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}

// Preload the model
useGLTF.preload('/medias/torrus.glb')
