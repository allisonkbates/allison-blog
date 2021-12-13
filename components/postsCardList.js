import PostCard from "../components/postCard";

export default function PostsCardList({ posts, title}) {
  return (
    <section>
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
      @media only screen and (max-width: 768px) {
        .posts-container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>   
    </section>
  )
}