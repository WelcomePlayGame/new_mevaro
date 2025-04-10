'use client';
import React, { useState, useEffect, useRef } from 'react';
import Head from '@/component/head/page-head';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Footer from '@/component/footer/page-footer';
import Image from 'next/image';
import { sendOrderToTelegram } from '@/component/telegram/telegram';
import { addOrder } from '@/lib/order';

const Order = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [countMaterial, setCountMaterial] = useState('');
  const [colorName, setColorName] = useState('');
  const [sumOrder, setSumOrder] = useState('');
  const [selectPoshta, setSelectPoshta] = useState('');
  const pibRef = useRef(null);
  const phoneRef = useRef(null);

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
      setCountMaterial(count);
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

  const handledPoshta = (e) => {
    setSelectPoshta(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('title', imageAlt);
    formData.append('colorName', colorName);
    formData.append('count', countMaterial);
    formData.append('poshta', selectPoshta);
    formData.append('url', imageUrl);
    formData.append('sum', sumOrder);
    formData.append('name', pibRef.current.value);
    formData.append('phone', phoneRef.current.value);
    sessionStorage.setItem('name', pibRef.current.value);
    const order = {
      title: imageAlt,
      colorName: colorName,
      name: pibRef.current.value,
      phone: phoneRef.current.value,
      poshta: selectPoshta,
      price: sumOrder,
      meter: countMaterial,
    };

    sendOrderToTelegram(order);
    await addOrder(formData);
    window.location.href = '/success';
  };

  return (
    <main>
      <div className={`${classes.container_head_block} `}>
        <Head />
        <SubHead />
      </div>
      <div className="flex flex-col   pt-[220px] lg:pt-[185px] mb-[50px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  lg:flex-row lg:justify-around items-center mb-[30px]">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="П.І.Б"
                className="border-[1px] border-[#000] w-[300px] rounded text-center m-[10px]"
                name="p.i.b"
                ref={pibRef}
                required
                title="Напишіть будь-ласка П.І.Б"
              />
              <input
                type="text"
                placeholder="+380*********"
                className="border-[1px] border-[#000] w-[300px] rounded text-center m-[10px]"
                name="phone"
                ref={phoneRef}
                pattern="+380\\d{2}\\d{7}"
                title="Будь ласка, введіть номер телефону у форматі: 380(**)*******"
                required
              />
            </div>
            <div className="flex flex-col  lg:flex-row lg:justify-around gap-10">
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
              <select
                className={`${classes.container_select} border-[3px] border-[#000]`}
                onChange={handledPoshta}
                value={selectPoshta}
              >
                {filteredWarehouses.map((warehouse) => (
                  <option
                    key={warehouse.Ref}
                    value={warehouse.Description}
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
            <button
              type="submit"
              className="bg-[#000] bg-opacity-[30] rounded-[7px] text-[#fff] text-center p-[15px]"
            >
              Відправити на обробку
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default Order;
