import React from 'react';

const Contact = () => {
    return (
        <div name='contact'className="w-full h-screen flex justify-center items-center p-4 bkgroundpage">
            <form action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Contact</p>
                    <p className='text-gray-300 p-2'> If you wish to contact me, please submit a form below or send an email to oliverjcheng@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'>
                </input>
                <input className='my4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email'>
                </input>
                <textarea name='message' rows={10} placeholder='Message' className='bg-[#ccd6f6] p-2'>
                </textarea>
            </form>
        </div>
    );
};

export default Contact;