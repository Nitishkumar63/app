const UserCard = ({ id, name, email, address, company, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all"
      onClick={() => onClick(id)}
    >
      <h1 className="text-lg font-semibold">Name : {name}</h1>
      <p className="text-sm text-gray-600">Email : {email}</p>
      <p className="text-xs text-gray-500">Address : {address}</p>
      <p className="text-xs text-gray-500 mt-2"> Company : {company}</p>
    </div>
  );
};

export default UserCard;
