import { useTitle } from "../hooks/useTitle";
export default function Index(){
    useTitle("Raey Assefa's Ambitious Rabbit | ITIS 3135 | Course");
    return(
        <>
        <h2>Course Page</h2>
        <p>Welcome to my ITIS 3135 course page, here you'll find course related content, my course contract
            and all the boring stuff. You should click <a href="../introduction.html">here</a> it's way more fun!
        </p>
        </>
    )
}