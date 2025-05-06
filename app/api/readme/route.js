import fetch from "node-fetch";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const repoName = searchParams.get("repoName");

  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const username = "Sangam5756";

  try {
    const url = `https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`;

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch README" }), {
        status: response.status,
      });
    }

    const text = await response.text();
    return new Response(JSON.stringify({ readme: text }), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch README:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch README" }), {
      status: 500,
    });
  }
}
