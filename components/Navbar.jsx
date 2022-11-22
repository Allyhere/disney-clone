import Image from "next/image";
import Link from "next/link";
import logo from "../public/disneyplus.png"

export const Navbar = ({ account }) => {
    return (
        <nav className="navbar">
            <Link href={"/"}>
                <Image
                    src={logo}
                    alt="Disney Logo"
                    width={120}
                    height={80}
                    priority={false}
                />
            </Link>
            <div className="navbar__account">
                <p>Welcome {account.username}</p>
                <Image
                    alt={account.username}
                    className="navbar__avatar"
                    height={50}
                    width={50}
                    src={account.avatar.url}
                />
            </div>
        </nav>
    )
}