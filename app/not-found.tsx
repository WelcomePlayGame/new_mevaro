import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update';
import Head from 'next/head';

export const generateMetadata = async () => {
  return {
    title: 'Сторінка 404',
    description:
      'Даної сторінки не існує - Можливо скористайтесь головним меню',
  };
};
const NotFound = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex flex-col items-center pt-[150px]  h-[90vh]">
        <span className="text-[2rem] flex flex-col">
          Сторінка не знайдена - 404
        </span>
        <ol>
          <li>
            <a
              href="https://mevaro.kiev.ua/"
              className="bg-slate-400 p-[7px] rounded mt-[30px] gap-[10px]"
            >
              Головна Сторінка - Перейти
            </a>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
