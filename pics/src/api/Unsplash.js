import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID h6mKROklm2x_BuEQDX-EOoCuP7tfjoPIXsu0zR4cAKM",
  },
});
