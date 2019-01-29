import React from "react";



function TableItem(props){
    return (
      <tr>
          <td>{props.start}</td>
          <td>{props.end}</td>
          <td>{props.goal}</td>
          <td>{props.drinks}</td>
      </tr>
    )
}

export default TableItem;