import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDr8f5XIYwQ7X0l2r8I0Qwgf04yPu4iTbU",
  authDomain: "greenity-62d3e.firebaseapp.com",
  projectId: "greenity-62d3e",
  appId: "1:660381282028:web:332ad6f5b6366d746fbfc9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);