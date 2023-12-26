import motiva2 from "../assets/Images/motiva2.png";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimesCircle } from 'react-icons/fa';

const Navbar = ({ isAuthenticated, onSignOut }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="grid grid-cols-12   lg:font-medium p-4 lg:px-20 py-3 bg-cyan-900">
      <Link to="/" className="lg:h-14">
        <img className=" lg:w-14  lg:h-14 rounded-full" src={motiva2} alt="motiva-logo" />
      </Link>

      <section className="col-span-11 grid grid-rows-11 md:flex md:items-center relative">
        {/* Mobile view toggle button */}
        <div className="md:hidden absolute z-50 right-0">
          <button
            className="p-2 rounded-md outline-none border border-gray-400"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (<FaTimesCircle className="text-cyan-500 text-md" />) : (<GiHamburgerMenu className="text-cyan-500 text-md" />)}
          </button>
        </div>

        {/* Navigation links */}
        <div className={` w-full top-0 md:ml-3 items-center  md:flex md:col-span-4 ${navbar ? "  space-y-2  py-10 absolute top-8 flex flex-col md:flex-row bg-cyan-600" : "hidden"}`}>
          <Link to="/" className="md:mr-4 md:mb-0 mb-2 decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8 text-cyan-100">Home</Link>
          <Link to="/howitworks" className="md:mr-4 md:mb-0 mb-2 decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8 text-cyan-100">How it works</Link>
          <Link to="/getquotes" className="md:mr-4 md:mb-0 mb-2 decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8 text-cyan-100">Get motivational quotes</Link>
          <Link to="/makedesigns" className="decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8 text-cyan-100">Make your design</Link>

          {/* Sign in/out button */}
        {isAuthenticated ? (
          <button onClick={onSignOut} className={`md:ml-auto ${navbar ? "flex flex-col" : "hidden"} `}>
            Sign Out
          </button>
        ) : (
          <Link to="/login" className={`md:ml-auto ${navbar ? "" : ""}`}>
            <button className="text-center text-cyan-100 bg-cyan-700 w-25  md:w-30 px-4 py-2 md:py-2 lg:py-3 rounded-lg hover:scale-95">
              Sign In
            </button>
          </Link>
        )}
        </div>

        
      </section>
    </div>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Navbar;
