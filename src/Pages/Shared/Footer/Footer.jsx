import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="mt-10">
            <div className="grid md:grid-cols-2 text-center">
                <div className="flex justify-center items-center bg-[#1F2937] py-24">
                    <div className="text-white space-y-3">
                        <h2 className="text-3xl">CONTACT US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-[#111827] py-24">
                    <div className="text-white">
                        <h2 className="text-3xl">Follow US</h2>
                        <p className='my-4'>Join us on social media</p>
                        <div className='flex justify-center gap-4'>
                            <p className='text-2xl'><FaFacebookF></FaFacebookF></p>
                            <p className='text-2xl'><BsInstagram></BsInstagram></p>
                            <p className='text-2xl'><FaTwitter></FaTwitter></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] text-white text-center py-4">
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;