import { useState, useEffect } from 'react';
import firebase from 'firebase';

export const useAuth = () => {
  const [user, setUser] = useState<firebase.User>();
  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      const unregisterAuthObserver = firebase
        .auth()
        .onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            firebase.auth().signInAnonymously();
          }
        });
      return () => unregisterAuthObserver();
    }
  });

  return user;
};
