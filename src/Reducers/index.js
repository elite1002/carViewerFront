import { crudStudent } from './CrudStudent.reducer.js';
import { viewStudents } from './ViewStudents.reducer.js';
import { User } from './User.reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crudStudent,
  viewStudents,
  User
});

export default rootReducer;
