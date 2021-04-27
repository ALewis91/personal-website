import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import selfie from '../../assets/img/aaron_selfie.jpg';
import classes from './ContactCard.module.css';

class ContactCard extends Component {
    render() {
        return (
            <Aux>
                <div>
                <img className={classes.selfie} src={selfie} alt="Aaron selfie" />
                <h2>Aaron Lewis</h2>
                
                </div>
                <div>

                </div>
            </Aux>
        );
    }
}
export default ContactCard;