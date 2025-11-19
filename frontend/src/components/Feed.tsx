import { posts } from '../data'
import PostCard from './PostCard'

const Feed = () => {
  return (
    <section className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}

export default Feed

