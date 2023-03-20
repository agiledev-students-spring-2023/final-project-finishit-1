import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './Header'
import Menu from './Menu'
import Create from './Create'
import Login from './Login'
import Reset from './Reset'
import ConfirmP from './ConfirmP'
import Settings from './Settings'
import NewTask from './NewTask'
import EditTask from './EditTask'

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* a route for the home page */}
            <Route path="/" element={<Home />} />

            {/* a route to see a list of all messages */}

            <Route path="/menu" element={<Menu />} />

            {/* a route to see create account page */}
            <Route path="/create" element={<Create />} />

            {/* a route to see login page */}
            <Route path="/login" element={<Login />} />

            {/* a route to see reset page */}
            <Route path="/reset" element={<Reset />} />

            {/* a route to see confirm password page */}
            <Route path="/confirmp" element={<ConfirmP />} />

            {/* a route to see confirm password page */}
            <Route path="/settings" element={<Settings />} />
            
            <Route path="/newtask" element={<NewTask />} />
            <Route path="/edittask" element={<EditTask />} />

          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App