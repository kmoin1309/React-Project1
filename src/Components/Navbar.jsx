import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          width={160}
          height={32}
          loading="lazy"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Login - Signup - Logout - Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="g-richblack text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/logout">
            <button
              className="g-richblack text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="g-richblack text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar