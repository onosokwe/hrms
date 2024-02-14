import React from "react";

function Nav() {
    return (        
        <header className="dash-toolbar">
            <div className="menu-toggle"><i className="fa fa-bars"></i></div>
            <div className="searchbox-toggle"><i className="fa fa-search"></i></div>
            <form className="searchbox">
                <button type="button" className="searchbox-toggle"> <i className="fa fa-arrow-left"></i> </button>
                <button type="button" className="searchbox-submit"> <i className="fa fa-search"></i> </button>
                <input type="text" className="searchbox-input" placeholder="type to search" />
            </form>
            <div className="tools">
                <a href="/password" className="tools-item">
                    <i className="fa fa-cog"></i>
                </a>
                <div className="dropdown tools-item">
                    <a href="/" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                        <a className="dropdown-item" href="/profile">Profile</a>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Nav;



