import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

function App() {


    const [tasks1, setTask1] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactTS", isDone: false}
    ])

    const [filter, setFilter] = useState('All')

    const removeTask = (newId: number) => {
        setTask1(tasks1.filter((el) => el.id !== newId))
        console.log()
    }


    let filteredTask = tasks1
    if (filter === 'Active') {
        filteredTask = tasks1.filter((el) => !el.isDone)
    }
    if (filter === 'Completed') {
        filteredTask = tasks1.filter((el) => el.isDone)
    }
    const changeFilter = (filterValue: string) => {
        setFilter(filterValue)


    }
    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filteredTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
