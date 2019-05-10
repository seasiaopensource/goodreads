import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';




class SearchInput extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        };
      }


    static propTypes = {
      getSerach: PropTypes.func,
      getBooksList: PropTypes.func,
    };

    render() {
      const { placeholder, getBooksList, getSerach } = this.props;
      return (
        <div>
           <DebounceInput
                placeholder={placeholder}
                className='search-box'
                debounceTimeout={500}
                onChange={event => this.setState({searchValue: event.target.value}, () => {
                  getBooksList({
                    "name": event.target.value,
                    "pageNumber": 1
                  });
                  getSerach(event.target.value);
                 })} /> 
          
        </div>
      );
    }


}

SearchInput.defaultProps = {
    placeholder: 'Search here..',
  };

export default SearchInput;
