import axios from "axios";
const BaseUrl = "https://reqres.in/api/";

const errorResponse = (message) => {
  const errorObject = {
    error: true,
    message,
    data: [],
  };
  return errorObject;
};

export const RequestPost = async (url, data) => {
  return await axios({
    url: BaseUrl + url,
    method: "POST",
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return errorResponse(error.toString());
    });
};

export const RequestGet = async (url) => {
  return await axios({
    url: BaseUrl + url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return errorResponse(error.toString());
    });
};

export const getDataIndex = (blogData, blogId) => {
  const postIndex = blogData.findIndex((post) => post.id === blogId);
  return postIndex;
};
