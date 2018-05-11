import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({currentPage }) => {
  const handleChange=()=>{
    /*ToDo*/
  }
  return(
    <div>

      {/*<input type="text" value={currentPage} onChange={handleChange} /> */}
    </div>
  )

}
Pagination.propTypes={
  currentPage: PropTypes.number.isRequired
}
export default Pagination;
