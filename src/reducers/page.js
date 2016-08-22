import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../actions/actions-page';

const initialState = {
  year: 2016,
  photos: [],
  fetching: false,
  error: ''
};

export default function page(state = initialState, action) {
  switch(action.type) {
  case  GET_PHOTOS_REQUEST:
    return { ...state, year: action.payload, fetching: true, error: '' };
  case GET_PHOTOS_SUCCESS:
    return { ...state, photos: action.payload, fetching: false, error: '' };
  case GET_PHOTOS_FAIL:
    return { ...state,  fetching: false, error: action.payload.message };
  default:
    return state;
  }
}
