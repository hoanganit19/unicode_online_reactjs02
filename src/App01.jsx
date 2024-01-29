import { getUser } from "./utils/users";

const App = () => {
  // console.log(getUser());
  return (
    <div>
      <h1>Xin chào anh em React</h1>
      {getUser()}
    </div>
  );
};

export default App;
