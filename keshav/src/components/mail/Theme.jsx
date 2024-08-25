import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { WiMoonAltNew } from "react-icons/wi";
import { FaRegMoon } from "react-icons/fa";



function Theme() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="pl-2 mr-3 bg-gray-200 dark:bg-gray-700 px-0.5 py-0.5 rounded-full flex items-center">
            <button
                className=""
                onClick={() => setDarkMode(true)}
            >
                {darkMode ? (
                    <WiMoonAltNew className=" text-gray-500" />
                ) : (
                    <FaRegMoon className=" text-orange-500" />
                )}
            </button>
            <button
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded-md flex items-center"
                onClick={() => setDarkMode(false)}
            >
                {darkMode ? (
                    <FaSun className="text-orange-500" />
                ) : (
                    <WiMoonAltNew className="text-gray-500 fill-white" />
                )}
            </button>
        </div>

    );
}

export default Theme;