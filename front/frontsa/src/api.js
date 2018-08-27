import Auth from './router/auth'
import axios from 'axios'

class Api {
  call (requestType, url, data = null) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, data)
        .then(response => {
          resolve(response)
        })
        .catch(({response}) => {
          if (response.status === 401) {
            Auth.logout()
          }

          reject(response)
        })
    })
  }
}

export default Api
