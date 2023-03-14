import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import profile from "../images/profile.png";
import { format } from "date-fns";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
            title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1
          className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex 
        items-center justify-center h-screen"
        >
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1
            className="uppercase font-bold text-4xl tracking-wide mt-10 mb-0 md:text-6xl lg:text-6xl 
          text-center"
          >
            {singlePost.title}
          </h1>
          {singlePost.publishedAt && (
            <p className="text-gray-500 mb-10 text-xs md:text-base lg:text-base text-center">
              Published on{" "}
              {format(new Date(singlePost.publishedAt), "dd MMMM yyyy")}
            </p>
          )}
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t"
            />
          )}

          <div className="flex flex-row items-center mt-4 mb-8">
            <img
              src={profile}
              alt="Profile"
              className="m-0 rounded-full w-10 md:w-14 lg:w-14 border-solid border-2 border-yellow-900"
            />
            <div className="ml-2 flex flex-col justify-start items-start leading-none">
              <p className="font-bold text-sm md:text-base lg:text-base">
                Author: Hans Beaver
              </p>
              <a
                href="https://hansbeaver-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-400 text-xs md:text-sm lg:text-sm underline"
              >
                See my profile
              </a>
            </div>
          </div>

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="y13jp1on"
              dataset="production"
            />
          </div>

          <button>
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-green-400 hover:bg-transparent border-2 
              border-green-400 transition-all duration-500 hover:text-black font-bold"
            >
              Read more articles
            </Link>
          </button>
        </section>
      )}
    </>
  );
}
