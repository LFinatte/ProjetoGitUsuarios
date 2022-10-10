import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import Usuarios from './Components/Listar';

export default function App() {
  return (
    <>
      <Header />
      <Usuarios />
    </>
  );
}
