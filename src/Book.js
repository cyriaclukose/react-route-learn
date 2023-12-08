
import { useParams} from "react-router-dom"


function Book(){
    const {id}=useParams();

    return (<>
    <h1>Book {id}Page</h1>
    </>);
}

export default Book;