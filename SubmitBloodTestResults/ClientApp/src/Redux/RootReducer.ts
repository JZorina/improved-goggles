import { combineReducers } from 'redux';
import { Reducer as GeneralReducer } from './States/General';
import { Reducer as LabResultsReducer } from './States/LabResults';
const rootReducer = combineReducers({
  general: GeneralReducer,
  labResults: LabResultsReducer
})

export default rootReducer;
