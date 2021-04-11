import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-update-a3a19-default-rtdb.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
