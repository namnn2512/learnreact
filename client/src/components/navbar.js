import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

    render() {
        // const isActiveFunc = (match, location) =>{
        //     var that = this;
        //     console.log(match);
        //     console.log(that);
        //     return false;
        // }
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-default-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink exact to="/" className="navbar-brand" activeClassName="active">Trang chủ</NavLink>
                    </div>
                    <div className="navbar-collapse collapse navbar-default-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/phim/duyetphim" activeClassName="active">Phim</NavLink></li>
                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
            <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="javascript:void(0)">Action</a></li>
                                    <li><a href="javascript:void(0)">Another action</a></li>
                                    <li><a href="javascript:void(0)">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-header">Dropdown header</li>
                                    <li><a href="javascript:void(0)">Separated link</a></li>
                                    <li><a href="javascript:void(0)">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control col-md-8" placeholder="Search" />
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="javascript:void(0)">Link</a></li>
                            <li className="dropdown">
                                <a href="javascript:void(0)" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
            <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="javascript:void(0)">Action</a></li>
                                    <li><a href="javascript:void(0)">Another action</a></li>
                                    <li><a href="javascript:void(0)">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="javascript:void(0)">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar