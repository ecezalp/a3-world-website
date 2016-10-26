export default function algorithmsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_ALGORITHMS':
      return action.payload.algoritms;
    default:
      return state;
  }
};