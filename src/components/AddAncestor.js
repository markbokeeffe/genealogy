import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addAncestor } from '../redux/actions';

export const AddAncestor = ({ addAncestor }) => {
    const [ firstName, updateFirstName ] = useState('');
    const [ lastName, updateLastName ] = useState('');
    const handleClick = () => {
        updateFirstName('');
        updateLastName('');
        addAncestor({ firstName, lastName});
    };
    return (
        <div>
            <TextField id="standard-basic" label="First Name" value={firstName} onChange={e => updateFirstName(e.target.value)}/>
            <TextField id="standard-basic" label="Last Name" value={lastName} onChange={e => updateLastName(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Add Ancestor
            </Button>
        </div>
    );
}

export default connect(
    null,
    { addAncestor }
)(AddAncestor);