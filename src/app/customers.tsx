export default function Customers() {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://static.vecteezy.com/system/resources/thumbnails/009/383/461/small/man-face-clipart-design-illustration-free-png.png" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Pessoa Anonima</h2>
                <p>Eu amo esse site, muito bom!</p>
                <div className="card-actions justify-end">
                    <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                    <progress className="progress progress-accent w-56" value="100" max="100"></progress>
                </div>
            </div>
        </div>
    );
}