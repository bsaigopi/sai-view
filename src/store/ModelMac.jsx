/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 modelMac.gltf --transform 
Files: modelMac.gltf [601.97KB] > /Users/saigopibudagam/Downloads/imac/modelMac-transformed.glb [78.11KB] (87%)
Author: dannzjs (https://sketchfab.com/dannzjs)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/imac-b40b903fe1d24bd59fde71934c4cef59
Title: Imac
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('sai-view/modelMac-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_8.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial002} position={[3.205, 38.732, 0.002]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Metal2} position={[3.205, 38.732, 0.002]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.DarkBlue} position={[0.24, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.Screen} position={[0.24, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.Lens} position={[0.24, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.PaletteMaterial003} position={[0.24, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('sai-view/modelMac-transformed.glb')
