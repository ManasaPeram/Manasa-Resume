// 'use client'

// import { Send } from 'lucide-react'
// import React from 'react'
// import { motion } from 'framer-motion'

// import FadeIn from '@/lib/variants'
// const Contact = () => {
//   return (
//     <section id='Contact' className='bg-[url(/contact/contact-bg.png)] py-28'>
//       <div className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'>
//         <motion.div
//           variants={FadeIn('right', 0.2)}
//         //   initial='hidden'
//           whileInView={'show'}
//           viewport={{ once: true, amount: 0.8 }}
//           className='mb-12 mr-6 flex items-center py-6'
//         >
//           <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
//             let's work <br /> <span className='under-line'>together</span>
//           </h1>
//         </motion.div>
//         <motion.form
//           variants={FadeIn('left', 0.2)}
//         //   initial='hidden'
//           whileInView={'show'}
//           viewport={{ once: true, amount: 0.8 }}
//           className='flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10'
//         >
//           <input
//             type='text'
//             placeholder='your name '
//             required
//             className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
//           />
//           <input
//             type='text'
//             placeholder='subject '
//             required
//             className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
//           />
//           <textarea
//             name='message'
//             id='message'
//             className='mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
//           ></textarea>
//           <button className='w-50 mt-12 flex items-center justify-between gap-x-2 rounded-full bg-blue px-4 py-3 transition-all duration-300 hover:bg-lighted hover:text-secondary hover:transition-all'>
//             <p className='text-md capitalize'> Send Messsage</p>
//             <Send className='h-5 w-5' />
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   )
// }

// export default Contact












'use client'
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/lib/variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const { name, subject, message } = formData;
    const phoneNumber = '8340947374'; // Replace with your phone number in international format (e.g., 15551234567)
    
    // Create the WhatsApp message
    const fullMessage = `Name: ${name}\nSubject: ${subject}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <section id='Contact' className='bg-[url(/contact/contact-bg.png)] py-28'>
      <div className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'>
        <motion.div
          variants={FadeIn('right', 0.2)}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 mr-6 flex items-center py-6'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            let's work <br /> <span className='under-line'>together</span>
          </h1>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          variants={FadeIn('left', 0.2)}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10'
        >
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
            value={formData.name}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            required
            value={formData.subject}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Your Message'
            required
            value={formData.message}
            onChange={handleChange}
            className='mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          ></textarea>
          <button className='w-50 mt-12 flex items-center justify-between gap-x-2 rounded-full bg-blue px-4 py-3 transition-all duration-300 hover:bg-lighted hover:text-secondary'>
            <p className='text-md capitalize'>Send Message</p>
            <Send className='h-5 w-5' />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
