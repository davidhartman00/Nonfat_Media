import React, {Component} from 'react';

const NavItem = props =>{
    const pageURI = window.location.pathname + window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active": "nav-item";
    const aClassName = "nav-link";
    return(
        <li className={liClassName}>
            <a href={props.path} className={aClassName} >
            {props.name}
            {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ""}
            </a>
        </li>
    );
}

class NavDropdown extends Component{
    constructor(props){
        super(props)
        this.state = {isToggledOn : false}
    }
    
    showDropdown(e){
        e.preventDefault()
        this.setState(prevState => ({
          isToggledOn : !prevState.isToggledOn  
        }))
    }

    render(){
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggledOn ? " show" : "")
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                onClick={e=>{this.showDropdown(e)}}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

class Navigation extends Component{
    constructor(props){
        super(props)
        this.state = {showNavMobile : false}
    }
    openHamburger(e){
        e.preventDefault()
        this.setState(prevState => ({
            showNavMobile: !prevState.showNavMobile
        })) 
    }
    render(){
        const classNavButtons = "collapse navbar-collapse" + (this.state.showNavMobile ? " show": "") 
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light nfm-navbar">
                <a className="navbar-brand nfm-brand" href="/">Nonfat Media</a>
                <button onClick={e => {this.openHamburger(e)}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classNavButtons} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/" name="Home"/>
                        <NavItem path="/page2" name="Page 2"/>
                        <NavDropdown name="Sort">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </NavDropdown>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;