import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";

interface User {
  id: string | number;
  name: string;
  age: number;
}

interface UserState {
  users: User[];
}

interface RootState {
  userInfo: UserState;
}

const UserView = () => {
  const users = useSelector((state: RootState) => state.userInfo.users);

  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    dispatch(deleteUser(index));
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-400 text-sm">No users added yet.</p>
      ) : (
        users.map((user, index) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 border-l-4 border-blue-500"
          >
            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">Age: {user.age}</p>
            </div>

            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default UserView;
