import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSongs, getUser } from '../../actions/soundCloudActions';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSongs();
    this.props.getUser();
  }

  render() {

    const {children} = this.props;

    const childComponent = React.cloneElement(children, this.props);

    return (
      <div className='Layout'>
        {childComponent}
      </div>
    );
  }
}

function mapStateToProps(state) {

  const {
    application,
    routing,
    form
  } = state;

  return {
    application: application,
    routing: routing,
    form
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    getSongs: () => dispatch(getSongs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
