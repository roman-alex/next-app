import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  summary: string;
  creator: string;
}

export default function Post({slug, title, summary, creator}: Props) {
  return (
    <Link href={`blog/${slug}`} className="p-4 rounded-md border border-white-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <i className="text-gray-400">{creator}</i>
      <p>{summary}</p>
    </Link>
  );
}