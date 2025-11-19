import './App.css'
import Feed from './components/Feed'
import Footer from './components/Footer'
import Hero from './components/Hero'
import JobsSpotlight from './components/JobsSpotlight'
import Navbar from './components/Navbar'
import MyNetwork from './components/MyNetwork'
import PostComposer from './components/PostComposer'
import Sidebar from './components/Sidebar'
import StatsStrip from './components/StatsStrip'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <MyNetwork />
        <section className="dashboard">
          <div className="dashboard__main">
            <StatsStrip />
            <PostComposer />
            <Feed />
          </div>
          <Sidebar />
        </section>
        <JobsSpotlight />
      </main>
      <Footer />
    </div>
  )
}

export default App
