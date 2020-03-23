/* eslint-disable no-async-promise-executor */
import axios from 'axios'

const backURL = 'https://fathomless-badlands-67966.herokuapp.com/v1.0.0/historic'

const MAX_ATTEMPTS = 3

/**
 * example usage
 * import getData from '../services/service.js'
 * 
 * const historic = await getData()
 */
const getData = () =>
  new Promise(
    //TODO put in a local cache no need to do another request to the server, most probably the data wont change
    async (resolve, reject) => {
      let current = 0
      while (current < MAX_ATTEMPTS) {
        try {
          const { data } = await axios.get(backURL)
          resolve(data)
          break
        } catch (err) {
          current += 1
          if (current == MAX_ATTEMPTS) reject(err)
        }
      }
    },
  )

  export default getData