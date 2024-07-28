import { getFabricBySlug as get } from '@/lib/fabric';
import React from 'react';
import classes from './page-fabric.module.css';
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const fabric = await get(params?.slug);
  return {
    title: fabric.title,
    description: fabric.description,
  };
};
const FabricItem = async ({ params }: { params: { slug: string } }) => {
  const fabric = await get(params?.slug);
  return <main className={`${classes.container_div}`}>{fabric?.title}</main>;
};

export default FabricItem;
