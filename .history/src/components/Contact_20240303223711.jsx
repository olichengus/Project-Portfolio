import React from 'react';

const Contact = () => {
    return (
        <div name='contact'className="w-full h-screen flex justify-center items-center p-4 bkgroundpage">
            <form action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Contact</p>
                    <p> If you wish to contact me, please submit a form below or send an email to oliverjcheng@gmail.com</p>
                </div>
                <input type='text' placeholder='Name' name='name'>
                </input>
                <input className='my4 p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'>
                </input>
                <textarea name='message' rows={10} placeholder='Message'>

                </textarea>
            </form>
        </div>
    );
};

export default Contact;