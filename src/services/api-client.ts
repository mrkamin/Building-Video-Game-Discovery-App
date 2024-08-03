import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "39551233b3154dd6931428479826101b",
  },
});
