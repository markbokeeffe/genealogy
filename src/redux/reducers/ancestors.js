import { ADD_ANCESTOR, UPDATE_ANCESTOR, DELETE_ANCESTOR } from '../actionTypes';

const initialState = {
    ancestors: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ANCESTOR: {
            const { id, firstName, lastName } = action.payload;
            const ancestor = {
                firstName, lastName, id
            }
            return {
                ancestors: [...state.ancestors, ancestor]
            }
        }
        case UPDATE_ANCESTOR: {
            const updatedAncestors = state.ancestors.map(({ id, firstName, lastName })=> {
                if(id === action.payload.id) {
                    return {
                        id,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName
                    }
                }
                return { id, firstName, lastName };
            });
            return {
                ancestors: updatedAncestors
            }
        }
        case DELETE_ANCESTOR: {
            return { 
                ancestors: state.ancestors.filter(({ id }) => {
                    return id !== action.payload.id
                })
            }    
        }
        default:
            return state;
    } 
};