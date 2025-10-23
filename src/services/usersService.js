import axios from 'axios';

const API = 'https://fakestoreapi.com';

export async function getUserById(id) {
  const { data } = await axios.get(`${API}/users/${id}`);
  return data;
}

export async function createUser(user) {
  const { data } = await axios.post(`${API}/users`, user);
  return data;
}


