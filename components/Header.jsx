import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export const Header = ({ videos }) => {
  return (
    <header className="header">
      <Splide
        aria-label="new filmes presentation"
        className="header__slider"
        options={{
          classes: {
            pagination: 'splide__pagination header__pagination',
          },
          gap: "2ch",
          padding: "5rem",
          type: "loop",
        }}
      >
        {videos?.map((video, index) => {
          return (
            <SplideSlide className="header__slide" key={index}>
              <Image
                alt={video.title}
                className="header__image"
                src={video.thumbnail?.url}
                fill
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </header>
  );
};
