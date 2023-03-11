

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Shaft } from './Loader';

function App() {
  return (
    <div className="App">
     <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, 5, 10]} />
    <pointLight position={[-10, 10, -10]} />
    <Shaft/>
    <OrbitControls/>
  </Canvas>,
    </div>
  );
}

export default App;
