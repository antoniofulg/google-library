import api from './api'

export const findBooks = async (params) => {
  return (await api.get('volumes', { params })).data
}
