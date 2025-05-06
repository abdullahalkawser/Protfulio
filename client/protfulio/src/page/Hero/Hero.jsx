import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="p-6 flex flex-col items-center text-white space-y-6 bg-gradient-to-b from-[#1e3a8a] to-[#312e81] rounded-xl shadow-2xl backdrop-blur-md">

      {/* Avatar & Name */}
      <div className="flex flex-col items-center space-y-3">
        <img
          src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/489085217_1225632368983132_9073890756416247574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEp2EjF5dKG6maYNVO3zPq8_QmJvGbojLn9CYm8ZuiMuVPdNWJoVaZmN0H-BcjyM-f2wgIxKfnYtQc00DxgLKhn&_nc_ohc=yg9jUGNhxvQQ7kNvwFl_eOi&_nc_oc=AdkE4ZdHW2pFjE5rh4kwlvtppXhQ4YfwXmce_NcjqT0eLVDb89N01p2p5mkK4iUZWQ8&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=nf5VsLwQhnLNvI03GLbvvQ&oh=00_AfLChlV89UtqSQrIEVcaTkhgVnf0rGW8qEBlfQ7NteKqhQ&oe=68203CE1" // Replace with your image
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <h1 className="text-xl font-extrabold tracking-wide">ABDULLAH AL KAWSER</h1>
        <h2 className="text-sm font-semibold text-indigo-200">Software Engineer</h2>
        <div className="w-20 h-1 bg-indigo-400 rounded-full mt-1"></div>
      </div>

      {/* Contact Info */}
      <div className="w-full space-y-4 text-sm">
        <InfoItem
          icon={<MdOutlineMail />}
          label="Email"
          value="abdullahalkawser1@gmail.com"
        />
        <InfoItem
          icon={<RiPhoneLine />}
          label="Phone"
          value="+1 213 352 2795"
        />
        <InfoItem
          icon={<LiaBirthdayCakeSolid />}
          label="Birthday"
          value="June 23, 1982"
        />
        <InfoItem
          icon={<CiLocationOn />}
          label="Location"
          value="Sacramento, California, USA"
        />
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-6 mt-4">
        <SocialIcon icon={<FaFacebook />} link="#" color="text-blue-400" />
        <SocialIcon icon={<FaInstagram />} link="#" color="text-pink-400" />
        <SocialIcon icon={<FaGithub />} link="#" color="text-gray-300" />
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow-md hover:bg-white/20 transition duration-300">
    <div className="text-2xl bg-gradient-to-r from-pink-500 to-indigo-500 p-2 rounded-full text-white shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-xs uppercase text-gray-300">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-2xl ${color} hover:scale-125 transition-transform duration-300`}
  >
    {icon}
  </a>
);

export default Hero;
