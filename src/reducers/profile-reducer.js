import {
  SAVE_PROFILE,
  CHANGE_AVA,
  DELETE_AVA,
  CHANGE_PROFILE,
} from "../actions/profile-action";
import { loadedProfiles } from "../service/saveProfiles";

const loadProfiles = loadedProfiles();

let initialState = {
  profiles: loadProfiles ? loadProfiles : [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.concat([
          {
            userId: state.profiles.length + 1,
          },
        ]),
      };

    case CHANGE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile) => {
          if (profile.userId == action.payload.user.userId) {
            return {
              ...profile,
              name: action.payload.user.name,
              lastname: action.payload.user.lastname,
              phone: action.payload.user.phone,
              email: action.payload.user.email,
            };
          }
          return profile;
        }),
      };

    case CHANGE_AVA:
      return {
        ...state,
        profiles: state.profiles.map((profile) => {
          if (profile.userId == action.payload.userId) {
            return {
              ...profile,
              avatar: action.payload.avatar,
            };
          }
          return profile;
        }),
      };

    case DELETE_AVA:
      return {
        ...state,
        profiles: state.profiles.map((profile) => {
          if (profile.userId == action.payload.userId) {
            return {
              ...profile,
              avatar: null,
            };
          }
          return profile;
        }),
      };

    default:
      return state;
  }
};

export default ProfileReducer;
