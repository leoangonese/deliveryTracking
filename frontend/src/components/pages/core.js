// imports
import { useEffect, useState } from 'react';
// components
import PrimaryInput from '../form/input/Primary';
import PrimaryButton from '../form/btn/Submit';
import Client from '../view/delivery/Client';
import StatusClient from '../view/delivery/Status';
import InitialPage from '../layout/Initial';
import Store from '../view/delivery/Store';
// api
import { getEnterprise } from '../../api/get/enterprise';
import { getDelivery } from '../../api/get/delivery';

const HomePage = () => {
    // vars
    const [delivery, setDelivery] = useState({})
    const [enterprise, setEnterprise] = useState({})
    const [step, setStep] = useState(true);
    const [cpf, setCpf] = useState('')
    const [error, setError] = useState('')

    // functions
    const findCpf = async (cpf) => {
        const core = await getDelivery(cpf, setDelivery);
        if (core) {
            console.log('status', delivery)
            setStep(false);
            setError(false)
        }
        else {
            setError(true)
        }
    };

    const findEnterprise = async () => {
        await getEnterprise(delivery?._id_transportadora, setEnterprise);
    }

    useEffect(() => {
        findEnterprise()
    }, [delivery?._id_transportadora])

    return (
        <InitialPage>
            {step ? (
                <div className='w-9/12 flex items-center justify-center mt-10 flex-col'>
                    <PrimaryInput error={error} name='cpf' id='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='999.999.999-99' label='Digite o CPF desejado:*' />
                    <div className='p-2'></div>
                    {error ? <p className='mb-2 text-red-600 font-bold text-lg bg-white px-2 rounded-md'>CPF invalido!</p> : ''}
                    <PrimaryButton onClick={() => findCpf(cpf)} text='Pesquisar' />

                </div>
            ) : (
                <div className='w-full md:w-96'>
                    <div className="bg-white w-full text-black text-sm font-semilight text-start p-4 rounded-md mt-10">
                        <div>Remetente: {delivery?._remetente?._nome}</div>
                        <div>Volume: {delivery?._volumes}</div>
                    </div>
                    <Client data={delivery?._destinatario} />
                    <StatusClient data={delivery?._rastreamento} />
                    {delivery._id_transportadora ? <Store data={enterprise.data} /> : ''}
                    <div className='py-2'></div>
                    <PrimaryButton onClick={() => setStep(true)} text='Voltar' />
                </div>
            )
            }
        </InitialPage>
    );
};

export default HomePage;
