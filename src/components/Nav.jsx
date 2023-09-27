import React from 'react'
import {NavLinks} from "../constants";

const Nav = () => (
    <header className='padding-x py-8'>
        <nav className='flex justify-between items-center max-container'>
        <a href=""></a>

        <ul className='flex-1 flex justify-center items-center'>
            {
                NavLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="font-poppins leading-normal text-sm text-black hover:text">
                            {item.label}
                        </a>

                    </li>
                ))
            }

        </ul>
        </nav>

    </header>
)

export default Nav