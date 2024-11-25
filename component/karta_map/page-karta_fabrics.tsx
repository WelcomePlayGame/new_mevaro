'use client';
import classes from './karta_map.module.css';
import { getAllFabrics } from '@/lib/fabric';
import { useEffect, useState } from 'react';

const KartaFabrics = () => {
  const [fabrics, setFabrics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFabrics();
        setFabrics(response);
      } catch (error) {
        console.error('Error fetching fabrics:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <ol className={`${classes.wrap_karta_map_div_ol}`}>
        {fabrics.map((fabric) => (
          <li key={fabric.id} className="">
            <a href={`/fabrics/${fabric.slug}`}>{fabric.title}</a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default KartaFabrics;
