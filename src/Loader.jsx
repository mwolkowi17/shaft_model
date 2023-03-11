import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React from 'react';

export const Shaft=()=>{
    const gltf = useLoader(GLTFLoader, '/sprzeglo_klowe_for_app.glb')

    return(
        <>
        <primitive object={gltf.scene} dispose={null}/>
        </>
    )
}