// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr8f5XIYwQ7X0l2r8I0Qwgf04yPu4iTbU",
  authDomain: "greenity-62d3e.firebaseapp.com",
  projectId: "greenity-62d3e",
  storageBucket: "greenity-62d3e.firebasestorage.app",
  messagingSenderId: "660381282028",
  appId: "1:660381282028:web:332ad6f5b6366d746fbfc9",
  measurementId: "G-JN6EDM80JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestFirebaseNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BLmGrCIDZh_w1wEg8ofpRfmkaxWRQX0w0qBstZE6Minq_laXKxKGNlymeW7g_ZaNY783BAIvOG64ygf1PaBBxRc"
    });
    return token;
  } catch (error) {
    console.error("Error getting FCM token:", error);
    return null;
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });