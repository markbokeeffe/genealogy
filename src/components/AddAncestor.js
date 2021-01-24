import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { addAncestor } from '../redux/actions';

export const AddAncestor = ({ addAncestor }) => {
    const [ firstName, updateFirstName ] = useState('');
    const [ lastName, updateLastName ] = useState('');
    const [ relationship, setRelationship ] = useState('');
    const handleClick = () => {
        updateFirstName('');
        updateLastName('');
        addAncestor({ firstName, lastName});
    };
    return (
        <div>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Relationship</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={relationship}
                onChange={e => setRelationship(e.target.value)}
                >
                    <MenuItem value={'parent'}>Parent</MenuItem>
                    <MenuItem value={'grandparent'}>Grandparent</MenuItem>
                    <MenuItem value={'greatGrandparent'}>Great Grandparent</MenuItem>
                    <MenuItem value={'greatGreatGrandparent'}>Great Great Grandparent</MenuItem>
                </Select>
            </FormControl>
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