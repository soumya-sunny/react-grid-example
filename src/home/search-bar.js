import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.handleFilterTextChange(event.target.value);
 }

 handleSubmit(event) {
    event.preventDefault();
 }
 render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label> Search Name:
          <input type="text" value={this.props.searchText} onChange={(e)=>this.handleChange(e)} />
        </label>
      </form>
    );
  }
}
SearchBar.propTypes={
  searchText: PropTypes.string.isRequired,
  handleFilterTextChange: PropTypes.func.isRequired
}
SearchBar.defaultProps = {
  searchText: ""
};
export default SearchBar;
