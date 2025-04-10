'use client';

import { useGLTF, useTexture } from '@react-three/drei';
import React, { useEffect } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';

const SofaModel = ({ textureUrl }: { textureUrl: string }) => {
  const { nodes } = useGLTF('/model/modern_sofa.glb') as any;

  // Загрузка текстуры
  const texture = useTexture(textureUrl);

  const texturedMaterial = new MeshStandardMaterial({
    map: texture,
    color: '#ffffff',
    roughness: 1,
    metalness: 0,
  });

  useEffect(() => {
    console.log('Nodes:', nodes);
  }, [nodes]);

  return (
    <group>
      {Object.keys(nodes).map((nodeName) => {
        const node = nodes[nodeName];

        if (node instanceof Mesh) {
          return (
            <mesh
              key={node.uuid}
              geometry={node.geometry}
              material={texturedMaterial}
            />
          );
        }

        return null;
      })}
    </group>
  );
};

export default SofaModel;
