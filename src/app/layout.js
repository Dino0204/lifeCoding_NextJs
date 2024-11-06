import Link from "next/link";
import "./globals.css";

// export const metadata = {
//   title: "Web tutorial",
//   description: "Generated by Dino0204",
// };

export default async function RootLayout({ children }) {
  const res = await fetch("http://localhost:9999/topics");
  const topics = await res.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">Web</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">create</Link>
          </li>
          <li>
            <Link href="/update/1">update</Link>
          </li>
          <li>
            <input type="button" value="delete"></input>
          </li>
        </ul>
      </body>
    </html>
  );
}
