import axios from "axios";

const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(USERS_API);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
};

export const fetchPosts = async (userId, page = 1) => {
  try {
    const response = await axios.get(POSTS_API, {
      params: {
        userId,
        _page: page,
        _limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts.");
  }
};
