import React from 'react';

import Grid from './grid.js';
import SearchBar from './search-bar.js';
import Pagination from './pagination.js';
import {Service} from '../../src/service.js';



var service= new Service();

class HomeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[],
      searchText:'',
      sortColumn:'name',
      currentPage:1
    }
  }
  componentDidMount(){
    service.getUsers()
    .then(json => {
      this.setState({users:json})
    })
  }
  handleFilterTextChange(text){
    this.setState({searchText:text})
  }
  handleSortColumnChange(event,column){
    let sortedUsers=this.state.users.sort((a,b)=>{return a[column.toLowerCase()] > b[column.toLowerCase()]})
    this.setState({
      sortColumn:column,
      users:sortedUsers
    })
  }
  render() {
    return(
        <div>
          <SearchBar searchText={this.state.searchText}
          handleFilterTextChange={(text)=>this.handleFilterTextChange(text)}/>
          {this.state.users.length>0?(
            <Grid data={this.state.users}
             searchText={this.state.searchText}
             sortColumn={this.state.sortColumn}
             handleSortChange={(e,column)=>this.handleSortColumnChange(e,column)}/>
          ):(<label> Loading....</label>)}

          <Pagination currentPage={this.state.currentPage}/>
        </div>
    )
  }

}
export default HomeContainer;
