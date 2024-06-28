import Head from '@/component/head/page-head';
import SubHead from '@/component/head/page-sub-head';
import VideoHead from '@/component/video/page-video';
import dynamic from 'next/dynamic';
import Tringle from '@/component/tringle/page-tringle';
import ReverseTringle from '@/component/tringle/page-reverse-triangle';
import ReplaceBlock from '@/component/replace_block/page-raplace-block';
import Footer from '@/component/footer/page-footer';
import classes from '../component/head/page-head.module.css';
import Reviews from '@/component/reviews/page-reviews';
import { Suspense } from 'react';

const CanvasSofaModel = dynamic(
  () => import('@/component/canvas/CanvasSofaModel'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <VideoHead />
      <Tringle />
      <Suspense fallback="loading">
        <CanvasSofaModel />
      </Suspense>
      <ReverseTringle />
      <ReplaceBlock />
      <Reviews />
      <Footer />
    </main>
  );
}
