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
      src="https://media.licdn.com/dms/image/D5603AQGalZoGF-u-qQ/profile-displayphoto-shrink_800_800/0/1711973608108?e=1726704000&v=beta&t=f7rGxv-hzN6Q00nrpO_Bwz3i2vQ4LNRm573mAfwosr0"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="font-semibold">ABDULLAH AL KAWSER</h1>
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
