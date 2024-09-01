
import { FaChartPie } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa6';
import { SiWindows } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  homeCl: string;
  statsCl: string;
  galCl: string;
}

const Navbar: React.FC<NavbarProps> = ({ homeCl, statsCl, galCl }) => {
  const navigate = useNavigate();

  const getIconSize = () => {
    if (window.innerWidth < 640) return 20; // Small screens
    if (window.innerWidth < 1024) return 25; // Medium screens
    return 30; // Large screens
  };

  const iconSize = getIconSize();

  const navItems = [
    { path: '/', icon: <SiWindows size={iconSize} color={homeCl} />, key: 'home' },
    { path: '/stats', icon: <FaChartPie size={iconSize} color={statsCl} />, key: 'stats' },
    { path: '/gallery', icon: <FaImage size={iconSize} color={galCl} />, key: 'gallery' },
  ];

  return (
    <div className="sm:h-screen sm:w-max bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 flex sm:flex-col items-center w-full h-max shadow-lg">
      <ul className="sm:h-40 flex sm:flex-col justify-around items-center w-full sm:mt-5">
        {navItems.map(({ path, icon, key }) => (
          <li
            key={key}
            onClick={() => navigate(path)}
            className="p-4 flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-opacity-80 bg-white rounded-full shadow-md hover:shadow-xl"
          >
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
