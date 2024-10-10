'use client';
import Head from '@/component/head/page-head';
import SubHead from '@/component/head/page-sub-head';
import Tringle from '@/component/tringle/page-tringle';
import ReverseTringle from '@/component/tringle/page-reverse-triangle';
import ReplaceBlock from '@/component/replace_block/page-raplace-block';
import Footer from '@/component/footer/page-footer';
import classes from '../component/head/page-head.module.css';
import Reviews from '@/component/reviews/page-reviews';
import MakePillow from '@/component/make_pillows/page-make-pillows';
import Slider from '@/component/slider_main_page/page-slider-main';
import MapGoogle from '@/component/map_google/page-map-google';
import ImgSection from '@/component/canvas/ImgSection';
import ImageMainBlock from '@/component/main_block/page-main-block';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyBzQUiiA479cUSNuTG_gecN_Iw-pfTrwno',
  authDomain: 'mevaro-48817.firebaseapp.com',
  projectId: 'mevaro-48817',
  storageBucket: 'mevaro-48817.appspot.com',
  messagingSenderId: '999314351470',
  appId: '1:999314351470:web:2cd067d78ce33394504d7f',
  vapidKey:
    'BL6SI-ZFv4sJx8Q3hue4I9QvB20JLQ8FCO27EPH7aeW2NzEgnoHma8J2Q_OWb-WGB1lWDZtMfTwi3X8sYynTU-o',
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    // Инициализация Firebase
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    // Регистрация Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log(
            'Service Worker registered with scope:',
            registration.scope
          );
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Функция для запроса разрешения на уведомления
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(messaging, {
            vapidKey: firebaseConfig.vapidKey,
          });
          if (token) {
            console.log('FCM Token:', token);
          }
        } else {
          console.warn('Notification permission denied.');
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }
    };

    requestNotificationPermission();

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received:', payload); // Логируем полное сообщение

      if (payload.notification) {
        setNotificationData(payload.notification);
        setModalOpen(true); // Открываем модальное окно
      } else {
        console.warn('No notification found in payload.');
      }
    });

    // Очистка подписки при размонтировании компонента
    return () => {
      unsubscribe();
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main>
      <div className={classes.container_head_block}>
        <Head />
        <SubHead />
      </div>
      <ImageMainBlock />
      <Tringle />
      <ImgSection />
      <Tringle />
      <Slider />
      <ReverseTringle />
      <ReplaceBlock />
      <ReverseTringle />
      <MakePillow />
      <ReverseTringle />
      <Reviews />
      <MapGoogle />
      <Footer />

      {modalOpen && notificationData && (
        <div className="modal">
          <div className="modal-content">
            <h3>{notificationData.title}</h3>
            <a href={notificationData.body}>Жмакай!</a>

            <button onClick={closeModal}></button>
          </div>
        </div>
      )}

      {/* Стили для модального окна */}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 17%;
          left: 0;
          width: 300px;
          height: 100px;
          // background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </main>
  );
}
