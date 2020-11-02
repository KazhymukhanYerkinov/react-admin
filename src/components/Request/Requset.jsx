import React from 'react';
import { useCallback } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Pagination from './Pagination/Pagination';
import RequestItem from './RequestItem/RequestItem';
import './RequestModule.css';



const Request = (props) => {

    console.log("RENDER REQUEST");
    let requestItems = useCallback(props.requests.map(u => <RequestItem code = {u.code} email = {u.email} full_name = {u.full_name} 
                                                            phone = {u.phone} acceptRequest = {props.acceptRequest} setCurrentPage = {props.setCurrentPage}
                                                            count = {props.count} page = {props.page} currentPage = {props.currentPage} />), [props.requests])

    return (
        <>
        <div className = 'app-request'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"> Код </th>
                        <th scope="col" className = 'app-request-table-th'> Ф.И.О  </th>
                        <th scope="col" className = 'app-request-table-th'> E-mail </th>
                        <th scope="col" className = 'app-request-table-th'> Телефон </th>
                        <th></th>
                        <th></th>

                        <th className = 'app-request-table-th'> &nbsp; </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.isFetching ? <tr><td colspan="7" className = 'app-staff-preloader'> <Preloader /> </td></tr>:  requestItems }
                </tbody>

            </table>
        </div>
        <Pagination currentPage = {props.currentPage} count = {props.count} page = {props.page}
                        setCurrentPage = {props.setCurrentPage} getRequests = {props.getRequests}/>
        </>
    )

}

export default Request;