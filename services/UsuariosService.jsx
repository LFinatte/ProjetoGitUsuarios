import Usuarios from '../Components/Listar';

//consumindo api usuarios home
const getUsuarios = async () => {
  const linkUsuario = 'https://api.github.com/users';
  try {
    const response = await fetch(linkUsuario);
    // const response = await fetch(linkUsuario, {
    //   headers: { Authorization: 'tokenGeradoNaApi(caso precisar de mais requisições)' },
    // });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//api por nome de usuario
export const getUsuariosPorNome = async (nome) => {
  const linkUsuario = `https://api.github.com/users/${nome}`;
  try {
    const response = await fetch(linkUsuario);
    const data = await response.json();

    try {
      const response = await fetch(
        `https://api.github.com/users/${nome}/followers`,
      );
      const seguidoresData = await response.json();
      data.followers = seguidoresData;
    } catch (error) {
      console.log(
        'Esse erro e originado de dentro da requisicao de seguidores: ' + error,
      );
    }

    // https://api.github.com/users/mojombo/followers
    // https://api.github.com/users/mojombo/repos
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsuarios;
