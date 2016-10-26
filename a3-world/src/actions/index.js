import {apiBaseLink} from "../constants"

export function fetchProjects(){
  const projects = fetch(`${apiBaseLink}/projects`).then(response => {
    return response.json()
  }).then(projectsPayload => {
    return projectsPayload
  })

  return {
    type: 'FETCH_PROJECTS',
    payload: projects
  }
}


export function fetchAlgorithms(){
  const algorithms = fetch(`${apiBaseLink}/algorithms`).then(response => {
    return response.json()
  }).then(algorithmsPayload => {
    return algorithmsPayload
  })

  return {
    type: 'FETCH_ALGORITHMS',
    payload: algorithms
  }
}


export function fetchReviews(){
  const reviews = fetch(`${apiBaseLink}/reviews`).then(response => {
    return response.json()
  }).then(reviewsPayload => {
    return reviewsPayload
  })

  return {
    type: 'FETCH_REVIEWS',
    payload: reviews
  }
}