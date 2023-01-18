import { LOAD_PROFILES, ADD_PROFILE } from "../actions/user.action";
import Profile from '../../Models/Profile'

const initialState = {
  profiles: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      const newProfile = new Profile(
        Date.now(),
        action.payload.name,
        action.payload.surname,
        action.payload.contact,
        action.payload.profilePhoto,
      );
      return {
        ...state,
        profiles: state.profiles.concat(newProfile),
      };

    case LOAD_PROFILES:
      return {
        ...state,
        profiles: action.profiles.map(
          (item) => new Profile(item.id.toString(), item.name, item.surname, item.contact, item.profilePhoto)
        )
      }
    default:
      return state;
  }
};

export default UserReducer