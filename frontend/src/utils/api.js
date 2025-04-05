// Determine if we're in production (deployed on Vercel)
const isProduction = window.location.hostname !== 'localhost';

// Get the API base URL based on environment
const API_BASE_URL = isProduction 
  ? process.env.REACT_APP_PRODUCTION_API_URL || '/api'
  : process.env.REACT_APP_API_URL || 'http://localhost:5002';

// Function to get the full API URL
export const getApiUrl = (endpoint) => {
  // Remove leading slash from endpoint if it exists
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};

export default API_BASE_URL; 