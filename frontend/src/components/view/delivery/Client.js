const Client = ({ data }) => {
    return (
        <div className="bg-white w-full text-black text-sm font-semilight text-start p-4 rounded-md mt-2">
            <div>Nome: {data?._nome}</div>
            <div>CPF: {data?._cpf}</div>
            <div>Endereço: {data?._endereco}</div>
            <div>Estado: {data?._estado}</div>
            <div>Cep: {data?._cep}</div>
            <div>Pais: {data?._pais}</div>
            <div>GeoLocalização: Lat: {data?._geolocalizao._lat} Lng: {data?._geolocalizao._lng}</div>

        </div>
    )
}
export default Client