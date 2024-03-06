import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import QrCode from '../../../public/Imagens/qrcode1.png'


function index() {
    return (
        <div>

            <section className='p-2 bg-[#D1D5DB] md:h-[503px] md:flex md:flex-col '>

                <h1 className='text-[20px] font-bold md:text-[48px] md:w-8/12 md:m-auto '>É mais fácil pelo app</h1>

                <section className='md:w-8/12 md:m-auto md:flex md:flex-row md:justify-between '>


                    <article className='flex items-center justify-between h-[74px] border-solid-[#94A3B8] bg-white my-4 md:w-[600px] md:h-[242px] md:justify-around'>

                        <Image src={QrCode} alt='Qr Code' className='hidden md:block'/>



                        
                        <div className='ml-4 md:ml-0 '>
                            <a href="#" className='text-[16px] font-bold'>Baixe o app de parceiro</a>
                            <p className='block text-[16px] hidden md:block'>Leia o código QR para baixar o app</p>
                        </div>
                        <i className='mr-4 text-[16px] font-bold'><FaArrowRight /></i>


                    </article>


                    <article className='flex items-center justify-between h-[74px]  border-solid-[#94A3B8] bg-white my-4 md:w-[600px] md:h-[242px] md:justify-around'>

                        <Image src={QrCode} alt='Qr code' className='hidden md:block'/>

                        <div className='ml-4 md:ml-0 '>
                            <a href="#" className='text-[16px] font-bold'>Baixe o app de parceiro</a>
                            <p className='block text-[16px] hidden md:block'>Leia o código QR para baixar o app</p>
                        </div>
                        <i className='mr-4 text-[16px] font-bold'><FaArrowRight /></i>

                    </article>
                </section>



            </section>


        </div>
    );
}

export default index;