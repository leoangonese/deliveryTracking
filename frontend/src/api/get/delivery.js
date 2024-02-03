import axios from 'axios';

export const getDelivery = async (cpf, setData) => {
    try {
        const response = await axios.get(`http://localhost:3001/getDelivery/${cpf}`);
        const data = response.data;

        setData(data.data);
        return true
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        return false
    }
};
