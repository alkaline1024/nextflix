const API_BASE_URL = 'http://localhost:3000';

export const fetchHello = async () => {
  const response = await fetch(`${API_BASE_URL}/`);
  return response.text();
};