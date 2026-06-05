import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

type Vec3 = [number, number, number];

type VoxelProps = {
  position: Vec3;
  size?: Vec3;
  color: string;
  roughness?: number;
  metalness?: number;
  emissive?: string;
  emissiveIntensity?: number;
};

function Voxel({
  position,
  size = [1, 1, 1],
  color,
  roughness = 0.7,
  metalness = 0.1,
  emissive = "#000000",
  emissiveIntensity = 0,
}: VoxelProps) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

function Workspace() {
  return (
    <group>
      <Voxel position={[0, 0.9, 0]} size={[4.35, 0.15, 2.25]} color="#c18a4f" roughness={0.86} />
      <Voxel position={[-2, 0.45, -1]} size={[0.15, 0.9, 0.15]} color="#94633c" />
      <Voxel position={[2, 0.45, -1]} size={[0.15, 0.9, 0.15]} color="#94633c" />
      <Voxel position={[-2, 0.45, 1]} size={[0.15, 0.9, 0.15]} color="#94633c" />
      <Voxel position={[2, 0.45, 1]} size={[0.15, 0.9, 0.15]} color="#94633c" />

      <group position={[0.15, 0, 0]} rotation={[0, 0, 0]}>
        <Voxel position={[0, 1.0, -0.34]} size={[1.35, 0.06, 0.82]} color="#b832e6" roughness={0.58} />
        <group position={[0, 1.02, 0.06]}>
          <mesh position={[0, 0.44, 0]} rotation={[0.32, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.35, 0.88, 0.08]} />
            <meshStandardMaterial color="#b832e6" roughness={0.52} />
          </mesh>
          <mesh position={[0, 0.44, -0.055]} rotation={[0.32, 0, 0]}>
            <boxGeometry args={[1.18, 0.68, 0.018]} />
            <meshStandardMaterial color="#e0aaff" emissive="#b5179e" emissiveIntensity={0.95} />
          </mesh>
          <pointLight position={[0, 0.35, -0.5]} color="#e0aaff" intensity={0.95} distance={3} decay={2} />
        </group>
      </group>

      <group position={[-1.45, 1.0, 0.36]}>
        <Voxel position={[0, 0.1, 0]} size={[0.32, 0.22, 0.32]} color="#b56d34" />
        <Voxel position={[0, 0.38, 0]} size={[0.16, 0.42, 0.16]} color="#2ea043" />
        <Voxel position={[-0.11, 0.38, 0]} size={[0.08, 0.18, 0.08]} color="#2ea043" />
        <Voxel position={[0.11, 0.48, 0]} size={[0.08, 0.18, 0.08]} color="#2ea043" />
      </group>

      <group position={[1.38, 1.0, 0.44]}>
        <Voxel position={[0, 0.15, 0]} size={[0.3, 0.3, 0.3]} color="#ffffff" />
        <Voxel position={[0.18, 0.15, 0]} size={[0.08, 0.16, 0.1]} color="#ffffff" />
        <Voxel position={[0, 0.31, 0]} size={[0.22, 0.02, 0.22]} color="#4a2c11" />
      </group>
    </group>
  );
}

