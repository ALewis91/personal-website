import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';
import classes from './Profile.module.css';
import Navbar from './Navbar';
import Header from './Header';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    target: 'section-home',
                    text: 'home',
                },
                {
                    target: 'section-about',
                    text: 'about',
                },
                {
                    target: 'section-resume',
                    text: 'resume',
                },
                {
                    target: 'section-projects',
                    text: 'projects',
                },
                {
                    target: 'section-contact',
                    text: 'contact',
                }
            ]
        }
    }
    render() {
        
        return(
            <Aux>
                <Navbar className={classes.Navbar} navListStyle={classes.navItems} navItemStyle={classes.navItem} links={this.state.links}></Navbar>
                <Header></Header>
                <section id="section-about" style={{height: "1000px"}}>
                    <div className={classes.aboutBox}>

                    </div>
                </section>
                <section id="section-resume" style={{height: "1000px"}}>
                    Resume
                </section>
                <section id="section-projects" style={{height: "1000px"}}>
                    Projects
                </section>
                <section id="section-contact" style={{height: "1000px"}}>
                    Contact
                </section>
            </Aux>
        );
    }
}

export default Profile;