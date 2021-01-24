import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    title: {
        fontSize: '14px'
    }
});

export const Title = ({classes}) => (<h1 classNames={classes.title}>Ancestors</h1>);

export default withStyles(styles)(Title);
