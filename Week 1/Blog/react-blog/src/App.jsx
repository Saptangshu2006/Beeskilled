import { useState } from "react";
import posts from "./posts.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <header className="header">
        <h1>Blogs</h1>
        <p>Simple React Blog UI</p>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>React</option>
        </select>
      </div>

      <div className="posts">
        {filteredPosts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <span className="tag">{post.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;