import axios from "axios";

export default {
  fetchApi: function () {
    return axios.get("https://api.hatchways.io/assessment/students");
  },
};