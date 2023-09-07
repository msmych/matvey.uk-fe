import avatarImage from './assets/avatar.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={avatarImage} className="logo" alt="Avatar" />
      </div>
      <h1>Matvey Smychkov</h1>
      <div className='card'>
        <p>
          Software engineer living in London
        </p>
        <p>
          <a href="https://t.me/msmych">Telegram</a>
          {' | '}
          <a href="https://www.instagram.com/matveysmychkov/">Instagram</a>
          {' | '}
          <a href="https://www.linkedin.com/in/matvey-smychkov-743b21175/">LinkedIn</a>
          {' | '}
          <a href="https://github.com/msmych">GitHub</a>
        </p>
      </div>
    </>
  )
}

export default App
