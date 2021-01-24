import axios from 'axios';
import { ADD_ANCESTOR, UPDATE_ANCESTOR, DELETE_ANCESTOR, EDIT_DIALOG_OPEN, ALL_DATA } from './actionTypes';

let nextId = 0;

export const addAncestor = ( { firstName, lastName } ) => ({
    type: ADD_ANCESTOR,
    payload: { 
        firstName,
        lastName,
        id: ++nextId
    }
});

export const updateAncestor = ( { firstName, lastName, id } ) => ({
    type: UPDATE_ANCESTOR,
    payload: {
        firstName,
        lastName,
        id
    }
});

export const deleteAncestor = ( { id } ) => ({
    type: DELETE_ANCESTOR,
    payload: {
        id
    }
});

export const setEditDialogOpen = ( { isOpen }) => ({
    type: EDIT_DIALOG_OPEN,
    payload: {
        isOpen
    }
});

export const getData = () => {
    console.log('jere');
    const data = axios.get('api.openweathermap.org/data/2.5/weather?q=London&appid=a55b5d5fad5250100a1d340d13117a67');
    return {
        type: ALL_DATA,
        payload: data
    }
};