import { allConstants } from '../Constants/AllConstants';

const initialState = { 
    userEmail: 'test@gmail.com',
    userPwd: '1x9d00E93I@sdf$A',
    isLoggedIn: false
};

export function User(state = initialState, action) {

  switch (action.type) {
    case allConstants.LOGIN:
      return {
          ...state,
          isLoggedIn: true,
      };
    case allConstants.INITIALIZE: 
      return {
          ...state,
          isLoggedIn: false,
      }
    case allConstants.ADD_PLAYER_SUCCESS:
      return { student: action.student};
    case allConstants.ADD_PLAYER_FAILURE:
      return { student: {} };
    default:
      return state
  }

}
