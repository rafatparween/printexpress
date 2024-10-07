// import { Link } from 'react-router-dom';
// import PrintIcon from '@mui/icons-material/Print';

// const Navbar = () => {
//   return (
//     <nav className="border shadow-2xl bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] ">
//       <div className="flex gap-5 items-center py-3">

//         <ul className="flex gap-8 text-white">
//           <Link to="/" className="hover:border border-[#3730a3] p-2 rounded">
//             Home
//           </Link>
//           <Link
//             to="/printeroffline"
//             className="hover:border border-[#3730a3] p-2 rounded"
//           >
//             Printer Offline
//           </Link>
//           <Link
//             to="/printersetupissue"
//             className="hover:border border-[#3730a3] p-2 rounded"
//           >
//             Printer Setup
//           </Link>
//           <Link
//             to="/printerscannersetup"
//             className="hover:border border-[#3730a3] p-2 rounded"
//           >
//             Scanner Setup
//           </Link>
//           <Link
//             to="/privacypolicy"
//             className="hover:border border-[#3730a3] p-2 rounded"
//           >
//             Privacy PoLicy
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[120px]">
          <div className="flex items-center">
            <Link to="/" className="text-[39px] text-[#0C71C3] font-sans 2xl:ml-[-225px]">
              Hewlett Hub Solutions
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Center all items vertically */}
            <Link
              to="/"
              className="text-[#0C71C3] hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center "
            >
              Home
            </Link>
            <Link
              to="/printeroffline"
              className="text-[#0C71C3] hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center"
            >
              Printer Offline
            </Link>
            {/* <ScrollLink
              to="serviceSection"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center cursor-pointer"
            >
              Service
            </ScrollLink> */}
            <Link
             to="/printersetupissue"
              className="text-[#0C71C3] hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center"
            >
                Printer Setup
            </Link>
            <Link
             to="/printerscannersetup"

              className="text-[#0C71C3] hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center"
            >
              Scanner Setup
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            About
          </Link>
          {/* <ScrollLink
            to="serviceSection"
            smooth={true}
            duration={500}
            offset={-70}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue cursor-pointer"
          >
            Service
          </ScrollLink> */}
          <Link  to="/printersetupissue" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
          Printer Setup
          </Link>
          {/* <Link to="/cart" className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            <LocalMallIcon sx={{ fontSize: '2rem' }} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


