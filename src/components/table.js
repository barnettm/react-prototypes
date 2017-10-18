import React from 'react';




function Table(props){
    const tableRows = props.data.map(function(item,index){
        console.log(item);
       return (
           <tr key={index}>
               <td>{item.name}</td>
               <td>{item.course}</td>
               <td>{item.grade}</td>
           </tr>
       )
    });
   return <table className="table">
        <thead className ="thead-inverse">
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            {tableRows}
            {/*<tr>*/}
                {/*<td>Matt</td>*/}
                {/*<td>Javascript</td>*/}
                {/*<td>85</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
                {/*<td>Chris</td>*/}
                {/*<td>Javascript</td>*/}
                {/*<td>95</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
                {/*<td>Ian</td>*/}
                {/*<td>Javascript</td>*/}
                {/*<td>95</td>*/}
            {/*</tr>*/}
        </tbody>
    </table>
}


export default Table;