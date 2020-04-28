import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-wraper">
      <div>Hello</div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num}>
            <a onClick={() => paginate()} href="!#">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>My Blog</h1>
//       <Posts posts={currentPosts} loading={loading} />
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// const Posts = ({ posts, loading }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// };

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul>
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <a onClick={() => paginate(number)} href="!#">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };


export default App;
