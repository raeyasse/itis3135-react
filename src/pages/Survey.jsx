export default function Survey() {
    return <>
        <h2>Survey</h2>
        <main>
            <h1 id="title">Ambitious Rabbit Adventure Guild Application</h1>
            <p id="description">Join the Ambitious Rabbit on daring quests across forests, mountains, and hidden burrows. Fill out this form to apply to the guild.</p>
            <form id="survey-form">
                <label htmlFor="name" id="name-label">Explorer Name</label>
                <input required id="name" type="text" size="25" placeholder="Enter your adventurer name" />
                <br />

                <label htmlFor="email" id="email-label">Messenger Owl Contact</label>
                <input required id="email" type="email" size="40" placeholder="Where should we send your quest updates?" />
                <br />

                <label htmlFor="number" id="number-label">Explorer Age (optional)</label>
                <input required min="18" max="35" id="number" type="number" placeholder="Age" />

                <p>Choose your Adventurer Class</p>
                <select id="dropdown">
                    <option>Scout</option>
                    <option>Treasure Hunter</option>
                    <option>Map Navigator</option>
                    <option>Beast Tamer</option>
                    <option>Burrow Engineer</option>
                    <option>Guild Strategist</option>
                </select>

                <p>How ready are you for dangerous quests?</p>
                <input id="offcourse-option" type="radio" name="would-recommend" value="offcourse-option" />
                Born Ready

                <input id="yes-option" type="radio" name="would-recommend" value="yes-option" />
                Ready with Training

                <input id="no-option" type="radio" name="would-recommend" value="no-option" />
                Still Learning

                <p>Which guild activities interest you? (Select all that apply)</p>
                <label><input type="checkbox" value="treasure" /> Treasure Hunts</label>
                <label><input type="checkbox" value="monster" /> Monster Tracking</label>
                <label><input type="checkbox" value="map" /> Map Exploration</label>
                <label><input type="checkbox" value="artifact" /> Artifact Recovery</label>
                <label><input type="checkbox" value="burrow" /> Burrow Construction</label>
                <label><input type="checkbox" value="carrot" /> Carrot Farming</label>

                <p>Why should Ambitious Rabbit recruit you?</p>
                <textarea placeholder="Tell us about your skills, bravery, or past adventures..." cols="40"></textarea>
                <br />

                <button id="submit">Begin Your Adventure</button>
            </form>
        </main>
    </>;
}
