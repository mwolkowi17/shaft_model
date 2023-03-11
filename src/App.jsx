

import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from './Box';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
     <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    <OrbitControls/>
  </Canvas>,
    </div>
  );
}

export default App;
