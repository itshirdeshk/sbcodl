import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import backgroundImage from "../assets/images/footer_bg.jpg";

const Footer = () => {


    return (
        <footer className="border-t">
            <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 bg-fixed bg-cover bg-center object-cover opacity-70" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                
                {/* New Footer Section */}
                <div className="flex flex-col md:flex-row w-full relative z-10">
                    {/* First Div - 30% */}
                    <div className="w-full md:w-[40vw] flex items-center justify-center">
                        <h1 className="text-4xl font-serif font-bold text-center">Welcome to Our Institution</h1>
                    </div>
                    {/* Second Div - 70% */}
                    <div className="w-full md:w-[60.3vw] flex flex-col justify-center items-center ">
                        {/* Social Media Icons */}
                        <div className="flex flex-row flex-wrap w-full">
                            {[Facebook, Instagram, Twitter, Linkedin, Youtube,Youtube].map((Icon, index) => (
                                <div key={index} className="relative group w-[15vw] h-[16vw] flex flex-col items-center justify-center border-[0.5px] border-white hover:bg-background/40">
                                    <Icon size={48} className="text-white  transition-opacity " />
                                    <div className="  flex items-center justify-center">
                                        <span className="text-white text-lg font-bold mt-4">SOCIAL {index + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Existing Footer Section */}
                <div className="flex md:flex-row flex-col font-serif relative bg-background z-10 px-24 py-6 gap-[7vw]">
                    <div className='w-[25vw]'>
                        <div className="flex items-center space-x-3">
                            <h2 className="text-2xl font-bold text-foreground">Solanki Brother Boards</h2>
                        </div>

                        {/* Contact and Links */}
                        <div className="text-muted-foreground mt-4">
                            <p>Email: contact@solankiboard.com</p>
                            <p>Phone: +91 9876543210</p>
                            <div className="space-x-4">
                                <a href="#" className="hover:text-foreground">Privacy Policy</a>
                                <a href="#" className="hover:text-foreground">Terms of Service</a>
                            </div>
                            <p className="text-sm">©2025 Solanki Brother Boards. All rights reserved.</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-8 flex flex-col w-[65vw] justify-center">
                        {/* Paragraph */}
                        <div className="text-muted-foreground">
                            <p>Solanki brother board is a non-profit and non-denominational, co-educational, American international day and boarding IB World School in the heart of Rome. Click on the cards below to find out more about our values, teaching & learning and boarding at St. Stephen's.</p>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex justify-end md:justify-start space-x-6">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;