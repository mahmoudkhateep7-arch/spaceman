'use client'

import { useEffect, useRef } from 'react'
import { Group } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'

type ModelProps = {
  scale?: number | [number, number, number]
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export default function Model({
  scale = 1,
  position = [2, -1, 1],
  rotation = [0, 3, 0],
}: ModelProps) {
  const group = useRef<Group>(null)

  const { nodes, materials, animations } = useGLTF(
    '/assets/tenhun_falling_spaceman_fanart.glb'
  ) as any

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play()
    }
  }, [actions, animations])

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.193}>
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube001_0.skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                geometry={nodes.Cube005_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube005_0.skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                geometry={nodes.Cube002_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube002_0.skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Plane_0.skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                geometry={nodes.Cube008_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube008_0.skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                geometry={nodes.Cube004_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube004_0.skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                geometry={nodes.Cube003_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube003_0.skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={nodes.Cube_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube_0.skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                geometry={nodes.Cube009_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube009_0.skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                geometry={nodes.Cube011_0.geometry}
                material={materials['AstronautFallingTexture.png']}
                skeleton={nodes.Cube011_0.skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>

    </group>
  )
}

useGLTF.preload('/assets/tenhun_falling_spaceman_fanart.glb')