
import { Link } from "react-router-dom";

function Booklist(){

return (<>
<h1>Displaying book List</h1>

<ul>
    <li><Link to="/books/1">Book1</Link></li>
    <li><Link to="/books/2">BooK2</Link></li>
    <li><Link to="/books/new">New Book</Link></li>
</ul>

</>);

}

export default Booklist;