import React, { Component } from "react";

class Nav extends Component {
    render() {
        return(
            <div>
                <nav className="w-18 h-screen m-0 md:h-full md:m-full bg-gray-400">
                    <div className="h-10 font-sans font-bold text-lg text-white">
                        
                        <p className="pb-7">Salute Vitae</p>
                        <div className=" p-0 flex flex-col gap-3 object-center text-center">
                            <a>inicio</a>
                            <a>cadastrar</a>
                            <a>a</a>
                            <a>a</a> 
                            <a>b</a>
                            <a className="pt-80">Sair</a>
                       </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;