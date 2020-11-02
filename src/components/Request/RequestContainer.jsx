import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Request from './Requset';
import { setCurrentPage, getRequests, acceptRequest } from '../../redux/request-reducer';


const RequestContainer = (props) => {
    useEffect( () => {
        
        props.getRequests(props.currentPage, props.page);
        
    }, [])

    
    return (
        <>
            <Request currentPage = {props.currentPage}
                            count = {props.count}
                            page = {props.page}
                            isFetching = {props.isFetching}
                            requests = {props.requests}
                            
                            acceptRequest = {props.acceptRequest}
                            setCurrentPage = {props.setCurrentPage}
                            getRequests = {props.getRequests}/>
        </>
    )
}


let mapStateToProps = (state) => ({
    currentPage: state.requestPage.currentPage,
    count: state.requestPage.count,
    page: state.requestPage.page,

    isFetching: state.requestPage.isFetching,
    requests: state.requestPage.requests,
})

export default connect(mapStateToProps, {setCurrentPage, getRequests, acceptRequest})(RequestContainer)
