'use client';
import { initializeFirebase } from '@/firebase';
import { FirebaseProvider } from '@/firebase/provider';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import { ReactNode, useEffect, useState } from 'react';

type FirebaseServices = {
  app: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
};

// We need a client component to initialize Firebase on the client.
export const FirebaseClientProvider = ({ children }: { children: ReactNode }) => {
  const [firebase, setFirebase] = useState<FirebaseServices | null>(null);

  useEffect(() => {
    // initializeFirebase is idempotent, so we can call it on every render.
    const firebaseServices = initializeFirebase();
    setFirebase(firebaseServices);
  }, []);

  if (!firebase) {
    // You can show a loading skeleton here.
    return null;
  }

  return (
    <FirebaseProvider
      app={firebase.app}
      firestore={firebase.firestore}
      auth={firebase.auth}
    >
      {children}
    </FirebaseProvider>
  );
};
