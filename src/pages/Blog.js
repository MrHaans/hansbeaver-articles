import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";

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
                },
                publishedAt
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
              {/* Tanggal Update diletakkan disini */}
              <p className="text-xs text-gray-500 mb-1 mt-1 ml-1">
                Published on{" "}
                {format(new Date(post.publishedAt), "dd MMMM yyyy")}
              </p>
              {/* Kategori Ditambah Disini  */}
              <h4 className="text-xl mt-2 font-bold">{post.title}</h4>
              <div className="my-4">
                <BlockContent
                  blocks={post.body.slice(1, 2)}
                  projectId="y13jp1on"
                  dataset="production"
                />
              </div>
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-3 px-8 rounded shadow text-white bg-green-400 hover:bg-transparent border-2 border-green-400
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
