import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
                title,
                slug,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-14 mb-2 tracking-widest text-center md:text-6xl lg:text-7xl">
          Article Page
        </h1>
        <h2 className="text-xs text-center mb-14 md:text-sm lg:text-base text-gray-500">
          Currently there are only ({posts.length}) article posts available.
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img
                className="rounded-t"
                src={post.mainImage.asset.url}
                alt={post.title}
              />
              <h4 className="text-xl mt-2 font-bold">{post.title}</h4>
              {/* Deskripsi singkat diletakkan disini */}
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-green-400 hover:bg-transparent border-2 border-green-400
            transition-all duration-500 hover:text-black font-bold"
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
