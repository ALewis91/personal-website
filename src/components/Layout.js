import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';

class Layout extends Component {
   
    render() {
        return(
            <Aux>
                <section id="section-about" style={{height: "1000px"}}>
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

export default Layout;