import Link from "next/link";
import { Section } from "../components/Section";
import { Header } from "../components/Header";
import { fetchVideos } from "../lib/CMSService";

export const getStaticProps = async () => {
  const { videos } = await fetchVideos();

  return {
    props: {
      videos
    },
  };
};

const Home = ({ videos }) => {
  const filterVideos = (genre) =>
    videos.filter((video) => video.tags.includes(genre));
  const unseenVideos = videos.filter((video) => !video.seen);

  return (
    <>
      <main className="app">
        <Header videos={videos}/>
        <section className="video-feed">
          <div className="featured">
            <Link href="#disney" className="featured__franchise">
              disney
            </Link>
            <Link href="#pixar" className="featured__franchise">
              pixar
            </Link>
            <Link href="#star-wars" className="featured__franchise">
              star-wars
            </Link>
            <Link href="#marvel" className="featured__franchise">
              marvel
            </Link>
          </div>
          <Section genre={"Recommended for you"} videos={unseenVideos} />
          <Section genre={"Family"} videos={filterVideos("family")} />
          <Section genre={"Adventure"} videos={filterVideos("adventure")} />
          <Section genre={"Disney"} videos={filterVideos("disney")} />
          <Section genre={"Drama"} videos={filterVideos("drama")} />
        </section>
      </main>
    </>
  );
};

export default Home;
