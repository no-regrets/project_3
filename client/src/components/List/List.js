import React from "react";
import Table from "react-materialize";


export function List({children}) {
    return(
        // <Table>
        //     <tr>
        //         <th>Start time</th>
        //         <th>Drink Goal</th>
        //         <th>Drinks Consumed</th>
        //     </tr>
        // </Table>
        <div>
            <ul>{children}</ul>
        </div>
    )
}

export function ListItem({children}) {
    return (
    // <tbody>
    //     <tr>
    //         <td>{props.start}</td>
    //         <td>{props.goal}</td>
    //         <td>{props.drinks}</td>
    //     </tr>
    // </tbody>
    <li>{children}</li>
    )
}