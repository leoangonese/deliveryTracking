import axios from 'axios';

export const getEnterprise = async (id, setData) => {
    try {
        const response = await axios.get(`http://localhost:3001/getEnterprise/${id}`);
        const data = response.data;
        setData(data);
        return true
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        return false
    }
};
