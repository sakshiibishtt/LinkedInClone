import { useState } from 'react'
import {
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiHash,
  FiMessageCircle,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import {
  manageNetworkItems,
  networkInvitations,
  networkSuggestions,
  recommendedGroups,
  generateFreshNetworkSuggestions,
  type Invitation,
  type NetworkSuggestion,
} from '../data'

const iconMap = {
  connections: FiUsers,
  contacts: FiUserCheck,
  following: FiUserPlus,
  groups: FiUsers,
  events: FiCalendar,
  companies: FiBriefcase,
  hashtags: FiHash,
}

const MyNetwork = () => {
  const [invitations, setInvitations] = useState<(Invitation & { status: 'pending' | 'accepted' })[]>(
    networkInvitations.map((invite) => ({ ...invite, status: 'pending' })),
  )
  const [people, setPeople] = useState<(NetworkSuggestion & { status: 'idle' | 'pending' | 'connected' })[]>(
    networkSuggestions.map((person) => ({ ...person, status: 'idle' })),
  )

  const handleInvitation = (id: number, action: 'accept' | 'ignore') => {
    setInvitations((prev) =>
      prev
        .map((invite) => (invite.id === id ? { ...invite, status: action === 'accept' ? 'accepted' : 'pending' } : invite))
        .filter((invite) => (action === 'ignore' ? invite.id !== id : true)),
    )
  }

  const handleConnect = (id: number) => {
    setPeople((prev) =>
      prev.map((person) => {
        if (person.id !== id) return person
        if (person.status === 'idle') return { ...person, status: 'pending' }
        if (person.status === 'pending') return { ...person, status: 'connected' }
        return person
      }),
    )
  }

  const handleRefreshNetworkSuggestions = () => {
    const freshSuggestions = generateFreshNetworkSuggestions()
    setPeople(freshSuggestions.map((person) => ({ ...person, status: 'idle' as const })))
  }

  return (
    <section className="my-network" id="my-network">
      <header className="my-network__header" onDoubleClick={handleRefreshNetworkSuggestions} title="Double-click to refresh suggestions">
        <div>
          <p className="eyebrow">My Network</p>
          <h2>Manage your connections and discover people you may know</h2>
        </div>
        <button className="btn secondary">
          <FiUserPlus />
          Manage invitations
        </button>
      </header>

      <div className="my-network__layout">
        <aside className="my-network__sidebar card">
          <div className="my-network__section-title">
            <span>Manage my network</span>
            <FiChevronRight />
          </div>
          <ul className="my-network__list">
            {manageNetworkItems.map((item) => {
              const Icon = iconMap[item.type]
              return (
                <li key={item.id}>
                  <div className="my-network__list-icon">
                    <Icon />
                  </div>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.count.toLocaleString()}</span>
                  </div>
                  <FiChevronRight className="chevron" />
                </li>
              )
            })}
          </ul>

          <div className="my-network__section-title">
            <span>Grow your interests</span>
            <FiChevronRight />
          </div>
          <div className="my-network__tags">
            {['#productdesign', '#growth', '#systemdesign', '#ai', '#careerdevelopment'].map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </div>
        </aside>

        <div className="my-network__content">
          <section className="card invitations-card">
            <header>
              <div>
                <p className="eyebrow">Invitations</p>
                <h3>Pending requests</h3>
              </div>
              <button className="link">See all</button>
            </header>

            {invitations.length === 0 ? (
              <div className="my-network__empty">
                <FiCheck />
                <p>You are all caught up on invitations.</p>
              </div>
            ) : (
              <div className="invitation-list">
                {invitations.map((invite) => (
                  <article key={invite.id}>
                    <img src={invite.avatar} alt={invite.name} />
                    <div className="invitation-body">
                      <strong>{invite.name}</strong>
                      <p>{invite.title}</p>
                      <span>{invite.mutual} mutual connections</span>
                      <p className="invitation-message">{invite.message}</p>
                    </div>
                    <div className="invitation-actions">
                      <button className="icon-button" onClick={() => handleInvitation(invite.id, 'ignore')} aria-label="Ignore">
                        <FiX />
                      </button>
                      <button className="btn primary" onClick={() => handleInvitation(invite.id, 'accept')}>
                        Accept
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="card suggestions-card">
            <header>
              <div>
                <p className="eyebrow">People you may know</p>
                <h3>Recommended for you</h3>
              </div>
              <button className="link">See all</button>
            </header>
            <div className="suggestions-grid">
              {people.map((person) => (
                <article key={person.id}>
                  <img src={person.avatar} alt={person.name} />
                  <strong>{person.name}</strong>
                  <p>{person.title}</p>
                  <span>{person.company}</span>
                  <small>{person.mutual} mutual connections</small>
                  <button
                    className={`btn block ${person.status === 'connected' ? 'secondary' : 'primary'}`}
                    onClick={() => handleConnect(person.id)}
                  >
                    {person.status === 'idle' && (
                      <>
                        <FiUserPlus /> Connect
                      </>
                    )}
                    {person.status === 'pending' && 'Requested'}
                    {person.status === 'connected' && (
                      <>
                        <FiMessageCircle /> Message
                      </>
                    )}
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="card groups-card">
            <header>
              <div>
                <p className="eyebrow">Groups for you</p>
                <h3>Continue the conversation</h3>
              </div>
              <button className="link">See all</button>
            </header>
            <ul>
              {recommendedGroups.map((group) => (
                <li key={group.id}>
                  <img src={group.avatar} alt={group.name} />
                  <div>
                    <strong>{group.name}</strong>
                    <span>{group.members}</span>
                    <small>{group.category}</small>
                  </div>
                  <button className="btn secondary">Join</button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default MyNetwork

