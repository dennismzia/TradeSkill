import React from 'react'
import { NavLinks } from '../constants';
import Button from "./Button";


const Nav = () => (
    <header className="padding-x py-6 border">
        <nav className="flex justify-between items-center">
            {/* logo goes here */}
            <ul className="flex-1 flex justify-center items-center gap-16">
                    {
                        NavLinks.map((item)=>(
                            <li key={item.label} className="font-poppins leading-normal text-base text-slate-600 hover:text-purple-700 cursor-pointer">
                                {item.label}
                            </li>
                        ))
                    }
                
                <Button label="Get Funds"/>
            

            </ul>
        </nav>
        
    </header>
)

export default Nav