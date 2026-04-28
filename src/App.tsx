import "./App.css";
import UserInput from "./components/UserInput";
import UserView from "./components/UserView";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-10 gap-10">
      <UserInput />
      <UserView />
    </div>
  );
};

export default App;
