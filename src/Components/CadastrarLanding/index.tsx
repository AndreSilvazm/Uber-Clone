import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function index() {
    return (
        <div>

            <section className='h-32 md:w-8/12 md:flex md:flex-row md:m-auto md:justify-between md:h-[263px]'>

                <article className='hidden md:block md:w-[600px] md:h-[106] md:flex md:flex-row md:justify-between items-center'>

                    <a className='text-[48px] font-bold'>Cadastre-se para dirigir</a>
                    <i className='mr-4 text-[16px] font-bold text-[34px]'><FaArrowRight /></i>

                </article>

                <article className='hidden md:block md:w-[600px] md:h-[106] md:flex md:flex-row md:justify-between items-center'>

                    <a className='text-[48px] font-bold'>Cadastre-se para viajar</a>
                    <i className='mr-6 text-[16px] font-bold text-[34px]'><FaArrowRight /></i>

                </article>




            </section>



        </div>
    );
}

export default index;