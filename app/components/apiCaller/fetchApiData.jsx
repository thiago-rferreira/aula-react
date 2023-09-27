import axios from 'axios';

const API_URL = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';

const fetchApiData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};

export default fetchApiData;
