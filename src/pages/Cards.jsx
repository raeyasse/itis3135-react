export default function Cards() {
    return <>
        <h2>Cards</h2>
        <main id="playing-cards">
            <div className="card">
                <div className="left">
                    <p className="character">A</p>
                    <p className="character">♠</p>
                </div>
                <div className="middle">
                    <img src="images/bunny_spade.png" alt="bunny spade" />
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
                    <img src="images/bunny_clubs.png" alt="bunny clubs" />
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
                    <img src="images/bunny_heart.png" alt="bunny heart" />
                </div>
                <div className="right">
                    <p className="character">3</p>
                    <p className="character">♣</p>
                </div>
            </div>
        </main>
    </>;
}
