const InitialPage = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-blue-500 flex items-center justify-center flex-col p-5">
            <div className="flex items-center justify-center flex-col">
                <img src='./assets/logo/primary.jpg' width='100px' className='rounded-full' />
                <h1 className="text-2xl font-semibold text-white mt-2 ">Rastreamento de Entrega</h1>
            </div>
            {children}
        </div>
    )
}
export default InitialPage