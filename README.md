# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Routes

  react routes helps you to display different pages in a react application
  we use a package called react-router-dom to achieve this in react web applications.

  npm   install  react-router-dom

### step1:
Step one is to wrap the entire application inside the <BrowserRouter> Component.
Its a react context will pass the routing information to differnt components
```html
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>


  </React.StrictMode>

)
```

### step 2.

In step 2 we have to  define the Routes and Route inside the parent app component

The Routes component wraps different individual Routes to differnt pages
```html
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Booklist />} />
    </Routes>
 ```   
here path determines the url and element defines the component which needs to be
displayed

### Step 3 
let us create a navaigation bar . We can use a component called <Link> to 
create links to different pages. the to attributes specifies the url
for each page. We can see that when click the links the page is not rerendering
the navigation bar remains constant
```html
<nav>
<ul>
<li><Link to="/">Home</Link>
</li>
<li>
<Link to="/books">BookList<Link>
</li>
</ul>
</nav>
```
### Parameterised path

we can define parameterised  and hardcoded path in Routes as shown
below

```html
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Booklist />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="/books/new" element={<NewBook />} />
    </Routes>
```
    here 'id' represent a parameterised path. in New Book we have 
    a hardcoded url path

    In Booklist.js we can define the link to the different books as
    shown below

 ```html   
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

```
So in the Book.js we acceed the id by using the {useParams} hook from react-router-dom as shown below

```html
import { useParams} from "react-router-dom"


function Book(){
    const {id}=useParams();

    return (<>
    <h1>Book {id}Page</h1>
    </>);
}

export default Book;

```
### NotFoundPage

 we can route to the pages not found to NotFound page by defing below
 route in Rooutes

```html
 <Rooute page="*" element {<NotFound/>}/>
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
