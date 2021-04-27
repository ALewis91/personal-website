import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <Header></Header>
                <section style={{height: "1000px"}}>
                    About
                </section>
                <section style={{height: "1000px"}}>
                    Resume
                </section>
                <section style={{height: "1000px"}}>
                    Projects
                </section>
                <section style={{height: "1000px"}}>
                    Contact
                </section>
            </Aux>
        );
    }
}

export default Layout;