"use client";
import {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink({href, children}: Props) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "text-gray-400" : "hover:text-gray-400"}>{children}</Link>
  );
}