import React from 'react'
import Navbar from '../components/Navbar'
import WhatsappIcon from '../icons/WhatsappIcon'
import MailIcon from '../icons/MailIcon'
import PhoneIcon from '../icons/PhoneIcon'
import InstaIcon from '../icons/InstaIcon'
import FacebookIcon from '../icons/FacebookIcon'

function ContactUs() {
  return (
    <div>
        <div className='bg-black p-4 px-3'><Navbar/></div>

        <div className='mt-20 px-20'>
                <div className=' text-2xl '>Contact Us</div>
                <div className='mt-5 text-gray-600'>You need more information? <br /> Check what other persons are saying about our product. <br /> They are very happy with their purchase</div>
                <div className='mt-10'>
                    <div className='flex items-center gap-4 mt-4'><WhatsappIcon/> +91 8287733530</div>
                    <div className='flex items-center gap-4 mt-4'><MailIcon/> Sumukhship@gmail.com</div>
                    <div className='flex items-center gap-4 mt-4'><PhoneIcon/> +91 8287733530</div>
                    <div className='flex items-center gap-4 mt-4'><InstaIcon/> Instagram</div>
                    <div className='flex items-center gap-4 mt-4'><FacebookIcon/> Facebook</div>
                </div>
        </div>
    </div>
  )
}

export default ContactUs