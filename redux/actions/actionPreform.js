import * as actionTypes from './actionsConst'

export const postAction = (actionState, event = null) => {
    switch (actionState) {
        case actionTypes.ADD_POST:
            return async (dispatch) => {
                return dispatch({type: actionTypes.ADD_POST, data: event})
            }
        case actionTypes.DELETE_POST:
            return async (dispatch) => {
                return dispatch({type: actionTypes.DELETE_POST, id: event})
            }
        case actionTypes.EDIT_POST:
            return async (dispatch) => {
                return dispatch({type: actionTypes.EDIT_POST, id: event})
            }
        case actionTypes.UPDATE_POST:
            return async (dispatch) => {
                return dispatch({type: actionTypes.UPDATE_POST, id: event.id ,data: event.data})
            }
        case actionTypes.SET_ACCESS_TOKEN:
            return async (dispatch) => {
                return dispatch({type: actionTypes.SET_ACCESS_TOKEN, data: event})
            }
    }
}