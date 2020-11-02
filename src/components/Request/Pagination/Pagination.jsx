import React from 'react';


const Pagination = (props) => {
    
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
   
    if (props.count === 0) {
        return <div></div>
    }
    
    return (
        <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item" onClick = { () => {   props.setCurrentPage(1)
                                                                props.getRequests(1, props.page) }}>
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo; ПЕРВАЯ</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>

                    {pages.map(p => {
                        return <li className={`page-item ${props.currentPage === p && 'active'}`} onClick = { () => { props.setCurrentPage(p)
                                                                                                                      props.getRequests(p, props.page) }}>
                                    <a class="page-link" href="#">  {p} </a>
                                </li>
                    })}


                   

                    <li class="page-item" onClick = { () => {   props.setCurrentPage(pagesCount)
                                                                props.getRequests(pagesCount, props.page) }}>
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true"> ПОСЛЕДНЯЯ &raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
    )
}

export default Pagination;