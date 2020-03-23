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
    async (resolve, reject) => {
      let current = 0
      while (current < MAX_ATTEMPTS) {
        console.log(`Post attempt number ${current + 1}`)
        try {
          const { data } = await axios.get(backURL)
          console.log(`Attempt number ${current + 1} was successfull`)
          resolve(data)
          break
        } catch (err) {
          console.log(`Attempt number ${current + 1} failed.`)
          current += 1
          if (current == MAX_ATTEMPTS) reject(err)
        }
      }
    },
  )

  export default getData