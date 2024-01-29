import { useState } from "react";
const User = () => {
  const [user, setUser] = useState("");
  const handleClick = () => {
    setUser("Hoàng An");
  };

  return (
    <div>
      <h1>Thông tin user: {user}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default User;

//Kế thừa: React.Component
