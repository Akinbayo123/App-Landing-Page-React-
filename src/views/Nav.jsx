import { useState } from 'react';
import logo from '../img/logo.svg';

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Navbar
        <div className="relative container mx-auto p-6">
            {/* Flex container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2">
                    <img src={logo} alt="Logo" />
                </div>
                {/* Menu Items */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-darkGreyishBlue">Pricing</a>
                    <a href="/" className="hover:text-darkGreyishBlue">Product</a>
                    <a href="/" className="hover:text-darkGreyishBlue">About Us</a>
                    <a href="/" className="hover:text-darkGreyishBlue">Careers</a>
                    <a href="/" className="hover:text-darkGreyishBlue">Community</a>
                </div>
                <a href="/" className="hidden md:block hover:bg-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
                    Get Started
                </a>
                {/* Hamburger Icon */}
                <button
                    id="menu-btn"
                    onClick={handleToggle}
                    className={`block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div className="md:hidden">
                <div
                    id="menu"
                    className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'flex' : 'hidden'}`}
                >
                    <a href="/">Pricing</a>
                    <a href="/">Product</a>
                    <a href="/">About Us</a>
                    <a href="/">Careers</a>
                    <a href="/">Community</a>
                </div>
            </div>
        </div>
    );
};

export default Index;
