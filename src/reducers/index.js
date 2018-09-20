import {
    combineReducers
} from 'redux'
import postReducers from './postReducers'
export default combineReducers({
    //出发dispatch之后先找reducers
    posts: postReducers
})
