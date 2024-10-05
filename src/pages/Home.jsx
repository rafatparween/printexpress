// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import PrinterSetup from './PrinterSetup';
// import PrinterSetupMethod from './PrinterSetupMethod';
// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       backgroundImage:
//         "https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230614/original/pngtree-printer-is-sitting-in-a-room-with-large-posters-and-prints-picture-image_3520983.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-3d-render-of-responsive-devices-in-home-office-setup-image_3765800.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://img.lovepik.com/bg/20240415/3D-Rendered-Modern-Home-Office-Setup-Desk-Lamp-Computer-and_5832401_wh860.jpg!/fw/860",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230611/original/pngtree-printer-is-located-in-a-room-with-a-montage-of-mountains-picture-image_3166193.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-sleek-home-office-setup-with-lamp-computer-and-printer-3d-rendered-image_3824090.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <>
//       <main className="relative">
//         <div className="relative w-full h-[400px] overflow-hidden">
//           {/* Background Slide */}
//           <div className="relative h-full">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//                 {/* Text content without container */}
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
//                   <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
//                     {slide.title}
//                   </h1>
//                   <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <PrinterSetup />
//       <CustomerReviews />
//       <Disclaimer />
//     </>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import WifiIcon from '@mui/icons-material/Wifi';
import ComputerIcon from '@mui/icons-material/Computer';
import PrintIcon from '@mui/icons-material/Print';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TabletIcon from '@mui/icons-material/Tablet';
import PopularServices from '../Components/PopularServices';
import Peace from '../Components/Peace';
import PrinterProductList from '../Components/Printerproductlist';
import Testimonials from '../Components/Testimonals';
import Technicians from '../Components/Technicians';

const Slider = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate(); // Use navigate for routing

  const handleNavigation = (path) => {
    navigate(path); // Navigate programmatically
    setDropdownOpen(false); // Close the dropdown after navigation
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <>
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setDropdownOpen(false)} // Close dropdown on clicking outside
        ></div>
      )}
      <div className="2xl:h-[600px] flex items-center justify-center ">
        <header className="bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] h-[600px] xl:w-[1836px] 2xl:w-[1836px] relative flex items-center">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="text-white lg:w-1/2 p-8 ml-[203px]">
              <h1 className="text-[44px] lg:text-5xl font-semibold mb-4 font-sans">
                Get Online Support for your{' '}
                <span className="font-bold font-sans">Streaming Device</span>
              </h1>
              <p className="mb-6 font-sans text-[20px]">
                The best tech solution, ready to help you - anytime, anywhere.
              </p>
              <div className="relative">
                {/* <button
                  className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4 flex justify-between items-center font-sans xl:w-[616px] 2xl:w-[616px] text-[24px]"
                  onClick={toggleDropdown} // Toggle the dropdown
                >
                  I need help with...
                  <ArrowDropDownIcon className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button> */}
                {dropdownOpen && (
                  <ul className="absolute left-0 right-0 bg-white shadow-md mt-2 z-50 rounded-md text-[#384c5e] text-[20px] font-sans">
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
                      onClick={() => handleNavigation('/Sprinters')}
                    >
                      <PrintIcon className="mr-2" />
                      Printer
                    </li>
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
                      onClick={() => handleNavigation('/Scomputer')}
                    >
                      <ComputerIcon className="mr-2" />
                      Computer
                    </li>
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
                      onClick={() => handleNavigation('/Stab')}
                    >
                      <TabletIcon className="mr-2" />
                      Tab
                    </li>
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
                      onClick={() => handleNavigation('/Swifi')}
                    >
                      <WifiIcon className="mr-2" />
                      WiFi & Network
                    </li>
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer flex items-center h-[64px] w-[616px]"
                      onClick={() => handleNavigation('/Smobile')}
                    >
                      <MobileFriendlyIcon className="mr-2" />
                      Mobile
                    </li>
                    
                    
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
                      onClick={() => handleNavigation('/Saudio')}
                    >
                      <AudiotrackIcon className="mr-2" />
                      Audio & Video
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://www.printlivesol.com/assets/mic-Czv6F9or.png"
                alt="Support Staff"
                className="max-w-full w-[370] h-[460px] mt-[90px] object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
            <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
              <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Thousands of Techs Nationwide
            </div>
            <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
              <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Service as Soon as Today
            </div>
            <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
              <CheckCircleOutlineIcon
                className="mr-2"
                style={{ color: '#1e3a8a' }}
              />
              Don't Pay Until It’s Done
            </div>
          </div>
        </header>
      </div>

      <section className="">
      </section>

      {/* <PopularServices />
      <Peace />
      <PrinterProductList/>
      
      <Testimonials />
      <Technicians /> */}
      <PopularServices/>
      <Peace/>
      <PrinterProductList/>
      <Testimonials/>
      <Technicians/>
    </>
  );
};

export default Slider;





