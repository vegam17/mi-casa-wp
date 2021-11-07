import axios from 'axios'
import * as actions from '../actions/api'

const api = ({ dispatch }) => next => async action => {
    if(action.type !== actions.apiCall.type) return next(action) 

    const { url, method, data, onSuccess, onError } = action.payload

    try {
        const response = await axios.request({
            baseURL: wp.rest,
            url,
            method,
            data
        })
        dispatch(actions.apiCallSuccess(response.data.data))
        if(onSuccess) dispatch({ type: onSuccess, payload: response.data.data})
    } catch(e) {
        dispatch(actions.apiCallFailed(e))
        if(onError) dispatch({ type: onError, payload: e})
    }
}

export default api