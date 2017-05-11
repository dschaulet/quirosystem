import React from 'react';
import './index.css';

export default class Toolbar extends React.Component {

    render() {
        return ( 
            <nav className="qs-toolbar">
                <span className="qs-app-name">
                    QuiroSystem
                </span>
                <a className="qs-lnk-github" href="https://github.com/leovant/quirosystem" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
            </nav>
        );
    }
}