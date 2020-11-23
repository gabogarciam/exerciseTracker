import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    handleClick(e) {
        const active = document.getElementsByClassName('active');
        active[0].classList.remove('active');
        e.target.parentElement.classList.add('active');
    }

    render() {
        return (
            <nav className="navbar">
                <ul className='navbar-nav'>
                    <li className='navbar-item active' onClick={this.handleClick}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar-item' onClick={this.handleClick}>
                        <Link to='/all-exercises'>Exercise List</Link>
                    </li>
                    <li className='navbar-item' onClick={this.handleClick}>
                        <Link to='/create-exercise'>Create Exercise</Link>
                    </li>
                    <li className='navbar-item' onClick={this.handleClick}>
                        <Link to='/create-user'>Create User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;