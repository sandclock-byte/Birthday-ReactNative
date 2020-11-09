import React, { useState, useEffect } from 'react';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <SafeAreaView>
      {user ? <Text>Estas Logeado</Text> : <Text>No estas Logeado</Text>}
    </SafeAreaView>
  );
}