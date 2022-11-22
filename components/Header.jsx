import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = ({ videos }) => {
  const router = useRouter();
  return (
    <header className="header">
      <Splide
        aria-label="new filmes presentation"
        className="header__slider"
        options={{
          autoplay: true,
          interval: 5000,
          classes: {
            pagination: "splide__pagination header__pagination",
          },
          gap: "2ch",
          padding: "5rem",
          type: "loop",
        }}
      >
        {videos?.map((video, index) => {
          const href = `/video/${video.slug}`;
          return (
            <SplideSlide
              className="header__slide"
              key={index}
              onClick={() => router.push(href)}
            >
              <Link href={href}>
                <Image
                  alt={video.title}
                  className="header__image"
                  src={video.thumbnail?.url}
                  fill
                />
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </header>
  );
};
