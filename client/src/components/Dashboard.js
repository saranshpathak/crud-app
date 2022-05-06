import React, { useState ,useEffect} from "react";
import Axios from 'axios';
import "../components/Dashboard.css";
const Dashboard = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phn, setphn] = useState("");

    useEffect(()=>{
      Axios.get("/getUsers").then((response)=>{
        console.log(response);
          setListOfUsers(response.data);
      }).catch((err)=>{
        console.log(err);
      });
    },
      []
    );
  const createUser = () => {  
  Axios.post("http://localhost:8000/addFriend", {
    name,
    age,
    phn,
  }).then((response) => {
    setListOfUsers([
      ...listOfUsers,
      {
        name,
        age,
        phn,
      },
    ]);
  });
};
const editFriend=(id)=>{

  const newAge = prompt("Enter new Age");
  Axios.put("http://localhost:8000/update",{
    newAge: newAge,
    id:id,
  }).then(()=>{
    setListOfUsers(listOfUsers.map((val)=>{
      return val._id===id ? {_id:id,name:val.name,age:newAge}:val;
    }));

  }).catch((err)=>{
    console.log(err);
  })
};
const removeFriend =(id)=>{
Axios.delete(`http://localhost:8000/delete/${id}`).then(()=>{
  setListOfUsers(listOfUsers.filter((val)=>{
      return val._id!==id;
  })
  );
})
};
  return (
    <div className="container">
      <div className="upperContainer">
         {
        listOfUsers.map((user,key) => (
          <div className="DataBox">
            <div className="dataContainer" key ={key}>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>phn: {user.phn}</h1>
            </div>
            <div className="buttons">
              <button id="btn1" onClick={()=>{editFriend(user._id)}}>Edit</button>
              <button id="btn2" onClick={()=>{removeFriend(user._id)}}>Remove</button>
            </div>
            </div>
        ))} 

      </div>

      <div className="lowerContainer">
        <h1>
          Add new Friends
        </h1>
        <form action="post">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="phn..."
          onChange={(event) => {
            setphn(event.target.value);
          }}
        />
        <button id="btn"onClick={createUser}> Create User </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
