export default function algorithmsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_ALGORITHMS':
      return action.payload;
    default:
      return state;
  }
};