import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'

export const create = async (data) => {
    const response = await axios.post('/',data)
    return response
}

export const get = async (parentId) => {
    const response = await axios.get(`/${parentId}`)
    return response.data
}