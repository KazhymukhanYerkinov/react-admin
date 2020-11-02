import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';


const RequestItem = (props) => {



    const [open, setOpen] = useState(false);

    const handleAccept = (accept) => {
        if (props.count > props.page) {
            const temp = props.count % props.page;
            if (temp === 1) {
                props.setCurrentPage(props.currentPage - 1)
                props.acceptRequest(accept, props.code, props.currentPage - 1, props.page);
                
            }
            else {
                props.acceptRequest(accept, props.code, props.currentPage, props.page);
            }
        }
        else {
            props.acceptRequest(accept, props.code, props.currentPage, props.page);
        }
    }

    const acceptClick = (accept) => {
        toast.configure();

        if (accept){
            handleAccept(true)
            toast.success("Элемент успешно добавлен", {position: "bottom-center"})
        }
        else {
            setOpen(true);
        }
    }
    return (
        <>
        <tr>
            <td>{props.code}</td>
            <td>{props.full_name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td></td>
            <td></td>
            <td> <i class="fa fa-check mr-5" aria-hidden="true" onClick = {() => acceptClick(true)}></i> 
                 <i class="fa fa-times" aria-hidden="true" onClick = {() => acceptClick(false)}></i> 
            </td>
        </tr>


        {open && <AlertShow open = { open } setOpen = { setOpen }  handleAccept = { handleAccept } />}
        </>
    )
}



const AlertShow = (props) => {

    

    const handleCloseYes = () => {
        props.setOpen(false);
        props.handleAccept(false);
    }

    const handleCloseNo = () => {
        props.setOpen(false);
    }

    return (
        <div>
            <Dialog
                open = { props.open }
                onClose = { handleCloseNo }
                aria-labelledby = "alert-dialog-title">

                <DialogTitle id="alert-dialog-title"> {"Вы уверены, что хотите удалить этот элемент?"} </DialogTitle>

                <DialogActions>
                    <Button onClick={handleCloseNo} color="secondary">
                        Нет
                    </Button>
                    <Button onClick={handleCloseYes} color="primary">
                        Да
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default RequestItem;