import "./App.css";
import { useSelector } from "react-redux";
import { signInAction } from "./reducks/users/actions";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <div className="App">
      <button
        onClick={() => dispatch(signInAction({ uid: "1", username: "Ayumi" }))}
      >
        Sign In
      </button>
    </div>
  );
}

export default App;
