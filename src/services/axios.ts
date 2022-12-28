import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: "Bearer " + process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  }
});

//search/issues?q=${texto}%20repo:l-marcel/ignite-03-reactjs-2022-github-blog