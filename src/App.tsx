import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const arr1 = [
        {id: 1, title: "HTML&CSS1", isDone: true},
        {id: 2, title: "JS1", isDone: true},
        {id: 3, title: "ReactJS1", isDone: false},
        {id: 4, title: "Rest API1", isDone: false},
            ]
    const arr2 = [
        {id: 1, title: "HTML&CSS2", isDone: true},
        {id: 2, title: "JS2", isDone: true},
        {id: 3, title: "ReactJS2", isDone: false},
        {id: 4, title: "Rest API2", isDone: false},
        {id: 5, title: "GraphQL2", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist topic1={'What to learn-1111'} arr={arr1}/>
            <Todolist topic1={'What to learn-2222'} arr={arr2}/>
        </div>
    );
}

export default App;
