"use client"
import React, { useState } from "react";

export default function AlmostFooter() {
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
                Redirecionando
            </button>
        )
    } else {
        buttonContent = (
            <button className="btn bg-base-100" onClick={HandleClick}>
                EU QUERO
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z" />
                </svg>
            </button>
        );
    }
    return (
        <div className="bg-base-100">
            <h1 className="text-center text-2xl p-12">GANHE PREMIOS</h1>
            <div className="bg-base-100 content-center flex">
                <div className="card w-auto h-auto bg-base-200 text-neutral-content m-24">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Parceria!</h2>
                        <p>Por conta de nossas parcerias, é possivel ganhar premios jogando
                            dentro do conforto da sua casa, sem balela!
                        </p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    {buttonContent}
                </div>

                <div className="card w-auto h-auto ml-20 bg-base-200 text-neutral-content m-24">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Parceria!</h2>
                        <p>Por conta de nossas parcerias, é possivel ganhar premios jogando
                            dentro do conforto da sua casa, sem balela!
                        </p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    {buttonContent}
                </div>
            </div>
        </div>
    )
}