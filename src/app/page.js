import { Octokit } from "octokit";

const API_URL = "https://api.github.com";
const REPO_OWNER = "godotengine";
const REPO = "godot";
const REPO_PATH = "editor/icons";
const API_TOKEN = process.env.API_TOKEN;
const iconRawPrefix = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO}/master/${REPO_PATH}`;

const url = `${API_URL}/repos/${REPO_OWNER}/${REPO}/contents/${REPO_PATH}`;

async function getData() {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <header>
        <h1>Godot Editor Icons</h1>
      </header>
      <section>
        {data
          .filter((item) => item.name.split(".")[1] === "svg")
          .map((item) => {
            return (
              <figure key={item.name}>
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/${item.name}`}
                    alt={item.name}
                  />
                </div>
                <figcaption>
                  <span>{item.name}</span>
                </figcaption>
              </figure>
            );
          })}
      </section>
    </main>
  );
}
