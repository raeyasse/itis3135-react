import { useTitle } from "../hooks/useTitle";

export default function Cards() {
    useTitle("Raey Assefa's Ambitious Rabbit | ITIS 3135 | Cards");

    return <>
        <h1>Cards</h1>
        <main id="playing-cards">
            <div className="card">
                <div className="left">
                    <p className="character">A</p>
                    <p className="character">♠</p>
                </div>
                <div className="middle">
                    <img src="../../public/bunny_spade.png" alt="bunny spade" />
                </div>
                <div className="right">
                    <p className="character">A</p>
                    <p className="character">♠</p>
                </div>
            </div>

            <div className="card">
                <div className="left">
                    <p className="red character">2</p>
                    <p className="red character">♥</p>
                </div>
                <div className="middle">
                    <img src="../../public/bunny_clubs.png" alt="bunny clubs" />
                </div>
                <div className="right">
                    <p className="red character">2</p>
                    <p className="red character">♥</p>
                </div>
            </div>

            <div className="card">
                <div className="left">
                    <p className="character">3</p>
                    <p className="character">♣</p>
                </div>
                <div className="middle">
                    <img src="../../public/bunny_heart.png" alt="bunny heart" />
                </div>
                <div className="right">
                    <p className="character">3</p>
                    <p className="character">♣</p>
                </div>
            </div>
        </main>
    </>;
}
