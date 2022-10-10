import { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { getUsuariosPorNome } from '../services/UsuariosService';

function ModalUsuario({ setVisible, visible, nome }) {
  const [usuario, setUsuario] = useState();

  const carregaUsuarios = async () => {
    const dadosUsuario = await getUsuariosPorNome(nome);
    setUsuario(dadosUsuario);
  };
  useEffect(() => {
    carregaUsuarios();
  }, []);
  return (
    <>
      <Modal visible={visible}>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.fechar}
        >
          <Text>X</Text>
        </TouchableOpacity>
        {!usuario ? (
          <ActivityIndicator
            size={45}
            color={'black'}
            style={styles.carregando}
          />
        ) : (
          <View style={styles.infoContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: usuario.avatar_url }}
                style={styles.imagemUsuario}
              />
            </View>
            <Text style={styles.titulo}>Informações Pessoais</Text>
            <Text style={styles.informacoes}>
              <strong>Nome:</strong> {usuario.login}
            </Text>
            <Text style={styles.informacoes}>
              <strong>Empresa:</strong>{' '}
              {usuario.company ? usuario.company : 'N/A'}
            </Text>
            <Text style={styles.informacoes}>
              <strong>Seguidores:</strong> {usuario.followers.length}
            </Text>
            <Text style={styles.informacoes}>
              <strong>Seguindo:</strong> {usuario.following}
            </Text>
            <Text style={styles.informacoes}>
              <strong>Pais:</strong>{' '}
              {usuario.location ? usuario.location : 'N/A'}
            </Text>
            <Text style={styles.informacoes}>
              <strong>Link do perfil:</strong> {usuario.url}
            </Text>
          </View>
        )}
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    margin: 10,
  },

  imagemUsuario: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 25,
    marginVertical: 10,
    textTransform: 'upperCase',
  },

  carregando: {
    margin: 'auto',
  },

  fechar: {
    alignItems: 'flex-end',
    marginRight: 15,
  },

  informacoes: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ModalUsuario;
