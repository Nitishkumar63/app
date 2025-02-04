import axios from "axios";

const USERS_API = process.env.NEXT_PUBLIC_API_URL_USER;
const POSTS_API = process.env.NEXT_PUBLIC_API_URL_POST;

export const fetchUsers = async () => {
  try {
    const response = await axios.get(USERS_API);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
};

export const fetchPosts = async (userId, page = 1, limit = 6) => {
  try {
    const response = await axios.get(
      `${POSTS_API}?userId=${userId}&_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts.");
  }
};
