import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = ({stack}) => {

  const [logo, setLogo] = useState('')

  useEffect(()=>{
    (async ()=>{
      const result = await stack.Assets().Query().where("title","logo").toJSON().find()
      setLogo(result[0][0].url)
    })()
  },[])

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
