"use client"
import React, { useState } from "react";

export default function MainHelper() {
    const [loading, setLoading] = useState(false);

    function HandleClick() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }

    let buttonContent;

    if (loading) {
        buttonContent = (
            <button className="btn">
                <span className="loading loading-spinner"></span>
                Carregando
            </button>
        )
    } else {
        buttonContent = (
            <button className="btn bg-base-100" onClick={HandleClick}>
                QUERO JOGAR
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
        );
    }

    return (
        <div className="hero h-96 bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
                <img
                    src="https://assetsio.reedpopcdn.com/counter-strike-2_9KYa6NU.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
                    alt="Counter-Strike"
                    className="max-w-sm w-80 h-80 mb-4 lg:mr-8 rounded-lg shadow-2xl"
                />
                <div className="text-center sm:text-sm md:text-md lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">
                        Oferecemos os melhores produtos com a qualidade garantida!
                    </h1>
                    <p className="py-6 sm:text-sm md:text-md">
                        Conheça nossos serviços e comece a sua jogatina hoje mesmo.
                    </p>
                    {buttonContent}
                </div>
            </div>
        </div>
    );
}