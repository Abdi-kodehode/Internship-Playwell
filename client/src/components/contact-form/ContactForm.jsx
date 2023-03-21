import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2sx6l1f', 'template_eb1877e', form.current, 'Q3EqNhSYzF-QeWh4m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('');
      setEmail('');
      setMessage('');
  };

  return (
    <>
    <form className="flex flex-col gap-2 pb-10 w-full mobile:hidden" ref={form} onSubmit={sendEmail}>
      <label><h2>Name</h2></label>
      <input className="rounded !text-white font-bold px-2 py-2 bg-zinc-700 focus:outline-none  focus:ring-1 focus:ring-red-500" type="text" name="user_name" value={name} onChange={event => setName(event.target.value)}/>
      <label><h2>Email</h2></label>
      <input className="rounded !text-white font-bold px-2 py-2 bg-zinc-700 focus:outline-none  focus:ring-1 focus:ring-red-500"  type="email" name="user_email" value={email} onChange={event => setEmail(event.target.value)} />
      <label><h2>Message</h2></label>
      <textarea className=" rounded w-full !text-white font-bold h-[12vh] px-2 py-2 bg-zinc-700 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" name="message" value={message} onChange={event => setMessage(event.target.value)} plaveholder="Please Write Message to us"/>
      <button className="rounded mt-4 bg-red-700 py-2 w-1/3 font-bold text-lg hover:opacity-90"><input type="submit" value="Send" /></button>
    </form>
    </>
  );
};
export default Contact