export default function Main() {
    return (
        <div className="flex flex-wrap justify-between">
            <div className="card w-96 md:w-48 sm:w-32 lg:w-96 bg-base-200 shadow-xl hover:bg-base-100 mb-4">
                <figure>
                    <img
                        src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
                        alt="Red Dead Redemption 2"
                        className="w-full"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Red Dead Redemption 2
                        <div className="badge badge-primary py-5">Melhores Títulos</div>
                    </h2>
                    <p>Preparado para se tornar um fora da lei? Entre na gangue.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Mais Comprados</div>
                    </div>
                </div>
            </div>

            <div className="w-full sm:w-1/2 ml-auto mb-8 sm:mb-0">
                <h1 className="text-2xl">COMPRE E RECEBA NA MESMA HORA!</h1>
                <p>
                    Nosso sistema completamente automatizado entrega seu produto na mesma
                    hora que a compra for concluída.
                </p>
            </div>
        </div>
    );
}
