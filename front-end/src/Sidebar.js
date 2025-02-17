import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css'

/**
 * A React component that represents the Menu page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Sidebar = props => (
    <Menu className="bm-item-list">
        <Link to="/login" className="bm-item" onClick={() => { props.isOpen = false }}><h4>Log In</h4></Link>
        <Link to="/" className="bm-item" onClick={() => { props.isOpen = false }}><h4>Main</h4></Link>
        <Link to="/badges" className="bm-item" onClick={() => { props.isOpen = false }}><h4>Badges</h4></Link>
        <Link to="/settings" className="bm-item" onClick={() => { props.isOpen = false }}><h4>Settings</h4></Link>
    </Menu>

)

// make this component available to be imported into any other file
export default Sidebar
