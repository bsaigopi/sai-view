import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Mac(props) {
  const { nodes, materials } = useGLTF('mac-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  );
}

useGLTF.preload('mac-transformed.glb');
