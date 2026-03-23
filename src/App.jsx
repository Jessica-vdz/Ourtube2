
import './App.css'
import { Header } from './components/Header'
import { Sidenav } from './components/Sidenav'
import { Mediaplayer } from './components/Mediaplayer'
import { VideoInfo } from './components/VideoInfo'
import { CommentList } from './components/CommentList'
import { VideoSuggestions } from './components/VideoSuggestions'

function App() {

  return (
    <>
      <Header />
      <main>
        <Sidenav />
        <div className="content">
          <Mediaplayer />
          <VideoInfo />
          <CommentList />
        </div>
        <VideoSuggestions />
      </main>
    </>
  )
}

export default App
