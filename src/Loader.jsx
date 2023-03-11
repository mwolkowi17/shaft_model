import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, {useRef} from 'react';

export const Shaft=()=>{
    const gltf = useLoader(GLTFLoader, '/sprzeglo_klowe_for_app.glb')
    const mesh = useRef()
    //useFrame((state, delta) => (mesh.current.rotation.x -= delta))
    return(
        <>
        <primitive object={gltf.scene} dispose={null} ref={mesh}/>
        </>
    )
}