import {connect} from 'react-redux';
import LinkComponent from './Link';
import {setFilterAction} from '../../action-creators';

const FilterLink = connect(
  (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilterReducer
  }),
  (dispatch, ownProps) => ({
    onClick: () => {
      dispatch(setFilterAction(ownProps.filter));
    }
  })
)(LinkComponent);

export default FilterLink;

// NOT NECESSARY WHEN USING CONNECT
//class FilterLink extends Component {
//  componentDidMount() {
//    const {store} = this.context;
//    this.unsubscribe = store.subscribe(() => this.forceUpdate());
//  }
//
//  componentWillUnmount() {
//    this.unsubscribe();
//  }
//
//  render() {
//    const {filter, children} = this.props;
//    const {store} = this.context;
//    const state = store.getState();
//    return (
//      <Link
//        active={filter === state.visibilityFilterReducer}
//        onClick={() => {
//          store.dispatch({
//            type: "SET_VISIBILITY_FILTER",
//            filter
//          });
//        }}
//      >{children}</Link>
//    );
//  }
//}
//FilterLink.contextTypes = {
//  store: React.PropTypes.object
//};
