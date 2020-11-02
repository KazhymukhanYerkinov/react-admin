import React, { useState } from 'react';
import '../StaffModule.css'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';





const StaffItem = (props) => {
    

    
    const [open, setOpen] = useState(false);

   

    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <>
        <tr>
            <td > { props.code } </td>
            <td> { props.full_name }</td>
            <td> { props.position } </td>
            <td> { props.phone } </td>
            <td> { props.email } </td>
            <td> <i class="material-icons" onClick = { () => {props.setEditorBtn(true)
                                                              props.setToggleHeight(250)
                                                              props.getDetailStaffThunk(props.code)}}> mode_edit </i> </td>
            <td> <i class="material-icons app-staff-delete" onClick = { handleClickOpen }>delete</i>  </td>
        </tr>

        {open && <AlertDialog open = { open } setOpen = { setOpen } count = {props.count}
                              page = { props.page } setCurrentPage = { props.setCurrentPage } deleteStaffThunk = {props.deleteStaffThunk}
                              order = { props.order } sign = { props.sign } currentPage = { props.currentPage } code = {props.code} />}
        </>

    )
}



export default StaffItem;

const AlertDialog = (props) => {


    //////////////////  DELETE BUTTON /////////////////////////////
    const handleDelete = (code, currentPage) => {
        if (props.count > props.page) {
            const temp = props.count % props.page;
            if (temp === 1) {
                props.setCurrentPage(currentPage - 1)
                props.deleteStaffThunk(code, currentPage - 1, props.page, props.order, props.sign)
            }
            else {
                props.deleteStaffThunk(code, currentPage, props.page, props.order, props.sign)
            }
        }
        else {
            props.deleteStaffThunk(code, currentPage, props.page,  props.order, props.sign)
        }
    }


    const handleClose = () => {
        props.setOpen(false);
        handleDelete(props.code, props.currentPage)

    }

    const handleCloseDis = () => {
        props.setOpen(false);
    }

    

    return (
        <div>
            <Dialog
                open = { props.open }
                onClose = { handleCloseDis }
                aria-labelledby = "alert-dialog-title">

                <DialogTitle id="alert-dialog-title"> {"Вы уверены, что хотите удалить этот элемент?"} </DialogTitle>

                <DialogActions>
                    <Button onClick={handleCloseDis} color="secondary">
                        Нет
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Да
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

