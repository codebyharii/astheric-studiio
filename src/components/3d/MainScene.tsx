import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { Preload, PerspectiveCamera, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useAppStore } from '../../store/useAppStore';

const Shape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollProgress = useAppStore((state) => state.scrollProgress);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Smoothly rotate based on time + scroll
    meshRef.current.rotation.x = time * 0.1 + scrollProgress * Math.PI * 1.5;
    meshRef.current.rotation.y = time * 0.2 + scrollProgress * Math.PI;
    
    // Mouse interaction
    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.4;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY, 0.1);
    
    // Scale transformations between sections
    const s = 1 + Math.sin(time * 0.5) * 0.1 + scrollProgress * 1.2;
    meshRef.current.scale.set(s, s, s);
    
    // Deformation intensity based on scroll
    if (meshRef.current.material instanceof THREE.ShaderMaterial || (meshRef.current.material as any).distort !== undefined) {
        (meshRef.current.material as any).distort = 0.3 + scrollProgress * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial
          color="#3b82f6"
          speed={2}
          distort={0.4}
          radius={1}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Background wireframe layer */}
      <mesh rotation={[Math.PI / 4, 0, 0]} scale={2.5}>
        <torusKnotGeometry args={[4, 0.04, 256, 32]} />
        <meshStandardMaterial
          color="#1e3a8a"
          transparent
          opacity={0.05}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 2000 }) => {
  const scrollProgress = useAppStore((state) => state.scrollProgress);
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 8 + Math.random() * 8;
        p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.02 + scrollProgress * 1.5;
    pointsRef.current.rotation.x = time * 0.01;
    
    // Camera move through space
    state.camera.position.z = 12 - scrollProgress * 8;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#3b82f6"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const MainScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true, stencil: false, depth: true }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
          
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -20, -10]} intensity={1} color="#3b82f6" />
          
          <Shape />
          <Particles count={2000} />
          
          <Environment preset="night" />
          <Preload all />
          
          <EffectComposer disableNormalPass>
            <Bloom 
              luminanceThreshold={1} 
              mipmapBlur 
              intensity={1.5} 
              radius={0.4} 
            />
            <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

