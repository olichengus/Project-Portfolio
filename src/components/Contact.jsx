import React from 'react';  
import './Contact.css'; // New stylesheet for the Contact component  

const Contact = () => {  
  return (  
    <div name='contact' className="contact-section w-full h-screen flex justify-center items-center p-4">  
      <form method='POST' action='https://getform.io/f/pbmznwla' className='flex flex-col max-w-[600px] w-full'>  
        <div className='pb-8'>  
          <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Contact</p>  
          <p className='text-gray-300 p-2'>If you wish to contact me, please submit a form below or send an email to <a href="mailto:oliverjcheng@gmail.com" className='highlight'>oliverjcheng@gmail.com</a></p>  
        </div>  
        <input className='bg-input p-2' type='text' placeholder='Name' name='name' />  
        <input className='mt-3 bg-input p-2' type='email' placeholder='Email' name='email' />  
        <textarea name='message' rows='10' placeholder='Message' className='bg-input mt-3 p-2'></textarea>  
        <button className='btn-submit text-white bg-black hover:bg-pink-600 px-4 py-3 my-5 mx-auto'>Send</button>  
      </form>  
    </div>  
  );  
};  

export default Contact;  