import { View, StyleSheet, Image, Text } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerTexto}>
        <Text style={styles.texto}>CONSULTAS GITHUB</Text>
        <Text style={styles.subtitulo}>Pesquise por usuários</Text>
      </View>
      <View style={styles.headerImagem}>
        <Image source={require('../Images/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTexto: {
    alignSelf: 'center',
    marginLeft: 10,
  },

  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignContent: 'space-around',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  headerImagem: {
    alignSelf: 'center',
  },

  logo: {
    width: 50,
    height: 50,
    marginLeft: 100,
  },

  texto: {
    fontSize: 23,
    color: 'black',
  },

  subtitulo: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
