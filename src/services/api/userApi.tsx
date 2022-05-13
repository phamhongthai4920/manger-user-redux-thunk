import { user } from '../../features/users/usersSlice/declareUser'
import axiosClient from './axiosClient'

const tableApi = {
    getAll() {
        const url = '/users'
        return axiosClient.get(url)
    },
    get(id:number) {
        const url = `/users/${id}`
        return axiosClient.get(url)
    },
    add(data:user) {
        const url = '/usesrs'
        return axiosClient.post(url, data)
    },
    update(data: user) {
        const url = `/users/${data.id}`
        return axiosClient.patch(url, data)
    },
    remove(id:number) {
         const url = `users/${id}`
        return  axiosClient.delete(url)
       
    },
}
export default tableApi;