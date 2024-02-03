export const dateFormat = (item) => {
    const dataFormatada = new Date(item);
    return dataFormatada.toLocaleString("pt-BR")
}

export const formatCNPJ = (cnpj) => {
    const cleanedCNPJ = cnpj.replace(/\D/g, '');

    return cleanedCNPJ.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
    );
};
