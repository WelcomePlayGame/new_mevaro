import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import SubHead from '@/component/head/page-sub-head';
import Image from 'next/image';

const NotFound = () => {
  return (
    <>
      <Head />
      <SubHead />
      <div className="flex justify-center  h-[40rem] ">
        {/* <Image
          src="/image/404.png"
          width={600}
          height={300}
          objectFit="cover"
          alt="Сторінка 404"
        /> */}
        <span className="text-[2rem] flex flex-col">
          Сторінка не знайдена - 404
        </span>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
