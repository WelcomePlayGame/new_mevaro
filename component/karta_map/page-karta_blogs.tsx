'use client';
import classes from './karta_map.module.css';
import { getAllBlogs } from '@/lib/blog';
import { useEffect, useState } from 'react';

const KartaBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBlogs();
        setBlogs(response);
      } catch (error) {
        console.error('Error fetching fabrics:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <ol className={`${classes.wrap_karta_map_div_ol}`}>
        {blogs.map((blog) => (
          <li key={blog.id} className="">
            <a href={`/blogs/${blog.slug}`}>{blog.title}</a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default KartaBlogs;
