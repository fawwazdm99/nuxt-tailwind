import { getDataIndex } from "@/helper/";
export const state = () => ({
  blogData: [],
});
export const mutations = {
  setBlogData(state, data) {
    state.blogData = data;
  },
  addBlogData(state, data) {
    const newBlogData = state.blogData;
    newBlogData.push(data);
    state.blogData = newBlogData;
  },
  addCommentData(state, { blogId, id, name, email, body }) {
    const postIndex = getDataIndex(state.blogData, blogId);
    const newComment = {
      id,
      name,
      email,
      body,
    };
    state.blogData[postIndex].comments.unshift(newComment);
  },
  deleteCommentData(state, { postIndex, index }) {
    state.blogData[postIndex].comments.splice(index, 1);
  },
};
export const actions = {
  async getBlogData({ commit }) {
    const blogArray = [];

    let postData = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    postData = postData.data;
    for (let index = 0; index < 5; index++) {
      const blogData = {
        id: "",
        title: "",
        body: "",
        comments: [],
      };

      blogData.id = postData[index].id;
      blogData.title = postData[index].title;
      blogData.body = postData[index].body;
      const indexParams = index + 1;
      let commentData = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/posts/" +
          indexParams +
          "/comments"
      );
      commentData = commentData.data;
      blogData.comments = commentData;
      blogArray.push(blogData);
    }

    commit("setBlogData", blogArray);
  },
  deleteComment({ state, commit }, { index, blogId }) {
    const postIndex = getDataIndex(state.blogData, blogId);
    commit("deleteCommentData", { postIndex, index });
  },
};
