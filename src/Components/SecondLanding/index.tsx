import React from 'react';

function index() {
    return (
        <div className='bg-SecondLand h-[277px] bg-cover bg-center p-4 md:h-[412px]'>

            <section className=' flex flex-col gap-2 md:w-8/12 md:m-auto md:flex md:flex-col md:gap-6 '>
                <h1 className='text-[24px] font-bold md:text-[48px]'>A plataforma Uber que você conhece, reinventada para empresas</h1>
                <p>Uma plataforma simples para empresas de todos os portes administrarem suas viagens e refeições globais e entregas locais.</p>
                <button className='w-[110px] h-[38px] bg-black rounded-lg text-white'>Começar</button>
            </section>

        </div>
    );
}

export default index;