import Image from "next/image";
import Link from "next/link";
import {
  House,
  MagnifyingGlass,
  Plus,
  Star,
  FilmStrip,
  TelevisionSimple,
} from "phosphor-react";
import logo from "../public/disneyplus.png";

export const Navbar = ({ account }) => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="Disney Logo"
          width={80}
          height={60}
          className="navbar__logo"
          priority={false}
        />
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <Link className="navbar__menu-link" href="#">
            <House size={12} weight="fill" />
            <span>INÍCIO</span>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__menu-link" href="#">
            <MagnifyingGlass size={12} weight="bold" />
            <span>PESQUISA</span>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__menu-link" href="#">
            <Plus size={12} weight="bold" />
            <span>MINHA LISTA</span>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__menu-link" href="#">
            <Star size={12} weight="fill" />
            <span>ORIGINAIS</span>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__menu-link" href="#">
            <FilmStrip size={12} weight="fill" />
            <span>FILMES</span>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__menu-link" href="#">
            <TelevisionSimple size={12} weight="fill" />
            <span>SÉRIES</span>
          </Link>
        </li>
      </ul>
      <Image
        alt={account.username}
        className="navbar__avatar"
        height={42}
        width={42}
        src={account.avatar.url}
        tabIndex={1}
      />
    </nav>
  );
};
