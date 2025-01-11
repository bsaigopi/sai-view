import { useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";

const Planets = () => {
  const groupRef = useRef();
  const [positions] = useState(() =>
    Array.from({ length: 10 }, () => ({
      x: Math.random() * 8 - 4, // Random x position
      y: Math.random() * 6 - 3, // Random y position
      z: Math.random() * 6 - 3, // Random z position
      dx: Math.random() * 0.01 - 0.005, // Random x direction
      dy: Math.random() * 0.01 - 0.005, // Random y direction
    }))
  );

  // Load textures for planets
  const planetTextures = useLoader(TextureLoader, [
    "https://example.com/earth.jpg", // Replace with actual texture URLs
    "https://example.com/mars.jpg",
    "https://example.com/jupiter.jpg",
    "https://example.com/saturn.jpg",
  ]);

  useFrame(() => {
    positions.forEach((p) => {
      p.x += p.dx; // Update x position
      p.y += p.dy; // Update y position

      // Reverse direction if hitting the boundary
      if (p.x > 4 || p.x < -4) p.dx = -p.dx;
      if (p.y > 3 || p.y < -3) p.dy = -p.dy;
    });

    // Update group position
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.x = positions[i].x;
        child.position.y = positions[i].y;
        child.position.z = positions[i].z;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <Sphere key={i} args={[0.5, 32, 32]} position={[p.x, p.y, p.z]}>
          <meshStandardMaterial
            map={planetTextures[i % planetTextures.length]} // Cycle through textures
            roughness={0.7} // More rough for a realistic look
            metalness={0.2} // Low metalness for rocky planets
            normalMap={planetTextures[i % planetTextures.length]} // Add normal map for surface detail
          />
        </Sphere>
      ))}
    </group>
  );
};

export default Planets;
