import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../../assets/logo.svg';

function SideNavBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/');

  const menuItems = [
    { path: '/', icon: RiHome5Fill },
    { path: '/search', icon: RiUserSearchLine },
    { path: '/mail', icon: RiMailFill },
    { path: '/send', icon: IoIosSend },
    { path: '/stack', icon: SiElasticstack },
    { path: '/inbox', icon: FaInbox },
    { path: '/stacks', icon: IoStatsChartSharp },
  ];

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img src={logo} className="h-8 rounded-xl object-left overflow-visible" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        {menuItems.map(({ path, icon: Icon }) => (
          <div
            key={path}
            className={`cursor-pointer p-1 ${selectedItem === path ? 'bg-gray-600 rounded-lg' : ''}`}
            onClick={() => handleMenuItemClick(path)}
          >
            <Icon />
          </div>
        ))}
      </div>
      <div className="text-white bg-green-500 p-2 rounded-full">
        PS
      </div>
    </div>
  );
}

export default SideNavBar;