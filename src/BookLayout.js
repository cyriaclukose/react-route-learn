
import { Link,Outlet } from "react-router-dom";
function BookLayout(){


    return(<>
    <ul>
    <li><Link to="/books/1">Book1</Link></li>
    <li><Link to="/books/2">BooK2</Link></li>
    <li><Link to="/books/new">New Book</Link></li>
    <Outlet />
     </ul>
    </>);
}

export default BookLayout;