function Programmer() {
  return (
    <group position={[0.16, 0, -1.08]}>
      <group>
        <Voxel position={[0, 0.5, 0]} size={[0.9, 0.08, 0.9]} color="#8a5a36" />
        <Voxel position={[0, 0.25, 0]} size={[0.15, 0.5, 0.15]} color="#4a321a" />
        <Voxel position={[0, 0.02, 0]} size={[0.7, 0.04, 0.7]} color="#333333" />
        <Voxel position={[0, 0.95, -0.4]} size={[0.8, 0.8, 0.08]} color="#8a5a36" />
        <Voxel position={[-0.3, 0.6, -0.4]} size={[0.08, 0.2, 0.08]} color="#4a321a" />
        <Voxel position={[0.3, 0.6, -0.4]} size={[0.08, 0.2, 0.08]} color="#4a321a" />
      </group>

      <Voxel position={[-0.22, 0.4, 0.3]} size={[0.22, 0.4, 0.6]} color="#2b2d42" />
      <Voxel position={[0.22, 0.4, 0.3]} size={[0.22, 0.4, 0.6]} color="#2b2d42" />
      <Voxel position={[0, 1.1, 0.1]} size={[1.0, 0.9, 0.7]} color="#1a1a1a" roughness={0.9} />

      <group position={[0, 0.1, 0.1]}>
        <Voxel position={[-0.55, 1.05, 0.4]} size={[0.18, 0.18, 0.5]} color="#1a1a1a" />
        <Voxel position={[-0.52, 1.0, 0.7]} size={[0.15, 0.15, 0.2]} color="#ffd1b3" />
        <Voxel position={[0.55, 1.05, 0.4]} size={[0.18, 0.18, 0.5]} color="#1a1a1a" />
        <Voxel position={[0.52, 1.0, 0.7]} size={[0.15, 0.15, 0.2]} color="#ffd1b3" />
      </group>

      <group position={[0, 1.85, 0.1]}>
        <Voxel position={[0, 0, 0]} size={[0.8, 0.8, 0.8]} color="#ffd1b3" />
        <Voxel position={[0, 0.42, 0]} size={[0.84, 0.15, 0.84]} color="#2d2d2d" />
        <Voxel position={[0, 0.1, -0.38]} size={[0.84, 0.6, 0.12]} color="#2d2d2d" />
        <Voxel position={[-0.39, 0.2, 0.05]} size={[0.08, 0.4, 0.7]} color="#2d2d2d" />
        <Voxel position={[0.39, 0.2, 0.05]} size={[0.08, 0.4, 0.7]} color="#2d2d2d" />
        <Voxel position={[0, 0.38, 0.32]} size={[0.84, 0.15, 0.2]} color="#2d2d2d" />

        <group position={[0, 0.05, 0.42]}>
          <Voxel position={[-0.22, 0, 0]} size={[0.28, 0.28, 0.05]} color="#111111" />
          <Voxel
            position={[-0.22, 0, 0.01]}
            size={[0.22, 0.22, 0.04]}
            color="#a2d2ff"
            roughness={0.1}
            metalness={0.9}
          />
          <Voxel position={[0.22, 0, 0]} size={[0.28, 0.28, 0.05]} color="#111111" />
          <Voxel
            position={[0.22, 0, 0.01]}
            size={[0.22, 0.22, 0.04]}
            color="#a2d2ff"
            roughness={0.1}
            metalness={0.9}
          />
          <Voxel position={[0, 0.04, 0]} size={[0.18, 0.05, 0.05]} color="#111111" />
        </group>

        <Voxel position={[0, -0.08, 0.43]} size={[0.12, 0.14, 0.1]} color="#fca3b7" />
      </group>
    </group>
  );
}

function useIsNarrowScreen() {
  const [isNarrow, setIsNarrow] = useState(() => window.matchMedia("(max-width: 740px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 740px)");
    const update = () => setIsNarrow(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isNarrow;
}

export function VoxelScene() {
  const isNarrow = useIsNarrowScreen();
  const cameraZoom = isNarrow ? 44 : 72;
  const scenePosition: Vec3 = isNarrow ? [-0.38, -0.34, 0] : [0, -0.74, 0];
  const controlsTarget: Vec3 = isNarrow ? [0, 0.8, 0] : [0, 0.72, 0];

  return (
    <div className="scene-canvas" aria-label="Interactive voxel developer workspace">
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}>
        <OrthographicCamera makeDefault position={[7.5, 6.4, 8.5]} zoom={cameraZoom} near={0.1} far={1000} />
        <ambientLight intensity={0.72} />
        <directionalLight
          position={[10, 16, 8]}
          intensity={1.65}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <directionalLight position={[-8, 5, -5]} intensity={0.35} color="#a2d2ff" />

        <group position={scenePosition} rotation={[0, -0.12, 0]}>
          <Workspace />
          <Programmer />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </group>

        <OrbitControls
          enableDamping
          autoRotate
          autoRotateSpeed={0.2}
          dampingFactor={0.05}
          target={controlsTarget}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minZoom={isNarrow ? 36 : 60}
          maxZoom={250}
        />
      </Canvas>
    </div>
  );
}
