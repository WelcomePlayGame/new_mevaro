'use client';
import React, { useState, useEffect } from 'react';
import Head from '@/component/head/page-head';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Footer from '@/component/footer/page-footer';
import Image from 'next/image';
import { title } from 'process';

const Order = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [countMaterial, setCountMaretial] = useState('');
  const [colorName, setColorName] = useState('');
  const [sumOrder, setSumOrder] = useState('');
  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiKey: process.env.POSHTA_KEY,
            modelName: 'AddressGeneral',
            calledMethod: 'getWarehouses',
            methodProperties: {
              FindByString: searchTerm,
              Limit: '100',
            },
          }),
        });

        const data = await response.json();
        if (data.success) {
          // Обработка данных об отделениях
          setWarehouses(data.data);
        } else {
          console.error('Failed to fetch warehouses:', data.errors);
        }
      } catch (error) {
        console.error('Error fetching warehouses:', error);
      }
    };

    if (searchTerm) {
      fetchWarehouses();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = sessionStorage.getItem('url');
      const title = sessionStorage.getItem('title');
      const count = sessionStorage.getItem('count');
      const colorName = sessionStorage.getItem('colorName');
      const sum = sessionStorage.getItem('sum');
      setImageUrl(url ? `${process.env.URL_AWS}${url}` : '');
      setImageAlt(title || '');
      setCountMaretial(count);
      setColorName(colorName);
      setSumOrder(sum);
    }
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWarehouses = warehouses.filter((warehouse) =>
    warehouse.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <div className={classes.container_head_block}>
        <Head />
        <SubHead />

        <div className="flex flex-col mt-[50px] mb-[400px]">
          <div className="flex justify-around items-center mb-[30px]">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="П.І.Б"
                className="border-[1px] border-[#000] w-[300px] rounded text-center m-[10px]"
              />
              <input
                type="text"
                placeholder="+380(**)*******"
                className="border-[1px] border-[#000] w-[300px] rounded text-center m-[10px]"
              />
            </div>
            <div className="flex justify-around gap-10">
              <Image
                src={imageUrl}
                width={200}
                height={200}
                alt={imageAlt}
                className="rounded"
              />
              <div className="flex justify-between gap-10">
                <div className="flex flex-col text-[20px]">
                  <div>Кіль-сть: </div>
                  <div>Назва: </div>
                </div>
                <div className="flex flex-col text-[20px]">
                  <div>{countMaterial} пог.м</div>
                  <div>{colorName}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-[30px]">
            <div className="flex justify-between gap-20">
              <span>Загальна вартість:</span>
              <span>
                <span className="text-[22px] font-bold">{sumOrder}</span> грн
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Напишіть № відділення Нової Пошти"
              value={searchTerm}
              onChange={handleSearch}
              className="border-[1px] border-[#000] w-[300px] rounded text-center m-[10px]"
            />
            {searchTerm && (
              <select className="border-[3px] border-[#000]">
                {filteredWarehouses.map((warehouse) => (
                  <option
                    key={warehouse.Ref}
                    value={warehouse.Ref}
                    className="bg-slate-600 bg-opacity-10"
                  >
                    {warehouse.Description}
                    {/* ({warehouse.ShortAddress}) */}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex justify-center mt-[50px]">
            <a className="bg-[#000] bg-opacity-[30] rounded-[7px] text-[#fff] text-center p-[15px] ">
              Відправити на обробку
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Order;
