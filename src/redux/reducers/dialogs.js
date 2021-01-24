import { EDIT_DIALOG_OPEN } from '../actionTypes';

export const initialState = {
    editDialog: {
        isOpen: false
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case EDIT_DIALOG_OPEN: {
            return {
                ...state,
                editDialog: {
                    isOpen: action.payload.isOpen
                }
            }
        }
        default: {
            return state
        }
    }
}

