import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaUserAlt, FaEdit } from 'react-icons/fa'
import { FormEvent } from 'react'

export default function Contact() {
    function onSubmit(e:FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log(data);
    }

  return (
    <div className="py-24 max-w-3xl mx-auto min-h-screen">
        <h2 className="pb-12 px-4 text-xl md:text-2xl font-bold"> Contact Us </h2>
        <form onSubmit={onSubmit} className="p-5 rounded-md bg-opacity-5 bg-white">
            <div className="flex py-3 group">
                <div className='group-focus-within:bg-blue-700 bg-primary flex justify-center items-center p-4'>
                    <FaUserAlt/>
                </div>
                <input required type="text" name="name" placeholder="Name" className="w-full p-3 rounded outline-none bg-primary-800" />
            </div>
            <div className="flex py-3 group">
                <div className='group-focus-within:bg-blue-700 bg-primary flex justify-center items-center p-4'>
                    <MdOutlineAlternateEmail/>
                </div>
                <input required type="email" name="email" placeholder="Email" className="w-full p-3 rounded outline-none bg-primary-800" />
            </div>
            
            <div className="flex py-3 group">
                <div className='group-focus-within:bg-blue-700 bg-primary flex justify-center p-4'>
                    <FaEdit/>
                </div>
                <textarea name="message" placeholder="Message" rows={8} className="min-h-[100px] w-full p-3 rounded outline-none bg-primary-800" required />
            </div>
            <div className='py-8'>
                <button className='rounded py-2 px-4 bg-blue-600'>SEND MESSAGE</button>
            </div>
        </form>
    </div>
  )
}
