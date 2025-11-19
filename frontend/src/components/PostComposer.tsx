import { FiCamera, FiEdit3, FiImage, FiPlay } from 'react-icons/fi'
import profilePicture from '../assets/sakshib.png'

const PostComposer = () => {
  const actions = [
    { icon: FiImage, label: 'Media', color: '#4f9bff' },
    { icon: FiPlay, label: 'Video', color: '#7fc15e' },
    { icon: FiEdit3, label: 'Write article', color: '#e06847' },
    { icon: FiCamera, label: 'Event', color: '#c37d16' },
  ]

  return (
    <section className="composer">
      <div className="composer__row">
        <img
          src={profilePicture}
          alt="Your profile"
        />
        <button>Start a post</button>
      </div>
      <div className="composer__actions">
        {actions.map(({ icon: Icon, label, color }) => (
          <button key={label} style={{ color }}>
            <Icon />
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
        <button>Start a post</button>
      </div>
      <div className="composer__actions">
        {actions.map(({ icon: Icon, label, color }) => (
          <button key={label} style={{ color }}>
            <Icon />
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default PostComposer

