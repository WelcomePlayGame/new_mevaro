'use client';
import { useEffect, useState } from 'react';

const Success = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = sessionStorage.getItem('name');
      setName(name);
    }
  }, []);
  return (
    <main className="flex items-center justify-center h-screen">
      <h2 className="text-center bg-[#000] bg-opacity-35 text-[#fff] p-[20px] text-[20px] rounded-[10px]">
        {name}, Дякуємо за замовлення, співробітники Mevaro скоро з вами
        зв&rsquo;яжуться!
      </h2>
    </main>
  );
};
export default Success;
