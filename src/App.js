import logo from './logo.svg';
import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
    const [usersList, setUsersList] =useState([]);

    const addUserHandler = (userName, userAge) =>{
        setUsersList((prevUserList) => {
            return[...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}];
        });
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
