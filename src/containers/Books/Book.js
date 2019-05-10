import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatPagination from 'material-ui-flat-pagination';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from 'react-loader-spinner';


import Heading from '../../components/Form/heading';
import InputFieldSerach from '../../components/Form/Search'
import ListDetail from '../../components/Form/listDetail'
import Grid from '@material-ui/core/Grid';
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Arial",
      "sans-serif"
    ].join(","),
    useNextVariants: true
  }
  });;

class Dashbord extends Component {
  static propTypes = {
    getBooksList: PropTypes.func,
    bookStore: PropTypes.any,
  };

  constructor() {
    super();
    this.state = {
      pageLimit: 20,
      offset: 0,
      totalBooks: 0,
      booksList: [],
    };
  }


  componentDidMount() {
   const { getBooksList } = this.props;
   getBooksList({
    "name": "",
    "pageNumber": 1
  })
  }

  /**
   * Life Cycle Trigger when recived props and update the state
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      bookStore: { book : { search } }
    } = nextProps;
    const {
      searchList
    } = prevState;
    if (search !== undefined) {
      if(search !== searchList)
      console.log('search',search['total-results'])
      return {
        totalBooks: search['total-results']['_text'],
        booksList: search['total-results']['_text'] !== "0" ? search.results.work : [],
        searchList: search,
      }
    }
    return null
  }



  /**
   * Pagination
   */
  handleClick = (offset) => {
    const {
      pageLimit, name
    } = this.state;
    scroll.scrollToTop();
    this.setState({ offset });
    console.log('offset',offset)
    const pageNumber = offset / pageLimit;
    console.log('pageNumber',pageNumber)
    const { getBooksList } = this.props;
    getBooksList({
      "name": name ,
      "pageNumber": pageNumber + 1
    })

  }

  getSerach = (searchName) => {
    this.setState({
      name: searchName,
    })
  }


  render() {
    const { getBooksList, bookStore: { phase}} = this.props
    const { pageLimit, offset, totalBooks, booksList } = this.state
    return (
      <div className="mainContainer">
         <Grid container spacing={24}>
          <Grid item xs={12}>

          </Grid>
         </Grid>
         <Grid container  spacing={24}>
          <Grid item xs={9}>
          <div  className="topheading">
            <Heading headingName="Search" />
          </div>
          <div  className="topInput">
           <InputFieldSerach  getBooksList={getBooksList} getSerach={this.getSerach}/>
          </div>
          {booksList.length > 0 ?(
          <div >
            
           { booksList.map(iteam => (<div key={iteam.id['_text']}><ListDetail iteam={iteam} name={iteam.name} /></div>))}
            
          <MuiThemeProvider theme={theme}>
           <CssBaseline />
                          <FlatPagination
                            offset={offset}
                            limit={pageLimit}
                            total={totalBooks}
                            onClick={(e, offset) => this.handleClick(offset)}
                          />
            </MuiThemeProvider>
            </div>

         
       ) : ''}
       </Grid>
       {phase === 'LOADING'
              ? (
                <div className="loader">
                  <div className="loader-icon">
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height="50"
                      width="50"
                    />
                  </div>
                </div>
              ) : ''
    }
    
          
    </Grid>
      </div>

    );
  }
}

export default Dashbord;
