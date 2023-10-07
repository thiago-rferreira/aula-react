import axios from 'axios';
const limite = 10;
const API_URL = `https://api.thecatapi.com/v1/images/search?limit=${limite}`;

const gatinhos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};

export default gatinhos;
