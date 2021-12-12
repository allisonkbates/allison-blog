import PostCard from '../components/postCard';

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <>
    <h2>Latest Posts</h2>
    <div className="posts-container">
    {posts.map(post => (
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
        grid-template-rows: repeat(3, 1fr);
        grid-auto-flow: row;
      }
    `}</style>
    
    </>
  )
}