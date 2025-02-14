
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('modelrocketemail-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.rocket_mtl} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.character_mtl} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.fire_mtl} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.fire_mtl} skeleton={nodes.Object_13.skeleton} />
        <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.fire_mtl} skeleton={nodes.Object_15.skeleton} />
        <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.fire_mtl} skeleton={nodes.Object_17.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('modelrocketemail-transformed.glb')
