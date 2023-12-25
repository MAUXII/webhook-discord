import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Icons = ()=>{
    return(
        <div className="mt-3 flex gap-3">
<a target="blank" href="https://www.instagram.com/mauxxll/" className=" hover:text-violet-500"><FaInstagram  ></FaInstagram></a>
<a target="blank" href="https://discord.com/users/1060434214622871572" className=" hover:text-violet-500"><FaDiscord ></FaDiscord></a>
<a target="blank" href="https://www.linkedin.com/in/mauricio-leandro-309759253/" className=" hover:text-violet-500"><FaLinkedin></FaLinkedin></a>
        </div>
    )
}