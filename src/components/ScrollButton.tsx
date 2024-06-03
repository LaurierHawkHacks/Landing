import React from 'react';

import { Link } from 'react-scroll';
import { IoMdArrowUp } from "react-icons/io";

/*
 *
 * @description Scroll button
 * @props {void}
 * 
 */
const ScrollButton: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-8 z-50">
            <Link
                to="top"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                offset={-75}
            >
                <div className="w-12 h-12 bg-deepMarine rounded-full shadow-lg flex items-center justify-center">
                    <IoMdArrowUp className="text-white" />
                </div>
            </Link>
        </div>
    );
};

export { ScrollButton };