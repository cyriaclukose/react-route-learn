import { Route, Routes ,Link} from "react-router-dom";
import Home from "./Home";
import Booklist from "./Booklist";
import Book from "./Book";
import NewBook from "./NewBook"
import NotFound from "./NotFound";
function App() {

  return (
<>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/books">BookList</Link></li>
</ul>
</nav>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/books">
      <Route index element={<Booklist />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>

  );
}

export default App;
