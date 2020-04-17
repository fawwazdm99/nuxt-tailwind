import { getDataIndex } from "@/helper/";
export const state = () => ({
  blogData: [],
});
export const mutations = {
  setBlogData(state, data) {
    state.blogData = data;
  },
  addBlogData(state, data) {
    state.blogData.unshift(data);
  },
  updateBlogTitle(state, { blogId, title }) {
    const postIndex = getDataIndex(state.blogData, blogId);
    state.blogData[postIndex].title = title;
  },
  updateBlogBody(state, { blogId, body }) {
    const postIndex = getDataIndex(state.blogData, blogId);
    state.blogData[postIndex].body = body;
  },
  editBlogTitle(state, blogId) {
    const postIndex = getDataIndex(state.blogData, blogId);
    state.blogData[postIndex].editingTitle = true;
  },
  doneEditBlogTitle(state, blogId) {
    const postIndex = getDataIndex(state.blogData, blogId);
    state.blogData[postIndex].editingTitle = false;
  },
  editBlogBody(state, blogId) {
    const postIndex = getDataIndex(state.blogData, blogId);
    state.blogData[postIndex].editingBody = false;
  },
  doneEditBlogBody(state, blogId) {
    const postIndex = getDataIndex(state.blogData, blogId);
    state.blogData[postIndex].editingBody = true;
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
  getBlogData({ commit }) {
    const blogArray = [];

    // let postData = await this.$axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );
    // postData = postData.data;
    for (let index = 0; index < 5; index++) {
      const blogData = {
        id: "blog" + index,
        title: "title " + index,
        body:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        comments: [],
        editingTitle: false,
        editingBody: false,
      };
      for (let index = 0; index < 4; index++) {
        const commentData = {
          id: "comment" + index,
          name: "member " + index,
          email: "member" + index + "@gmail.com",
          body:
            "It is a long established fact that a reader will be distracted by the readable content",
        };
        blogData.comments.push(commentData);
      }
      blogArray.push(blogData);
      //   const blogData = {
      //     id: "",
      //     title: "",
      //     body: "",
      //     comments: [],
      //   };

      //   blogData.id = postData[index].id;
      //   blogData.title = postData[index].title;
      //   blogData.body = postData[index].body;
      //   const indexParams = index + 1;
      //   let commentData = await this.$axios.get(
      //     "https://jsonplaceholder.typicode.com/posts/" +
      //       indexParams +
      //       "/comments"
      //   );
      //   commentData = commentData.data;
      //   blogData.comments = commentData;
      //   blogArray.push(blogData);
    }

    commit("setBlogData", blogArray);
  },
  deleteComment({ state, commit }, { index, blogId }) {
    const postIndex = getDataIndex(state.blogData, blogId);
    commit("deleteCommentData", { postIndex, index });
  },
};
