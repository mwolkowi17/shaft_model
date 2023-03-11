

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Shaft } from './Loader';

function App() {
  return (
    <div className="App">
     <Canvas
     camera={{position: [0, 0, 3]}}
     >
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, 5, 10]} />
    <pointLight position={[-10, 10, -10]} />
    <Shaft/>
    <OrbitControls/>
  </Canvas>,
  <p className='info'>To start/pause motion click on model</p>
    </div>
  );
}

export default App;
