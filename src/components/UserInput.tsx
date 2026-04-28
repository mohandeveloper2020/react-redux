import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
// import type { AppDispatch } from "../app/store";

const UserInput = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formInput.name.trim() || !formInput.age.trim()) return;
    dispatch(
      addUser({ id: Date.now(), name: formInput.name, age: formInput.age })
    );
    setFormInput({ name: "", age: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm flex flex-col gap-6 sticky top-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800">User Details</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="age" className="text-sm font-medium text-gray-600">
          Age
        </label>
        <input
          id="age"
          type="number"
          value={formInput.age}
          onChange={(e) => setFormInput({ ...formInput, age: e.target.value })}
          placeholder="Enter your age"
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition"
      >
        Add User
      </button>
    </form>
  );
};

export default UserInput;
