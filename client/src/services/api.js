import axios from "axios"

const API_URL = 'http://localhost:8000'

// common for all api call
const API_EMAIL = async (urlObject, payload) => {
    return await axios({
        method: urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}`,
        data: payload
    })
}

export default API_EMAIL