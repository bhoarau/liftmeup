import axios from "axios";

export default {
  // Saves a family member to the database
  saveNewImage: function (NewImageData) {
    return axios.post("/api/image", newImageData)
  },
  // Gets a family member with the given id
  findOneImage: function (id) {
    return axios.get("/api/image/" + id);
  },
};