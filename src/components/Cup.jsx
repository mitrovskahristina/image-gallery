/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cup.gltf
*/

import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cup.gltf')
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['07 - Default']} rotation={[0, 9.5, 0]} />
    </group>
  )
}

useGLTF.preload('/cup.gltf')