import React, { Component } from "react";
import usar2 from "../img/usar2.jpg";
import download from "../img/download.jpeg";

class Conteudo extends Component{
    render() {
        return(

                    <div className=" pt-10 p-5 m-0 h-auto bg-gray-300">
                        <div className=" pl-5 container mx-auto gap-3 gap-y-10 grid grid-cols-3 content-start place-item-auto justify-center">
                        <div className="">
                            <div className=" max-w-sm md:w-full rounded overflow-hidden shadow-lg bg-gray-200 object-right">
                                <img className="w-full" src={usar2} alt="random" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 object-right">
                            <img className="w-full" src={download} alt="random" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 object-right">
                            <img className="w-full" src={download} alt="random" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 object-right">
                            <img className="w-full" src={download} alt="random" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">

                    </div>
                </div>
        );
    }
}

export default Conteudo;