export default function Inventory() {
    return <>
    
        <main>
            <h1>Book Inventory</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="read">
                        <td>Alice in Wonderland</td>
                        <td>Lewis Carroll</td>
                        <td>Fantasy Fiction</td>
                        <td><span className="status">Read</span></td>
                        <td>
                            <span className="rate three">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </td>
                    </tr>

                    <tr className="to-read">
                        <td>Pat the Bunny</td>
                        <td>Dorothy Kunhardt</td>
                        <td>Childrens Fiction</td>
                        <td><span className="status">To Read</span></td>
                        <td>
                            <span className="rate two">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </td>
                    </tr>

                    <tr className="in-progress">
                        <td>The Tale of Peter Rabbit</td>
                        <td>Beatrix Potter</td>
                        <td>Fiction</td>
                        <td><span className="status">In Progress</span></td>
                        <td>
                            <span className="rate one">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </td>
                    </tr>

                    <tr className="to-read">
                        <td>Mr. Rabbit and the Lovely Present</td>
                        <td>Charlotte Zolotow</td>
                        <td>Fiction</td>
                        <td><span className="status">To Read</span></td>
                        <td>
                            <span className="rate three">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </>;
}
