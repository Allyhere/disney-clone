import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const franchiseList = [
  { genre: "disney", alt: "watch disney films and series" },
  { genre: "marvel", alt: "watch marvel films and series" },
  { genre: "nat-geo", alt: "watch nat-geo films and series" },
  { genre: "pixar", alt: "watch pixar films and series" },
  { genre: "star-wars", alt: "watch star-wars films and series" },
];

const FranchiseLink = ({ genre, alt }) => {
  const mouseEnter = useCallback(
    ({ target }) => target.nodeName === "VIDEO" && target.play(),
    []
  );

  const mouseLeave = useCallback(
    ({ target }) => target.nodeName === "VIDEO" && target.pause(),
    []
  );

  return (
    <li className="franchise">
      <Link href={`#${genre}`} className="franchise__link">
        <video
          className="franchise__video"
          disablePictureInPicture
          loop
          muted
          preload="metadata"
          width={200}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <source src={`/${genre}.mp4`} type="video/mp4" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/${genre}.png`}
          width={200}
          height={125}
          alt={alt}
          className="franchise__image"
        />
      </Link>
    </li>
  );
};

const FranchiseList = ({ list }) => {
  return (
    <div className="featured">
      <ul className="featured__list">
        {list ? (
          list.map(({ genre, alt }, index) => (
            <FranchiseLink genre={genre} alt={alt} key={index} />
          ))
        ) : (
          <h2>No franchises to display.</h2>
        )}
      </ul>
    </div>
  );
};

const FranchiseRoot = () => <FranchiseList list={franchiseList} />;

export const Franchise = {
  Root: FranchiseRoot,
  Link: FranchiseLink,
  List: FranchiseList,
};
