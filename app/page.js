"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchUsers, fetchPosts } from "../lib/api";
import {
  setUsers,
  setSelectedUserPosts,
  setLoading,
  setError,
} from "../redux/Slice/userSlice";
import UserCard from "../components/UserCard";
import PostCard from "../components/PostCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const { users, selectedUserPosts, loading, error } = useSelector(
    (state) => state.users
  );
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      dispatch(setLoading(true));
      try {
        const users = await fetchUsers();
        dispatch(setUsers(users));
        if (users.length > 0) {
          dispatch(setSelectedUserPosts(users[0].id));
        }
      } catch (err) {
        dispatch(setError("Failed to load users."));
      } finally {
        dispatch(setLoading(false));
      }
    };
    getUsers();
  }, [dispatch]);

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery(
    ["posts", selectedUserPosts, page],
    () => fetchPosts(selectedUserPosts, page),
    { enabled: !!selectedUserPosts }
  );

  const handleUserSelect = (id) => {
    dispatch(setSelectedUserPosts(id));
    setPage(1);
  };

  return (
    <div className="p-6 lg:p-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Users & Posts Dashboard
      </h1>

      {loading && (
        <div className="text-center py-4 text-lg text-blue-500">
          Loading users...
        </div>
      )}

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {filteredUsers?.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
            company={user.company.name}
            onClick={handleUserSelect}
          />
        ))}
      </div>

      {selectedUserPosts && postsLoading && (
        <div className="text-center py-4 text-lg text-blue-500">
          Loading posts...
        </div>
      )}

      {selectedUserPosts && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts</h2>
          {postsError ? (
            <div className="text-center text-lg text-red-500 py-4">
              Error loading posts.
            </div>
          ) : posts?.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} title={post.title} body={post.body} />
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                  disabled={page === 1}
                >
                  Previous
                </button>

                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                  disabled={posts.length === 0}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-lg text-gray-500 py-4">
              No posts available.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
