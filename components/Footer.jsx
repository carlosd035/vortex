import { CiInstagram } from "react-icons/ci";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleMouseEnter = (icon) => {
        setActiveIcon(icon);
    }

    const handleMouseLeave = () => {
        setActiveIcon(null);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-[20px] bg-gray-900 p-[50px] ">
            <p className="font-mono text-white text-2xl">Vortex</p>
            <p className="font-mono text-white text-2xl">Create by <span className="text-2xl">Carlos Fernandes </span> ©2024 </p>
            <div className="flex gap-[30px] justify-center items-center">

                <a
                    href="https://www.instagram.com/carlosdf035/"
                    onMouseEnter={() => handleMouseEnter('instagram')}
                    onMouseLeave={handleMouseLeave}
                >
                    <CiInstagram
                        size={30}
                        color={activeIcon === 'instagram' ? 'blue' : 'white'}
                    />
                </a>
                <a
                    href="https://github.com/carlosd035"
                    onMouseEnter={() => handleMouseEnter('github')}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaGithub
                        size={30}
                        color={activeIcon === 'github' ? 'blue' : 'white'}
                    />
                </a>

                <a
                    href="mailto:example@gmail.com"
                    onMouseEnter={() => handleMouseEnter('email')}
                    onMouseLeave={handleMouseLeave}
                >
                    <MdOutlineEmail
                        size={30}
                        color={activeIcon === 'email' ? 'blue' : 'white'}
                    />
                </a>

            </div>
        </div>
    )
}
