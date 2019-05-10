import { connect } from 'react-redux';
import Dashbord from './Book';
import { getBooksList } from '../../stores/books';


const mapStateToProps = bookStore => bookStore;
const mapDispatchToProps = {
  getBooksList: params => getBooksList(params),
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashbord);
