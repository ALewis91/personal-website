import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import Aux from '../../../hoc/Aux/Aux';

const navigationItems = ( props ) => (
    <Aux>
        <ul className={classes.NavigationItems}>
            {props.navItems}
        </ul>
    </Aux>
);

export default navigationItems;