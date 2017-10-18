import React from 'react';
import Table from './table';
// Feature Set 1

const students = [
    {
        name: 'Matt',
        course: 'Javascript',
        grade: 90
    },
    {
        name: 'Prosith',
        course: 'CSS',
        grade: 99
    },
    {
        name: 'Chris',
        course: 'React',
        grade: 88
    }
];
function App(){
    return <div className="container">
        <h1>Student Grade Table</h1>;
        <Table data = {students} />
    </div>
}

export default App;


/*<h1>My first React functional component</h1>*/