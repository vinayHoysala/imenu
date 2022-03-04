import React from 'react'

import React from "react";
import axios from "axios";

function Sagar() {
  const [users, setUser] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      // console.log(result);
      setUser(result.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map(user => (<h4 key={user.id}>{user.name}</h4>))}
    </div>
  );
}

export default Sagar;