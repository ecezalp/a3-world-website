export default function projectsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_PROJECTS':
      return action.payload;
    default:
      return state;
  }
};