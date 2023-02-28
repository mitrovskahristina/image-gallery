import { Suspense } from 'react'

import './styles.css'
import Cup from './Cup'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Scene = () => {
    
    return (
        <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Cup />
            </Suspense>            
        </Canvas>
    )
}

export default Scene