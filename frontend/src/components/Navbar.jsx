import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="flex justify-center py-4 bg-white">
            <div className="w-[80%] flex justify-between items-center">
                <div className="flex items-center space-x-10 sm:space-x-5">
                    <div>
                        <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Bewakoof Logo" className="h-8 sm:h-6" />
                    </div>
                    <div className="hidden sm:flex space-x-10 text-lg font-semibold">
                        <ul>MEN</ul>
                        <ul>WOMEN</ul>
                        <ul>MOBILE COVERS</ul>
                    </div>
                </div>
                <div className="flex items-center space-x-10 sm:space-x-4">
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                        <BiSearch className="text-gray-500" />
                        <input 
                            type="search" 
                            placeholder="Search by products" 
                            className="ml-2 bg-transparent outline-none text-lg"
                        />
                    </div>
                    <div className="flex items-center space-x-6 text-lg font-semibold">
                        <Link to="/login-start">
                            <ul>LOGIN</ul>
                        </Link>
                        <ul>
                            <FaRegHeart className="text-xl" />
                        </ul>
                        <Link to="/cart">
                            <ul>
                                <IoBagOutline className="text-xl" />
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex justify-between items-center w-full mt-4">
                <div className="flex space-x-5">
                    <ul>MEN</ul>
                    <ul>WOMEN</ul>
                    <ul>MOBILE COVERS</ul>
                </div>
                <div className="flex items-center space-x-4">
                    <BiSearch className="text-gray-500 text-2xl" />
                    <FaRegHeart className="text-xl" />
                    <IoBagOutline className="text-xl" />
                </div>
            </div>
        </div>
    );
};
