import React from 'react';
import { FaSignal } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import Link from 'next/link';

function index() {
    return (
        <div className=' w-full md:bg-LandingPage bg-cover bg-center md:h-screen  '>

            <section className='md:w-8/12 md:h-screen md:m-auto md:flex md:flex-col md:justify-center'>
                <section className='flex flex-row  items-stretch bg-CarsColor md:w-4/12 md:h-[146px] '>

                    <div className='w-1/3 py-2 text-center flex flex-col items-center  gap-1 hover:border border-b-black hover:duration-75 md:justify-center'>
                        <i><FaSignal /></i>
                        <span >Faça viagens ou entregas</span>
                    </div>


                    <div className='w-1/3 py-2 text-center flex flex-col items-center gap-1 hover:border border-b-black  hover:duration-75 md:justify-center'>
                        <i><FaCar /></i>
                        <span>Viajar</span>
                    </div>


                    <div className='w-1/3 py-2 text-center flex flex-col items-center gap-1 hover:border border-b-black  hover:duration-75 md:justify-center'>
                        <i><FaKey /></i>
                        <span>Alugue seus carros</span>
                    </div>

                </section>

                <section className='p-3 flex flex-col gap-8 md:w-4/12 bg-white '>

                    <h1 className='text-[31px] font-bold'>Assuma o comando e ganhe</h1>

                    <p className='text-[14px] leading-4'>Dirija na plataforma com a maior rede de usuários ativos.</p>

                    <button className='w-[243px] h-[42px] text-white text-center bg-black rounded-lg'>Cadastre-se para dirigir</button>

                    <Link href='/' className='block text-Grey text-[14px] font-medium underline'>Saiba mais sobre como dirigir e fazer entregas</Link>


                </section>
            </section>


        </div>
    );
}

export default index;