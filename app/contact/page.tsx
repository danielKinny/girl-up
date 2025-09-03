"use client";
import React from 'react'
import Nav from '../../components/nav'
import { MegaphoneIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


const contactPage = () => {
  return (
    <div>
      <header className='bg-[#c6005c]'>
        <Nav />
      </header>

      <main className="flex flex-col items-center justify-center py-12 px-4 bg-white min-h-[70vh]">
        <motion.h1
          className="text-4xl font-bold text-[#c6005c] mb-4 league-spartan"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <MegaphoneIcon className='inline-block h-12 mb-2 mx-4' />Contact Us
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-gray-700 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We deeply value the participation of schools from across Dubai in our event. If you wish to attend as a <span className="font-semibold text-[#c6005c]">school delegation</span>, or have any additional questions, please don’t hesitate to reach out to us!
        </motion.p>
        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="text-md text-gray-800 mb-2">Email us at:</span>
          <a href="mailto:examplefornow@gmail.com" className="text-lg font-medium text-[#c6005c] underline hover:text-pink-600">girlupcis@gmail.com</a>
        </motion.div>
        <motion.div
          className="w-full max-w-2xl h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <iframe
            title="Cambridge International School Dubai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.148726852536!2d55.372065011206935!3d25.265581877573844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d731b6709e1%3A0x60bde96b0e43d58b!2sCambridge%20International%20School!5e0!3m2!1sen!2sae!4v1756933933306!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </main>
    </div>
  )
}

export default contactPage