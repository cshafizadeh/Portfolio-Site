import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particlesjs = () => {
    const particlesInit = async (i) => {
        await loadFull(i);
    };
    const particlesLoaded = (i) => {

    };

    return (
        <div id='container'>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    canvas: {
                        position: 'absolute'
                    },
                    fullScreen: { 
                        enable: false,
                        "zIndex": 0 
                    },
                    "particles": {
                        "color": {
                            "value": "#ffffff",
                            "animation": {
                                "h": {
                                    "enable": true,
                                    "speed": 20
                                }
                            }
                        },
                        "links": {
                            "color": {
                                "value": "#ffffff"
                            },
                            "enable": true,
                            "opacity": 0.4
                        },
                        "move": {
                            "enable": true,
                            "outModes": {
                                "bottom": "out",
                                "left": "out",
                                "right": "out",
                                "top": "out"
                            },
                            "speed": 3
                        },
                        "number": {
                            "density": {
                                "enable": true
                            },
                            "value": 80
                        },
                        "opacity": {
                            "value": 0.5
                        },
                    }
                }}
            />
        </div>
    );
};
