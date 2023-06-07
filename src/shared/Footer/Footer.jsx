import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-6 border-t-2 border-t-neutral-100">
            <div>
                <img className="w-14 md:w-20 lg:w-20" src="https://i.ibb.co/xDKLb0V/logo1-removebg-preview.png" alt="Footer-logo" />
                <p className="font-bold text-blue text-xl capitalize">
                    Becomes a fashion designer <br />Summer camp learning activities
                </p>
                <p className="text-orange">Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="/" className='text-2xl text-blue'><FaFacebook></FaFacebook></a>
                    <a href="/" className='text-2xl '><FaGithub></FaGithub></a>
                    <a href="/" className='text-2xl text-blue'><FaLinkedin></FaLinkedin></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;