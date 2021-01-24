import React, { useState } from 'react';
import { connect } from 'react-redux';
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
            <div>
                <label>First Name</label>
                <input value={firstName} onChange={e => updateFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input value={lastName} onChange={e => updateLastName(e.target.value)} />
            </div>
            <button onClick={handleClick}>Add Ancestor</button>
        </div>
    );
}

export default connect(
    null,
    { addAncestor }
)(AddAncestor);