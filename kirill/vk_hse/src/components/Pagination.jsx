import React from 'react'

function Pagination ({tablePerPage, totalTable, paginate }) {

const pageNumbers = []

for (let i=1; i<= Math.ceil(totalTable/tablePerPage); i++){
    pageNumbers.push(i)
}


  return (
    <>
        <ul className='pagination'>
            {
                pageNumbers.map(number => (
                    <li className='page-item' key={number}>
                        <a href="#" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul> 
    </>
  );
}



export default Pagination;