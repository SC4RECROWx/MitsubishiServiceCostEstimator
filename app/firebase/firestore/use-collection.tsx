'use client';
import { useEffect, useState, useRef } from 'react';
import {
  collection,
  query,
  onSnapshot,
  Query,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from 'firebase/firestore';

// T is the type of the document data.
// We can use this to make sure that the data we get back from Firestore
// is of the correct type.
export const useCollection = <T,>(
  q: Query | null,
  options?: {
    // By default, useCollection will not include the document ID in the data.
    // If you need the ID, you can set includeId to true.
    includeId?: boolean;
  }
) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  // We use a ref to store the last query we used.
  // This is to prevent re-rendering when the query changes.
  const lastQuery = useRef(q);

  useEffect(() => {
    if (!q) {
      setLoading(false);
      setData([]);
      return;
    }

    // We only want to re-run the effect if the query has changed.
    if (lastQuery.current !== q) {
      lastQuery.current = q;
    }

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot: QuerySnapshot<DocumentData>) => {
        const data: T[] = [];
        querySnapshot.forEach((doc) => {
          if (options?.includeId) {
            data.push({ id: doc.id, ...doc.data() } as T);
          } else {
            data.push(doc.data() as T);
          }
        });
        setData(data);
        setLoading(false);
      },
      (err: FirestoreError) => {
        setError(err);
        setLoading(false);
      }
    );

    // We need to unsubscribe from the listener when the component unmounts.
    return () => unsubscribe();
  }, [q, options?.includeId]);

  return { data, loading, error };
};
