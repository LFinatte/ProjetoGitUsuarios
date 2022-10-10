import { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import { FlatList } from 'react-native';
import getUsuarios, { getUsuariosPorNome } from '../services/UsuariosService';
import ListaUsuario from './ListaUsuarios';

//barra buscar usuario
function Usuarios() {
  const [carregando, setCarregando] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState('');

  const buscaUsuarios = async () => {
    setCarregando(true);
    let usuarios = await getUsuarios();
    setUsuarios(usuarios);
    setCarregando(false);
  };
  useEffect(() => {
    buscaUsuarios();
  }, []);

  const semDados = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 16,
          marginTop: 16,
        }}
      >
        <Text
          style={{
            color: 'black',
            margin: 16,
            fontWeight: 'bold',
          }}
        >
          {' '}
          {busca}
        </Text>
      </View>
    );
  };
  return (
    <>
      {/* buscar usuario */}
      <TextInput
        placeholder="Buscar"
        autoFocus
        style={styles.campoBuscar}
        onChangeText={(text) => {
          if (text.key !== 'Enter') {
            setBusca(text);
          }
        }}
        onSubmitEditing={async () => {
          await getUsuariosPorNome(busca).then(async (it) => {
            if (it.message !== 'Not Found') {
              setUsuarios([it]);
              setBusca(busca);
            } else {
              setUsuarios(await getUsuarios());
              setBusca(busca);
            }
          });
        }}
        on
      />
      {carregando ? (
        <ActivityIndicator
          size={45}
          color={'black'}
          style={styles.carregando}
        />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={true}
          data={usuarios.filter((usuario) =>
            usuario.login.toLowerCase().includes(busca.toLocaleLowerCase()),
          )}
          renderItem={({ item }) => <ListaUsuario usuarios={item} />}
          ListEmptyComponent={semDados()}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  campoBuscar: {
    marginLeft: 10,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    width: '95%',
    height: 40,
    fontSize: 18,
  },
  carregando: {
    marginVertical: 'auto',
  },
});

export default Usuarios;
