'use client';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Environment, Center, OrbitControls } from '@react-three/drei';

import { materials_for_sofa } from '@/config/constants';

const SofaModel = dynamic(() => import('./SofaModel'), { ssr: false });
import classes from './page-canvas.module.css';
const CanvasSofaModel = () => {
  const [textureUrl, setTextureUrl] = useState(materials_for_sofa[0].url);
  let fov = 15;
  const isMobile = window.innerWidth <= 600;
  const LargeScren = window.innerWidth >= 1201;
  if (isMobile) fov = 25;
  if (LargeScren) fov = 10;
  return (
    <>
      <div className={`${classes.canvas_block_sofa}`}>
        <h2 className={`${classes.canvas_h2}`}>Перетяжка меблів</h2>
        <div className="">
          {materials_for_sofa.map((material) => (
            <button
              key={material.name}
              onClick={() => setTextureUrl(material.url)}
            >
              <div className={`w-[48px] h-[48px] `}>
                <img
                  src={material.url}
                  alt={material.name}
                  className={`${classes.input_img}`}
                />
              </div>
            </button>
          ))}
        </div>
        <div className={`${classes.container_tooltip}`}>
          <div className={`${classes.tooltip}`}>
            <h3>Додаткові роботи:</h3>
            <ul>
              <li>Заміна поролона</li>
              <li>Заміна пружинного блока</li>
              <li>Заміна або Ремонт Механізму</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.sofa_canvas}`}>
          <Canvas camera={{ position: [0, 2, 5], fov: fov }}>
            <ambientLight intensity={0.1} /> {/* Уменьшите интенсивность */}
            <pointLight position={[10, 10, 10]} intensity={0.1} />{' '}
            {/* Уменьшите интенсивность */}
            <directionalLight position={[-5, -5, 5]} intensity={0.1} />{' '}
            {/* Уменьшите интенсивность */}
            <Environment preset="city" />{' '}
            {/* Измените "forest" на любую другую предустановку */}
            <OrbitControls />
            <Center>
              <SofaModel textureUrl={textureUrl} />
            </Center>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CanvasSofaModel), { ssr: false });
