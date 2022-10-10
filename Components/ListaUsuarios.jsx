import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ModalUsuario from './ModalUsuario';

//modal inferior usuarios
function ListaUsuario({ usuarios }) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.bgUsuario}>
      <Image source={{ uri: usuarios.avatar_url }} style={styles.imgUsuario} />
      <View style={styles.usuariosInfo}>
        <View>
          <Text style={styles.user}>/{usuarios.login}</Text>
          <TouchableOpacity
            style={styles.areaBotao}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.textoBotao}>MAIS INFORMAÇÕES</Text>
          </TouchableOpacity>
        </View>
      </View>

      {visible && (
        <ModalUsuario
          setVisible={setVisible}
          visible={visible}
          nome={usuarios.login}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bgUsuario: {
    marginTop: 20,
    marginHorizontal: 'auto',
    width: '95%',
    height: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgUsuario: {
    height: 99,
    width: 99,
  },

  usuariosInfo: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  areaBotao: {
    width: 180,
    height: 30,
    marginTop: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },

  user: {
    fontSize: 20,
  },
});

export default ListaUsuario;
