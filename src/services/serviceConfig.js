import axios from "axios";

export async function get(api, params = {}) {
  return await axios.get(api, { params: params });
}

export async function add(api, payload) {
  return await axios.post(api, payload);
}

export async function update(api, payload) {
  return await axios.put(api, payload);
}

export async function del(api, body = {}) {
  return await axios.delete(api, { data: body });
}
