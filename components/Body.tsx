import React from 'react';
import Navbar from './Navbar';

const Body = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex-1 flex-col flex">
            <Navbar />
            {children}
        </div >
    )
}

export default Body