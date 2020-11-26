import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems'
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        }
    }
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <Link to='/' className='navbar-logo'>
                    <div className='image-logo'></div>
                    <h3 className='nav-title'>ExerciseTracker</h3>
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    <div className={`menu-burger ${this.state.clicked ? 'menu-times' : 'menu-bars'}`}></div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className='navbar-item' key={index}>
                                <Link className={item.cName} to={item.url} onClick={this.handleClick}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;