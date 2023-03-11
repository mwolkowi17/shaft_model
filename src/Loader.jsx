import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, {useRef,useState} from 'react';

export const Shaft=()=>{
    const gltf = useLoader(GLTFLoader, '/models/sprzeglo_klowe_for_app.glb')
    const mesh = useRef()
    const [motion,setMotion]= useState(true)
    
    const ifMotion = motion ? 1 : 0
    useFrame((state, delta) => (mesh.current.rotation.x -=ifMotion*delta))
    return(
        <>
        <primitive object={gltf.scene} dispose={null} ref={mesh} onPointerDown={(e) =>{ setMotion(!motion); console.log('clicked')}}/>
        </>
    )
}