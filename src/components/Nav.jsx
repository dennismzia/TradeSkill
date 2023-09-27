import React from 'react'
import { NavLinks } from '../constants';

const Nav = () => (
    <header className="padding-x py-8">
        <nav className="flex justify-between items-center">
            {/* logo goes here */}
            <ul className="flex-1 flex justify-center items-center gap-16">
                    {
                        NavLinks.map((item)=>(
                            <li key={item.label} className="font-poppins leading-normal text-sm text-black hover:text-purple-800 cursor-pointer">
                                {item.label}
                            </li>
                        ))
                    }


            </ul>
        </nav>
        
    </header>
)

export default Nav