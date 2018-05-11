import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';

const Grid = ({ data,searchText,handleSortChange}) => {

  let rows=[];
  data.forEach((user) => {
   if (user.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
         return;
   }
   rows.push(<tr key={user.name}>
       <td>{user.username}</td>
       <td><Link to={`/employee/${user.id}`}>{user.name}</Link></td>
       <td>{user.email}</td>
       <td>{user.phone}</td>
       </tr>)
    });

     return (<table>
       <thead>
         <tr>
           <th onClick={event=>handleSortChange(event,'Username')}>Username </th>
           <th onClick={event=>handleSortChange(event,'Name')}>Name </th>
           <th onClick={event=>handleSortChange(event,'Email')}>Email </th>
           <th onClick={event=>handleSortChange(event,'Phone')}>Phone </th>
         </tr>
       </thead>

       <tbody>
          {rows}
       </tbody>
       </table>
     );
 }

 Grid.propTypes={
   data:PropTypes.array.isRequired,
   searchText: PropTypes.string.isRequired,
   handleSortChange: PropTypes.func.isRequired
 }
 Grid.defaultProps = {
   searchText: "",
   data:[]
 };


export default Grid;
