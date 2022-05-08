import axiosClient from "./axiosClient";
const departmentApi = {
  getAll() {
    const url = "/department";
    return axiosClient.get(url);
  },
  get(id: number) {
    const url = `/department/${id}`;
    return axiosClient.get(url);
  },
  add(data: any) {
    const url = "/department";
    return axiosClient.post(url, data);
  },
  update(data: any) {
    const url = `/department/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id: number) {
    const url = `department/${id}`;
    return axiosClient.delete(url);
  },
};
export default departmentApi;
