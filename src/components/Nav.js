import React, { Component } from "react";

class Nav extends Component {
    render() {
        return(
            <div>
                <nav className=" sticky w-full m-0 md:m-full h-16 bg-black">
                    <div className="pl-5 h-10 font-sans font-bold text-lg text-white inline-block align-middle">
                       <p>Projetando</p>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;