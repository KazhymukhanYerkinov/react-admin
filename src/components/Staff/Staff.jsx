import React from 'react';

import './StaffModule.css';
import ToggleFooterContainer from './ToggleFooter/ToggleFooterContainer';

let order = '';
let sign = '';

const Staff = (props) => {
    //////////// PAGINATION LOGIC //////////////////
    let pagesCount = Math.ceil(props.count / props.page);
    let pages = [];

    let maxLeft = (props.currentPage - Math.floor(5/props.page));
    let maxRight = (props.currentPage + Math.floor(5/props.page));

    if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = 5;
    }
    if (maxRight > pagesCount) {
        maxLeft = pagesCount - (5 - 1);

        if (maxLeft < 1) {
            maxLeft = 1;
        }
        maxRight = pagesCount
    }

    for (let i = maxLeft; i <= maxRight; i++) {
        pages.push(i);
    }


    ///////////// PAGINATION AND SORT  /////////////////////////
    const handleCode = (e) => {

        let icon = document.querySelectorAll('.fa');

        for(let i = 0; i < icon.length; i++) {
            if (icon[i] === e.currentTarget) {
                e.currentTarget.classList.toggle('fa-angle-down');
                e.currentTarget.classList.toggle('fa-angle-up');
            }
            else {
                if (icon[i].classList.contains('fa-angle-up')){
                    icon[i].classList.remove('fa-angle-up');
                    icon[i].classList.add('fa-angle-down');
                }
            }
        }
        order = e.currentTarget.getAttribute('name');
        sign = e.currentTarget.classList.contains('fa-angle-up')? '' : '-';

        props.setSignInStaff(sign);
        props.setOrderStaff(order);

        
        props.getStaffThunk(props.currentPage, props.page, order, sign);
    }

    //////////////////  DELETE BUTTON /////////////////////////////
    const handleDelete = (code, currentPage) => {
        if (props.count > props.page) {
            const temp = props.count % props.page;
            if (temp == 1) {
                props.setCurrentPage(1)
                props.deleteStaffThunk(code, currentPage - 1, props.page, order, sign)
            }
            else {
                props.deleteStaffThunk(code, currentPage, props.page, order, sign)
            }
        }
        else {
            props.deleteStaffThunk(code, currentPage, props.page,  order, sign)
        }
    }

    return (
        <>
        <div className = 'app-staff'>
            <table class="table table-striped">
                <thead className = 'app-staff-table-tr'>
                    <tr >
                            <th scope="col"> Код 

                                <i class="fa fa-angle-down" name = 'code' aria-hidden="true" onClick = { handleCode }></i>
 
                            </th>

                            <th scope="col" className = 'app-staff-table-th'>Ф.И.О 
                            
                                <i class="fa fa-angle-down" name = 'full_name' aria-hidden="true" onClick = { handleCode }></i>
                                
                            </th>


                            <th scope="col" className = 'app-staff-table-th'>Должность
                                
                                <i class="fa fa-angle-down" name = 'position' aria-hidden="true" onClick = { handleCode }></i>

                            </th>


                            <th scope="col" className = 'app-staff-table-th'>Телефон

                                <i class="fa fa-angle-down" name = 'phone' aria-hidden="true" onClick = { handleCode }></i>

                            </th>


                            <th scope="col" className = 'app-staff-table-th'>E-mail

                                <i class="fa fa-angle-down" name = 'email' aria-hidden="true" onClick = { handleCode }></i>

                            </th>


                            <th className = 'app-staff-table-th'></th>
                            <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.staffs.map(s => {
                        return (
                                <tr>
                                    <td scope="row"> {s.code} </td>
                                    <td> {s.full_name} </td>
                                    <td> {s.position} </td>
                                    <td> {s.phone} </td>
                                    <td> {s.email}</td>
                                    <td> <i class="material-icons" onClick = { () => {props.setEditorBtn(true)
                                                                                      props.setToggleHeight(250)
                                                                                      props.getDetailStaffThunk(s.code)}}> mode_edit </i> </td>
                                    <td> <i class="material-icons app-staff-delete" onClick = { () => { handleDelete(s.code, props.currentPage)}}>delete</i> </td>
                                </tr>
                                );
                    })}
                </tbody>
            </table>
            <div>
                <ToggleFooterContainer setEditorBtn = {props.setEditorBtn}
                                       editorBtn = {props.editorBtn}/>
            </div>

           
        </div>

        <nav className = 'ml-5'>
            <ul className = 'pagination justify-content-end'>
                <li class="page-item" onClick = { () => {props.setCurrentPage(1)
                                                        props.getStaffThunk(1, props.page, order, sign) }}>
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo; ПЕРВАЯ </span>
                    </a>
                </li>

                {pages.map(p => {
                    return <li className={`page-item ${props.currentPage === p && 'active'}`} onClick = { () => {props.setCurrentPage(p) 
                                                                                                                 props.getStaffThunk(p, props.page, order, sign)}}>
                                <a class="page-link" href="#">  {p} </a>
                           </li>
                })}
                
               
                <li class="page-item" onClick = { () => {props.setCurrentPage(pagesCount) 
                                                         props.getStaffThunk(pagesCount, props.page, order, sign)}}>
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">ПОСЛЕДНЯЯ &raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Staff;