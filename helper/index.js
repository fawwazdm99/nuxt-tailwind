export const getDataIndex = (blogData, blogId) => {
  const postIndex = blogData.findIndex((post) => post.id.toString() === blogId);
  return postIndex;
};
