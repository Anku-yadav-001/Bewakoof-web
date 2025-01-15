import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

export const Navbar = () => {
    return (
        <div className="flex justify-center py-4 bg-white">
            <div className="w-[80%] flex justify-between items-center">
                <div className="flex items-center space-x-10">
                    <div>
                        <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Bewakoof Logo" />
                    </div>
                    <div className="flex space-x-10 text-lg font-semibold">
                        <ul>MEN</ul>
                        <ul>WOMEN</ul>
                        <ul>MOBILE COVERS</ul>
                    </div>
                </div>
                <div className="flex items-center space-x-10">
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                        <BiSearch className="text-gray-500" />
                        <input 
                            type="search" 
                            placeholder="Search by products" 
                            className="ml-2 bg-transparent outline-none text-lg"
                        />
                    </div>
                    <div className="flex items-center space-x-6 text-lg font-semibold">
                        <ul>LOGIN</ul>
                        <ul>
                            <FaRegHeart className="text-xl" />
                        </ul>
                        <ul>
                            <IoBagOutline className="text-xl" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
