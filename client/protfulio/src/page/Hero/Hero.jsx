import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className="px-10 pt-10">

{/* 
      card */}

<div>
  <figure className="">
    <img
      src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/333059786_1405026866960826_534424273630314046_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHjsIxVBnb3YYqQ-pATaFcjaK1XspQpP21orVeylCk_ba-O9SwK0e0ud1vAhIgdtoRRWzcHzd2x6uiw22W1_j5w&_nc_ohc=WQgRHtE7YsUQ7kNvgGhaT4l&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AYCUCoZsW9Xn6yVHsnvvRHxDy0-JR13WgAEVTN208RC9Uw&oe=668B60AE"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-xl font-bold" >Software Engineer</h2>

    <hr  className= 'text-blue' />


  </div>
</div>




<div className="space-y-4 mt-10">

  <p className=" flex items-center gap-3"><MdOutlineMail className="text-3xl w-10 h-8 text-zinc-50  rounded bg-red-500 p-1" /> <span>
    <p className="text-xs">EMAIL</p>
    <p>abdullahalkawser1@gmail.com</p>
    
    </span></p>
    <p className=" flex items-center gap-4"><RiPhoneLine  className="text-3xl w-10 h-8 text-zinc-50  rounded bg-red-500 p-1"/> <span>
    <p>PHONE</p>
    <p>tel:+12133522795</p>
    
    </span></p>
    <p className=" flex items-center gap-4"><LiaBirthdayCakeSolid className="text-3xl w-10 h-8 text-zinc-50  rounded bg-red-500 p-1" /> <span>
    <p>BIRTHDAY</p>
    <p>June 23, 1982</p>
    
    </span></p>
    <p className=" flex items-center gap-4"><CiLocationOn className="text-3xl w-10 h-8 text-zinc-50  rounded bg-red-500 p-1"/> <span>
    <p>LOCATION</p>
    <p>Sacramento, California, USA</p>
    
    </span></p>



</div>

<div className="flex gap-6 justify-center mt-10 mb-20">
 <p><FaFacebook /></p>
 <p><FaInstagram /></p>
 <p><FaGithub /></p>

</div>


    </div>
  );
};

export default Hero;
