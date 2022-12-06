import Link from "next/link";
import { useState } from "react";
import { fetchVideoBySlug } from "../../lib/CMSService";

export const getServerSideProps = async (pageContext) => {
  const variables = { pageSlug: pageContext.query.slug };
  const { video } = await fetchVideoBySlug(variables);

  return {
    props: {
      video,
    },
  };
};

const changeToSeen = async (slug) => {
  await fetch("/api/changeToSeen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(slug),
  });
};

const Video = ({ video }) => {
  const [watching, setWatching] = useState(false);

  return (
    <>
      {!watching && (
        <>
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnail.url}
            alt={video.title}
            className="video-image"
          />
          <div className="video-image__info">
            <p>{video.tags}</p>
            <p>{video.description}</p>
            <Link href={"/"}>Go back</Link>
            <button
              className="video-image__button"
              onClick={() => {
                changeToSeen(video.slug);
                watching ? setWatching(false) : setWatching(true);
              }}
            >
              Play
            </button>
          </div>
        </>
      )}
      {watching && (
        <video width={"100%"} controls>
          <source src={video.mp4.url} type="video/mp4" />
        </video>
      )}
      <footer
        className="info-footer"
        onClick={() => watching && setWatching(false)}
      ></footer>
    </>
  );
};

export default Video;
