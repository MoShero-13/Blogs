import BlogList from "./BlogList";
import useFetch from "./useFetch";

// useState hook
// const Home = () => {
//   const [name, setName] = useState("Ahmad");
//   const [age, setAge] = useState(20);

//   const handleClick = () => {
//     setName("Mohammad");
//     setAge(23);
//   };
//   const handleClickAgain = (name, e) => {
//     console.log("hello " + name, e.target);
//   };

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         {name} is {age} years old
//       </p>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={(e) => handleClickAgain("Mohammad", e)}>
//         Click me Again
//       </button>
//     </div>
//   );
// };

// Outputting Lists
// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "Lorem ipsum...", author: "Ahmad", id: 1 },
//     { title: "Welcome party", body: "Lorem ipsum...", author: "Osama", id: 2 },
//     {
//       title: "Web dev top tips",
//       body: "Lorem ipsum...",
//       author: "Mohammad",
//       id: 3,
//     },
//   ]);

//   return (
//     <div className="home">
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// Props
// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "Lorem ipsum...", author: "Ahmad", id: 1 },
//     { title: "Welcome party", body: "Lorem ipsum...", author: "Osama", id: 2 },
//     {
//       title: "Web dev top tips",
//       body: "Lorem ipsum...",
//       author: "Mohammad",
//       id: 3,
//     },
//   ]);

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs!" />
//       {/* Reusing Components */}
//       <BlogList
//         blogs={blogs.filter((blog) => blog.author === "Mohammad")}
//         title="Mohammad Blogs!"
//       />
//     </div>
//   );
// };

// Functions as props
// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "Lorem ipsum...", author: "Ahmad", id: 1 },
//     { title: "Welcome party", body: "Lorem ipsum...", author: "Osama", id: 2 },
//     {
//       title: "Web dev top tips",
//       body: "Lorem ipsum...",
//       author: "Mohammad",
//       id: 3,
//     },
//   ]);

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };
//   const [name, setName] = useState("Mohammad");

//   useEffect(() => {
//     console.log(`use effect ran`);
//     console.log(name);
//   }, [name]);

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//       <button onClick={() => setName("Ahmad")}>Change name</button>
//       <p>{name}</p>
//     </div>
//   );
// };

// Fetching using useEffect
// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   // Conditional Loading Message
//   const [isPending, setIsPending] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("http://localhost:8000/blogs")
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           setBlogs(data);
//           setIsPending(false);
//         });
//     }, 1000);
//   }, []);

//   return (
//     <div className="home">
//       {isPending && <div>Loading... </div>}
//       {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
//     </div>
//   );
// };

// Handling Error Message
// Handling Error Message
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8001/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};
export default Home;
