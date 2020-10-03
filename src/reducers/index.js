import {combineReducers} from 'redux';
import counterReducer from './counter';
import logedReducer from './logedReducer';


const allReducer = combineReducers({
    counter : counterReducer,//redux dev toolsda bu isimle
    isLogged : logedReducer
});

export default allReducer;