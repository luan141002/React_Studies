import { useState, useEffect } from "react";

// initial tabs component
const tabs = ["posts", "albums", "comments"];

function useEffectExample() {
  // get title rom input
  const [title, setTitle] = useState("");
  // for showing the content form the API
  const [type, setType] = useState("posts");
  const [posts, setPosts] = useState([]);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);

  useEffect(() => {
    const handleScrollup = () => {
      setScroll(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScrollup);
    return () => {
      window.removeEventListener("scroll", handleScrollup);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "navy",
                }
              : {}
          }
          onClick={() => {
            setType(tab);
          }}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {scroll && (
        <button
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to top
        </button>
      )}
    </div>
  );
}
export default useEffectExample;
