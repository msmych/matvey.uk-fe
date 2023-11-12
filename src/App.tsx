import avatarImage from './assets/avatar.png'
import './App.css'
import Links from './link/Links'

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
          <Links />
        </p>
      </div>
    </>
  )
}

export default App
