import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { setTheme } from "./Redux/slice/themeSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("myapptheme");
    if (theme) {
      //@ts-ignore
      dispatch(setTheme({ theme: theme }));
    } else {
      dispatch(setTheme({ theme: "Light" }));
    }
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
