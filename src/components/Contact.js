import React, { useEffect } from "react";
import { useTitle } from "./TitleContext";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle('CONTACT');
        return () => setTitle('');
    }, [setTitle]);

    return (
        <div className="w-full max-w-6xl mx-auto bg-white text-black p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2">
                    <h2 className="text-gray-500 text-lg sm:text-xl font-light uppercase">BUSINESS INQUIRIES</h2>
                    <a 
                        href="mailto:freya@prideandpinion.com" 
                        className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold hover:text-gray-700 transition-colors duration-300 break-words"
                    >
                        freya@prideandpinion.com
                    </a>
                </div>
                <div className="space-y-2">
                    <h2 className="text-gray-500 text-lg sm:text-xl font-light uppercase">GENERAL</h2>
                    <a 
                        href="mailto:enquiries@prideandpinion.com" 
                        className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold hover:text-gray-700 transition-colors duration-300 break-words"
                    >
                        enquiries@prideandpinion.com
                    </a>
                </div>
            </div>
            
            <div className="flex space-x-6">
                <a href="https://www.instagram.com/nicoleonardvanderhorst/" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform duration-300">
                    <Instagram size={24} />
                </a>
                <a href="https://www.youtube.com/@NicoLeonard" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform duration-300">
                    <Youtube size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nicovanderhorst/" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} />
                </a>
            </div>
            
            <hr className="border-gray-200" />
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <a 
                    href="https://prideandpinion.com/" target="_blank" rel="noopener noreferrer"
                    className="block w-full md:w-1/2 hover:opacity-60 transition-opacity duration-300"
                >
                    <img 
                        src="/pp.png" 
                        alt="Pride & Pinion" 
                        className="w-full"
                    />
                </a>
                <a 
                    href="https://thegodtier.com/" target="_blank" rel="noopener noreferrer"
                    className="block w-full md:w-1/2 hover:opacity-60 transition-opacity duration-300"
                >
                    <img 
                        src="/gtc.png" 
                        alt="GodTier Club" 
                        className="w-full"
                    />
                </a>
            </div>
        </div>
    );
};

export default Contact;