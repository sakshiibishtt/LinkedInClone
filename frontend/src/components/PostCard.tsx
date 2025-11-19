import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaRegCommentDots, FaRegThumbsUp } from 'react-icons/fa'
import type { Post } from '../data'

type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <article className="post-card">
      <header>
        <img src={post.author.avatar} alt={post.author.name} />
        <div>
          <strong>{post.author.name}</strong>
          <p>{post.author.title}</p>
          <span>{post.time}</span>
        </div>
        <button className="icon-button">
          <FiMoreHorizontal />
        </button>
      </header>

      <p className="post-card__text">{post.text}</p>
      {post.image && <img className="post-card__image" src={post.image} alt={post.text} />}

      <div className="post-card__meta">
        <span>{post.reactions.toLocaleString()} reactions</span>
        <span>{post.comments.toLocaleString()} comments</span>
      </div>

      <div className="post-card__actions">
        <button>
          <FaRegThumbsUp />
          Like
        </button>
        <button>
          <FaRegCommentDots />
          Comment
        </button>
        <button>
          <FiSend />
          Share
        </button>
      </div>

      <ul className="post-card__tags">
        {post.hashtags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

export default PostCard

