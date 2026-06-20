"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions using useMemo to avoid regenerating on every render
  const sphere = useMemo(() => {
    const data = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });
    // the typings for random.inSphere might return Float32Array or undefined, handle gracefully
    return data as Float32Array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8B004A"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.2}>
      <meshStandardMaterial
        color="#8E44AD"
        wireframe={true}
        emissive="#8B004A"
        emissiveIntensity={0.5}
        transparent={true}
        opacity={0.3}
      />
    </Sphere>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#8B004A" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#8E44AD" />
        <Particles />
        <GlowingSphere />
      </Canvas>
    </div>
  );
}
