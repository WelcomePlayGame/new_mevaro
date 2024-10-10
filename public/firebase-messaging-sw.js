// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging';

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
// Initialize the Firebase app
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Handle background messages
onBackgroundMessage(messaging, (payload) => {
  console.log('Received background message:', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
