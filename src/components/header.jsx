import { Link } from "react-router";
export default function Header() {
    return (
        <header>
            <h1>Raey Assefa's Ambitious Rabbit</h1>
            <nav>
                <Link to={"/"}>Home</Link> |{" "}
                <Link to={"/contract"}>Contract</Link> |{" "}
                <Link to={"/website_evaluations"}>Website Evaluation</Link> |{" "}
                <Link to={"/survey"}>Survey</Link> |{" "}
                <Link to={"/cards"}>Cards :)</Link> |{" "}
                <Link to={"/inventory"}>Inventory</Link> |{" "}
                <Link to={"/documentation"}>Documentation</Link> |{" "}
                <Link to={"/product"}>Product</Link> |{" "}
            </nav>
        </header>
    )
}