'use client';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { ReactNode, createContext, useContext } from 'react';

// The context that will be used to provide the Firebase services.
// We are using a context to avoid having to pass the services down
// through the component tree.
const FirebaseContext = createContext<{
  app: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
}>({
  app: null,
  firestore: null,
  auth: null,
});

// The provider that will be used to wrap the app.
// This will make the Firebase services available to all components.
export const FirebaseProvider = ({
  children,
  app,
  firestore,
  auth,
}: {
  children: ReactNode;
  app: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
}) => {
  return (
    <FirebaseContext.Provider value={{ app, firestore, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// The hooks that will be used to access the Firebase services.
// We are using hooks to make it easy to access the services from
// any component.
export const useFirebase = () => useContext(FirebaseContext);
export const useFirebaseApp = () => useContext(FirebaseContext)?.app;
export const useFirestore = () => useContext(FirebaseContext)?.firestore;
export const useAuth = () => useContext(FirebaseContext)?.auth;
