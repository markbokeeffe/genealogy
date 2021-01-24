import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAncestors, getEditDialogIsOpen } from '../redux/selectors';
import { deleteAncestor, setEditDialogOpen, getData } from '../redux/actions';
import EditAncestor from './EditAncestor';

export const ViewAncestors = ({ ancestors, isEditDialogOpen, deleteAncestor, setEditDialogOpen, getData }) => {
    const [ selectedAncestor, setSelectedAncestor ] = useState(null);

    useEffect(() => {
        getData();
    });
    
    const handleEdit = (id, firstName, lastName) => {
        console.log('Handle Edit', id);
        setSelectedAncestor({ id, firstName, lastName });
        setEditDialogOpen({ isOpen: !isEditDialogOpen });
    }

    const deleteEntry = id => {
        console.log('Delete', id);
        deleteAncestor({id});
    }

    return(
        <>
            {ancestors.length>0 
                ? <ul>
                    { ancestors.map(({ id, firstName, lastName }) => {
                        return (
                            <li key={id}>
                                {`${firstName} ${lastName}`}
                                <button onClick={() => handleEdit(id, firstName, lastName)}>Edit</button>
                                <button onClick={() => deleteEntry(id)}>Delete</button>
                            </li>);
                    }) }
                </ul>
                : <p>No ancestors have been added.</p>
            }
            {isEditDialogOpen && <EditAncestor selectedAncestor={selectedAncestor} />}
        </>
    )
};

export const mapStateToProps = state => {
    const ancestors = getAncestors(state.ancestors);
    const isEditDialogOpen = getEditDialogIsOpen(state.dialogs);
    return { ancestors, isEditDialogOpen };
};

export default connect(mapStateToProps, { deleteAncestor, setEditDialogOpen, getData })(ViewAncestors);

