import accountReducer from '../screens/Account/reducer';
import poolReducer from '../screens/Pools/reducer';
import voteReducer from '../screens/Vote/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    account: accountReducer,
    pool: poolReducer,
    vote: voteReducer
});