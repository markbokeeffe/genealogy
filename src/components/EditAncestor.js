import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEditDialogOpen, updateAncestor } from '../redux/actions';
import { getEditDialogIsOpen } from '../redux/selectors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export const EditAncestor = ({ setEditDialogOpen, isEditDialogOpen, selectedAncestor, updateAncestor }) => {
    const [ firstName, setFirstName ] = useState(selectedAncestor.firstName);
    const [ lastName, setLastName ] = useState(selectedAncestor.lastName)
    const handleClose = () => {
        setEditDialogOpen({ isOpen: false });
    }

    const handleUpdate = () => {
        updateAncestor({ firstName, lastName, id: selectedAncestor.id });
        handleClose();
    }

    return (
        <Dialog open={isEditDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
            <div>
                <label>First Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    )
};

export const mapStateToProps = state => {
    const isEditDialogOpen = getEditDialogIsOpen(state.dialogs);
    return { isEditDialogOpen };
};

export default connect(mapStateToProps, { setEditDialogOpen, updateAncestor })(EditAncestor);