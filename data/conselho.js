import axios from 'axios';
const API_URL = `	https://api.adviceslip.com/advice`;

const conselho = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};

export default conselho;
