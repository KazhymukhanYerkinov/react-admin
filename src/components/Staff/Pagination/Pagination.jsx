import React from 'react';


const Pagination = (props) => {

    //////////// PAGINATION LOGIC //////////////////
    let pagesCount = Math.ceil(props.count / props.page);
    let pages = [];

    let maxLeft = (props.currentPage - Math.floor(5 / 2));
    let maxRight = (props.currentPage + Math.floor( 5 / 2));

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

    


    return (
        <nav className = 'ml-5'>
            <ul className = 'pagination justify-content-end'>
                <li class="page-item" onClick = { () => {   props.setCurrentPage(1)
                                                            props.getStaffThunk(1, props.page, props.order, props.sign) }}>
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo; ПЕРВАЯ </span>
                    </a>
                </li>

                {pages.map(p => {
                    return <li className={`page-item ${props.currentPage === p && 'active'}`} onClick = { () => {   props.setCurrentPage(p)
                                                                                                                    props.getStaffThunk(p, props.page, props.order, props.sign) }}>
                                <a class="page-link" href="#">  {p} </a>
                           </li>
                })}
                
               
                <li class="page-item" onClick = { () => { 
                                                        props.setCurrentPage(pagesCount)
                                                        props.getStaffThunk(pagesCount, props.page, props.order, props.sign) }}>
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">ПОСЛЕДНЯЯ &raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    );

}
const areEqual = (prevProps, nextProps) => {
    let isEqual = prevProps.page === nextProps.page && prevProps.count === nextProps.count && prevProps.currentPage === nextProps.currentPage;
    return isEqual;
}
export default React.memo(Pagination, areEqual);