import { VideoCard } from "./VideoCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Section = ({ genre, videos }) => {
  return (
    <div className="genre">
      <h3>{genre}</h3>
      <Splide
        aria-label="new filmes presentation"
        className=""
        options={{
          autoWidth: true,
          classes: {
            arrows: "splide__arrows genre__arrows",
          },
          lazyLoad: "nearby",
          gap: "2ch",
          omitEnd: true,
          pagination: false,
        }}
      >
        {videos &&
          videos.map((video) => (
            <SplideSlide className="" key={video.id}>
              <a href={`/video/${video.slug}`}>
                <VideoCard thumbnail={video.thumbnail} />
              </a>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};
