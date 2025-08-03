import ReadmeViewer from "@/app/components/ReadmeViewer";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch(
    "https://api.github.com/repos/Sangam5756/learning-journey/contents/blogs"
  );
  const data = await res.json();
    if (!Array.isArray(data)) {
    console.error("Unexpected response from GitHub API:", data);
    return [];
  }
  return data
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => ({ slug: file.name.replace(".md", "") }));
}

export default async function LogPage({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://raw.githubusercontent.com/Sangam5756/learning-journey/main/blogs/${slug}.md`
  );
  const raw = await res.text();

  // Parse slug into readable parts
  const [date, ...topicParts] = slug.split("---");
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const title = topicParts.join(" / ").replace(/-/g, " ");

  return (
   <div className="bg-[#0b0a12] min-h-screen">
  <div className="max-w-4xl mx-auto px-4 py-6">
    <div className="mb-6">
      <Link
        href="/learning-journey"
        className="inline-flex items-center text-sm text-white hover:underline"
      >
        ← Back to Learning Journey
      </Link>
    </div>

    <header className="mb-8">
      <h1 className="text-3xl font-bold text-white capitalize">{title}</h1>
      <p className="text-sm text-white mt-1">📅 {formattedDate}</p>
    </header>

    <section className="markdown-body bg-white dark:bg-zinc-900 p-6 rounded-md shadow-md overflow-x-auto">
      <ReadmeViewer content={raw} />
    </section>
  </div>
</div>

  );
}