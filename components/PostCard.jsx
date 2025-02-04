const PostCard = ({ title, body }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h1 className="text-lg font-semibold">Title : {title}</h1>
      <p className="text-sm text-gray-700">Body : {body}</p>
    </div>
  );
};

export default PostCard;
