import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

export const initializeFirebase = () => {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  return { app, firestore, auth };
};

export { FirebaseProvider, FirebaseClientProvider } from './client-provider';
export { useCollection } from './firestore/use-collection';
export {
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
} from './provider';
