// api.js

const API_URL = 'https://your-api-url.com/api/';

async function fetchTasks() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}tasks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  const data = await response.json();
  return data;
}
