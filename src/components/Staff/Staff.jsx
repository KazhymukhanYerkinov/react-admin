import React, { useCallback }  from 'react';
import './StaffModule.css';
import ToggleFooterContainer from './ToggleFooter/ToggleFooterContainer';
import StaffItem from './StaffItem/StaffItem';
import Pagination from './Pagination/Pagination';
import { Box ,Button} from '@material-ui/core';
import Preloader from '../../common/Preloader/Preloader';


let order = '';
let sign = '';

const Staff = (props) => {

    
    const handleClick = () => {
        props.setDetailStaff({});
        props.setToggleHeight(250);
        props.setEditorBtn(false);
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
        order = (e.currentTarget.getAttribute('name'));
        sign = (e.currentTarget.classList.contains('fa-angle-up')? '' : '-');


        
        props.getStaffThunk(props.currentPage, props.page, order, sign);
    }
    

    ////////////////////  STAFF ITEMS ///////////////////////////////////
    const staffItem = useCallback(props.staffs.map(  staff => <StaffItem code = {staff.code} 
                                                         full_name = {staff.full_name}
                                                         position = {staff.position}
                                                         phone = {staff.phone}
                                                         email = {staff.email}
                                                         setEditorBtn = {props.setEditorBtn}
                                                         setToggleHeight = {props.setToggleHeight}
                                                         getDetailStaffThunk = {props.getDetailStaffThunk}
                                                         deleteStaffThunk = {props.deleteStaffThunk}
                                                         setCurrentPage = { props.setCurrentPage }
                                                         currentPage = { props.currentPage }
                                                         order = { order }
                                                         sign = { sign }
                                                         page = { props.page }
                                                         count = { props.count }
                                                         isFetching = {props.isFetching} />), [props.staffs]);

    return (
        <>   
        <div className = 'd-flex flex-row-reverse bd-highlight'>
            <Box>
                <Button variant="contained" color="primary" aria-controls='example-panel' onClick = { handleClick }> Добавить нового сотрудника </Button>
            </Box>
        </div>      
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

                    {props.isFetching ? <tr><td colspan="7" className = 'app-staff-preloader'> <Preloader /> </td></tr> : staffItem}

                </tbody>
                </table>
           
            <div>
                <ToggleFooterContainer order = { order } sign = { sign } />
            </div>

           
        </div>
        <Pagination order = { order } sign = { sign } page = { props.page } count = { props.count }
                    currentPage = { props.currentPage } setCurrentPage = { props.setCurrentPage } getStaffThunk = { props.getStaffThunk } />
        </>
    );
}
const areEquals = (prevProps, nextProps) => {
    return prevProps.staffs === nextProps.staffs && prevProps.isFetching === nextProps.isFetching
}

export default React.memo(Staff, areEquals);

