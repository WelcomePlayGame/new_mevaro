import Head from '@/component/head/page-head';
import SubHead from '@/component/head/page-sub-head';
import dynamic from 'next/dynamic';
const CanvasSofaModel = dynamic(
  () => import('@/component/canvas/CanvasSofaModel'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <Head />
      <SubHead />
      <section className={`mt-[30px]`}>
        <CanvasSofaModel />
      </section>
    </main>
  );
}
