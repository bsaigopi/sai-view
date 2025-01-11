import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('sai-view/modelPlanet-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="BezierCircle" rotation={[-Math.PI / 2, 0, 0]} scale={0.085}>
          <group name="Sphere001" position={[0.996, 0, 0]} scale={0.067}>
            <mesh name="Sphere001_Material001_0" geometry={nodes.Sphere001_Material001_0.geometry} material={materials['Material.001']} />
          </group>
        </group>
        <group name="BezierCircle001" rotation={[-Math.PI / 2, 0, 0]} scale={0.143}>
          <group name="Sphere002" position={[0.998, 0, 0]} scale={0.066}>
            <mesh name="Sphere002_Material002_0" geometry={nodes.Sphere002_Material002_0.geometry} material={materials['Material.002']} />
          </group>
        </group>
        <group name="BezierCircle002" rotation={[-Math.PI / 2, 0, 0]} scale={0.207}>
          <group name="Sphere003" position={[0.995, 0, 0]} scale={0.055}>
            <mesh name="Sphere003_Material003_0" geometry={nodes.Sphere003_Material003_0.geometry} material={materials['Material.003']} />
          </group>
        </group>
        <group name="BezierCircle003" rotation={[-Math.PI / 2, 0, 0]} scale={0.271}>
          <group name="Sphere004" position={[0.999, 0, 0]} scale={0.044}>
            <mesh name="Sphere004_Material004_0" geometry={nodes.Sphere004_Material004_0.geometry} material={materials['Material.004']} />
          </group>
        </group>
        <group name="BezierCircle004" rotation={[-Math.PI / 2, 0, 0]} scale={0.376}>
          <group name="Sphere005" position={[0.993, 0, 0]} scale={0.105}>
            <mesh name="Sphere005_Material005_0" geometry={nodes.Sphere005_Material005_0.geometry} material={materials['Material.005']} />
          </group>
        </group>
        <group name="BezierCircle005" rotation={[-Math.PI / 2, 0, 0]} scale={0.518}>
          <group name="Sphere006" position={[0.998, 0, 0]} scale={0.056}>
            <mesh name="Sphere006_Material006_0" geometry={nodes.Sphere006_Material006_0.geometry} material={materials['Material.006']} />
          </group>
        </group>
        <group name="BezierCircle006" rotation={[-Math.PI / 2, 0, 0]} scale={0.611}>
          <group name="Sphere007" position={[0.998, 0, 0]} scale={0.022}>
            <mesh name="Sphere007_Material007_0" geometry={nodes.Sphere007_Material007_0.geometry} material={materials['Material.007']} />
          </group>
        </group>
        <mesh name="Sphere_Material_0" geometry={nodes.Sphere_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={0.044} />
      </group>
    </group>
  )
}

useGLTF.preload('sai-view/modelPlanet-transformed.glb')
