import Link from "next/link";
import DateComponent from "./date";

export default function PostCard({post}) {
  return (
    
    <div className="post-container">
      <p className="post-date"><DateComponent dateString={post.date}/></p>
      <hr></hr>
      <Link href={`/posts/${post.slug}`}><h3>{post.title}</h3></Link>
      <p className="post-excerpt">{post.excerpt}</p>
      <Link href={`/posts/${post.slug}`}><a>Read More -> </a></Link>
    <style jsx>{`
      .post-container {
        padding: 1em;
        border: 1px solid var(--color-grey-100);
        border-radius: 6px;
      }
      h3 {
        font-family: var(--ff-mono);
        color: var(--color-viridian-500);
        cursor: pointer;
        margin: 1em 0em .5em;
      }
      .post-date {
        font-family: var(--ff-mono);
        color: var(--color-grey-50);
        font-size: var(--fs-300);
      }
      hr {
        border: 1px solid var(--color-grey-30);
      }
      .post-excerpt {
        margin-bottom: 1em;
      }
      a {
       color: var(--color-viridian-500);
       font-family: var(--ff-mono); 
       cursor: pointer;
       text-align: right;
      }

    `}</style>
    
    </div>
  )
}