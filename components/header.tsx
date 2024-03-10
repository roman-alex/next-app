import Link from "next/link";
import NavLink from "@/components/nav-link";

const links = [
  {href: "/blog", name: "Blog"},
  {href: "/about", name: "About Us"},
]

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center py-6 max-w-5xl">
      <div className="text-2xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {links.map(link => <li key={link.href}><NavLink href={link.href}>{link.name}</NavLink> </li>)}
        </ul>
      </nav>
    </div>
  );
}