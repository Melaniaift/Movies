import Source from "../assets/logo.svg"
import { Link } from "react-router-dom"
import Logo from "../assets/sun.png"

export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <img src={Logo} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse h-8" alt="Flowbite Logo" />
                    <Link to="https://www.linkedin.com/in/melania-iftinchi-1b7b95172/" className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 hover:underline">Contact</Link>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="flex flex-wrap items-center justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © Data provided by
                    <img src={Source} className="w-11 ml-2" alt="My SVG" />
                </span>

            </div>
        </footer>
    )
}