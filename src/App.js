import Navbar from "./Navbar";
import Home from "./Home";
import Creat from "./Creat";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NotFound from "./NotFound";

// function App() {
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>App Component</h1>
//       </div>
//     </div>
//   );
// }

// Dynamic Values in Templates
// function App() {
//   const title = `Welcome to the new blog`;
//   const likes = 50;
//   // const person = { name : `mohammad`, age : 23 }
//   const link = "http://www.google.com";

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked {likes} times</p>
//         {/* <p>{ person }</p> */}
//         <p>{"hello, Mohammad"}</p>
//         <p>{[1, 2, 3, 4, 5]}</p>
//         <p>{Math.random() * 10}</p>
//         <a href={link}>Google Site</a>
//       </div>
//     </div>
//   );
// }

// Multiple Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/creat" element={<Creat />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
