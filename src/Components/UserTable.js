import React from "react";
import CustomTable from "./Common/CustomTable";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Box, Grid, TableCell, TextField } from '@material-ui/core';


export default function UserTable() {

    const handleDelete = () => {

    }

    const handleEdit = () => {

    }

    return (
        <>
            <CustomTable
                tableHeading={["Name", "Total Expence", "Quarter Expence", "Action"]}
                rowsData={createUserTableCell([], handleDelete, handleEdit)}

            />
        </>
    )
}




function createUserTableCell(data = [], handleDelete, handleEdit) {

    return data && data && data.length ?
        data.map((item, index) => {
            const { name } = item
            return <React.Fragment key={index}>
                <TableCell >{index + 1}</TableCell>
                <TableCell>{name || ''}</TableCell>
                <TableCell>{50 || ''}</TableCell>
                <TableCell >
                    <EditIcon className="material-ui-icons" onClick={() => handleEdit(index)} />
                    <DeleteOutlineIcon className="material-ui-icons" onClick={() => handleDelete(index)} />
                </TableCell>
            </React.Fragment>
        }) : []
}
