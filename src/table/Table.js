import React from "react";
import  './Tttable.css';

const Table=()=>{
 const TableHeader = ()=>{

    return(
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
            </tr>
        </thead>
    );
 };

 const TableAction=()=>{
    return (
        <>
    <button type="button">Delete</button>
    <button type="button">Edit</button>
    <button type="button">Details</button>
    </>)
 }
 const TableRow =()=>{
    return(
        <tbody>
            <tr>
                <td>1</td>
                <td>Alex</td>
                <td><TableAction/></td>
            </tr>
            <tr>
            <td>2</td>
            <td>Basel</td>
            <td><TableAction/></td>
            </tr>

        </tbody>
    )
 }
return(
    <div>
        <table border="5">
            <TableHeader/>
            <TableRow/>
        </table>
    </div>
);
};
export default Table;