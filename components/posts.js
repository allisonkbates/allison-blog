export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
    {posts.map(post => (
      <h1>{post.title}</h1>
    
    ))}
    </div>
  )
}