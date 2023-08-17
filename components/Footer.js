import React from 'react'
import Image from 'next/image'
import { BiPhoneCall } from 'react-icons/bi'
import Link from 'next/link'
import { CiLocationOn } from 'react-icons/ci'
import { SlEarphonesAlt } from 'react-icons/sl'
import { BsSend } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='mb-7'>
      <div className='flex   px-3 flex-col gap-4 md:flex-row'>
        <div className='basis-[25%]'>
          <div className='relative w-36 h-11 md:w-[215px] md:h-16 '>
            <Image src="/logo/logo.svg" alt='logo' fill />
          </div>
          <address className='flex flex-col gap-5 mt-5 not-italic' >
            <h3 className='flex flex-row items-center'> <CiLocationOn className='text-green-700 text-xl' /> <span className='text-lg font-semibold px-2'>Address:</span> Faridabd Haryana, 12003</h3>
            <h3 className='flex flex-row items-center'> <SlEarphonesAlt className='text-green-700 text-xl' /> <span className='text-lg font-semibold px-2'>Call Us:</span>(+91) 9990127407</h3>
            <h3 className='flex flex-row items-center'> <BsSend className='text-green-700 text-xl' /> <span className='text-lg font-semibold px-2'>Email:</span>Vikash752200@gmail.com</h3>
            <h3 className='flex flex-row items-center'> <AiOutlineFieldTime className='text-green-700 text-xl' /> <span className='text-lg font-semibold px-2'>Hours:</span>10:00 AM - 6:00 PM ,Mon-Fri </h3>
          </address>

        </div>
        <div className='basis-[75%]'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 '>

            <div className='mt-6'>
              <h1 className='text-2xl font-semibold'>Account</h1>
              <div className='flex flex-col gap-6 mt-3'>
                <Link href={"/"} alt="linkaddress" >Sign up</Link>
                <Link href={"/"} alt="linkaddress" >View Cart</Link>
                <Link href={"/"} alt="linkaddress" >My Wishlist</Link>
                <Link href={"/"} alt="linkaddress" >Track My Order</Link>
                <Link href={"/"} alt="linkaddress" >Shipping Details</Link>
                <Link href={"/"} alt="linkaddress" >Compare Porducts</Link>
              </div>
            </div>
            <div className='mt-6'>
              <h1 className='text-2xl font-semibold'>Compony</h1>
              <div className='flex flex-col gap-6 mt-3'>
                <Link href={"/"} alt="linkaddress" >About Us</Link>
                <Link href={"/"} alt="linkaddress" >Delivery Information</Link>
                <Link href={"/"} alt="linkaddress" >Privacy Policy</Link>
                <Link href={"/"} alt="linkaddress" >Terms & Conditions</Link>
                <Link href={"/"} alt="linkaddress" >Contact Us</Link>
                <Link href={"/"} alt="linkaddress" >Support Center</Link>
                <Link href={"/"} alt="linkaddress" >Careers</Link>
              </div>
            </div>
            <div className='mt-6'>
              <h1 className='text-2xl font-semibold'>Corporate</h1>
              <div className='flex flex-col gap-6 mt-3'>
                <Link href={"/"} alt="linkaddress" >Become a Vendor</Link>
                <Link href={"/"} alt="linkaddress" >Affiliate Program</Link>
                <Link href={"/"} alt="linkaddress" >Farm Bussiness</Link>
                <Link href={"/"} alt="linkaddress" >Farm Careers</Link>
                <Link href={"/"} alt="linkaddress" >Our Suppliers</Link>
                <Link href={"/"} alt="linkaddress" >Acessibilty</Link>
                <Link href={"/"} alt="linkaddress" >Promise</Link>
              </div>
            </div>
            <div className='mt-6'>
              <h1 className='text-2xl font-semibold'>Popular</h1>
              <div className='flex flex-col gap-6 mt-3' >
                <Link href={"/"} alt="linkaddress" >Milk & Flavoured Milk</Link>
                <Link href={"/"} alt="linkaddress" >Butter and Margarine</Link>
                <Link href={"/"} alt="linkaddress" >Eggs Subsititutes</Link>
                <Link href={"/"} alt="linkaddress" >Marmalades</Link>
                <Link href={"/"} alt="linkaddress" >Sour Crem And Dips</Link>
                <Link href={"/"} alt="linkaddress" >Tea & Kombucha</Link>
                <Link href={"/"} alt="linkaddress" >Cheese</Link>
              </div>
            </div>



          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6  md:mt-0  mt-6 px-3'>
        <h1 className='text-2xl font-semibold'>install app</h1>
        <div className='flex flex-col gap-3'>
          <p className='text-lg font-black'>From App Store or Google Play</p>
          <div className='flex flex-row gap-3'>
            <Image src={"/google-play.jpg"} alt='google store' width={128} height={42} />
            <Image src={"/app-store.jpg"} alt='google store' width={128} height={42} />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-black'>Secured Payment Gateways</h1>
          <Image src={"/payment-method.png"} alt='google store' width={224} height={32} />

        </div>
      </div>
      <div>


        <div className="w-full mt-6 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-lg sm:text-center ">© 2023 <a href="/" className="hover:underline text-lg ">Grocery.pvt.Ltd™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-row mt-6 md:mt-0 md:justify-center items-center text-3xl gap-5">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-[#3bb77e] ">
                <BiLogoFacebookCircle />
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-[#3bb77e]">
                <BiLogoInstagramAlt />
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-[#3bb77e]"><AiFillTwitterCircle /> </a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 text-[#3bb77e]"> <AiFillYoutube /> </a>
            </li>
          </ul>
        </div>


      </div>
    </footer>

  )
}

export default Footer
