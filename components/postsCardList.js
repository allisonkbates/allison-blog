import PostCard from "../components/postCard";

export default function PostsCardList({ posts, title, className }) {
  return (
    <section className={{className}}>
    <h2>{title ? title : "Latest Posts"}</h2>
    <div className="posts-container">
    {posts && posts.map(post => (
      <PostCard key={post.slug} post={post}/>
    ))}
    </div>
    <style jsx>{`
      h2 {
        font-family: "IBM Plex Mono", monospace;
        font-weight: 300;
        margin-bottom: 1em;
      }
      .posts-container {
        display: grid;
        grid-gap: 24px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr auto;
        grid-auto-flow: row;
      }
      .padding-2em {
        padding: 2em;
      }

      @media only screen and (max-width: 768px) {
        .posts-container {
          grid-template-columns: 1fr;
        }
        .padding-2em {
          padding: 1em;
        }
      }
    `}</style>   
    </section>
  )
}