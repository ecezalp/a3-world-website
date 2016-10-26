export default function reviewsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_REVIEWS':
      return action.payload.reviews;
    default:
      return state;
  }
};