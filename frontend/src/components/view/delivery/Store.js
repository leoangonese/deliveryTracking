
const Store = ({ data }) => {
    return (
        <div className="bg-white w-full text-black text-sm font-semilight text-start p-4 rounded-md mt-2">
            <div>Nome Fantasia: {data?._fantasia}</div>
            <div>CNPJ: {parseInt(data?._cnpj)}</div>
        </div>
    )
}
export default Store