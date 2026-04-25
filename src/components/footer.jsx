import { Link } from "react-router";
export default function Footer() {
    return (
        <footer>
            <Link to={"https://github.com/raeyasser/"}>GitHub</Link> |{" "}
            <Link to={"https://webpages.charlotte.edu/rassefa"}>CLT Web</Link> |{" "}
            <Link to={"https://raeyasse.github.io"}>GitHub.io</Link> |{" "}
            <Link to={"https://www.freecodecamp.org/rassefa"}>freeCodeCamp</Link> |{" "}
            <Link to={"https://itis3135-react-topaz.vercel.app/"}>ITIS3135@Vercel</Link> |{" "}
            <Link to={"https://www.linkedin.com/in/raey-asse/"}>LinkedIn</Link>

            <hr />
            © 2026 <Link to={"rassefadesigns.com/"}>rassefa</Link> Copyright Reserved.
            <br />
            <Link to={"https://www.freecodecamp.org/certification/rassefa/responsive-web-design-v9"}>
                Certified in Responsive Web Design
            </Link>
        </footer>
    )
}