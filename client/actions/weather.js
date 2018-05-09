import request from 'superagent'

export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
//actions
export const requestWeather = () => {
  return {
    type: REQUEST_WEATHER
  }
}

export const receiveWeather = () => {
  return {
    type: RECEIVE_WEATHER,
    weather
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

// api calls
export function getWeather(weather) {
  return (dispatch) => {
    dispatch(requestWeather())
    return request
    .get('/api/v1/weather')
    .then(res => {
      dispatch(receiveWeather(res.body))
    })
  }
}
