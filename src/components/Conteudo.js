import React, { Component } from "react";

class Conteudo extends Component{
    render() {
        return(
            <div className=" pt-10 p-5 m-0 h-screen bg-gray-300">
                
                <div className=" overflow pb-15 pl-5 container mx-auto gap-3 gap-y-10 grid grid-cols-3 content-start place-item-auto justify-center">
                    
                    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-200 object-right object">
                        <img className="w-full" src={ require('../assets/download.jpeg').default } alt="" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conteudo;