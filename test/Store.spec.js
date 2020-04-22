// import Vuex from "vuex";
// import axios from "@nuxtjs/axios";
import { mutations } from "@/store/blog";
// const $storeInstance = new Vuex.Store(store);

const blogData = [
  {
    id: "blog",
    title: "title ",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    comments: [],
    editingTitle: false,
    editingBody: false,
  },
];

describe("Vuex store: blog", () => {
  it("setBlogData harus mengubah nilai state blogData", () => {
    const dummyState = {
      blogData: [],
    };
    mutations.setBlogData(dummyState, blogData);
    expect(dummyState.blogData).toEqual(blogData);
  });

  //   it("getBlogData harus mendapatkan semua blogData", () => {
  //     const mockFetchPromise = Promise.resolve({
  //       data: blogData,
  //     });
  //     axios.get = jest.fn().mockResolvedValue(mockFetchPromise);
  //     $storeInstance.dispatch("getBlogData");
  //     // mengecek perubahan state
  //     expect($storeInstance.state.blogData).toEqual(blogData);
  //   });
});
