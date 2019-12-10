import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { getUser } from '../../actions/soundCloudActions';
import InputForm from './inputForm';
import Button from '@material-ui/core/Button';
import { SubmissionError } from 'redux-form';
import Validator from '../../utils/Validator';
import SearchIcon from '@material-ui/icons/Search';
import ArtistInfo from './ArtistInfo';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  searchArtist = (values) => {
    if (Validator.hasNoValue(values.username)) {
      throw new SubmissionError({
        username: 'This field is required',
        _error: 'submission failed!'
      });
    } else {
      this.props.getUser(values.username);
    }

  };

  render() {
    const {isFetching, data} = this.props.application;
    return (
      <div className='Layout'>
        <header role={'banner'} className={'header'}>
          <div className="header__logo">
            <span></span>
          </div>
        </header>
        <div className='wrapper'>
          <h1>Found your favorite DJ tracks</h1>
          <InputForm
            onSubmit={this.searchArtist}
          />
          <div className='flexColumn'>
            <Button onClick={this.props.submitForm} variant='contained' color='primary'
                    endIcon={<SearchIcon>send</SearchIcon>} disabled={isFetching}>Find</Button>
          </div>
        </div>
        {!isFetching && data && <ArtistInfo artist={data}/>}
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
    getUser: (username) => dispatch(getUser(username)),
    submitForm: () => dispatch(submit('artistForm'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
