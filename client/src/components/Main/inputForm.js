import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '../forms/TextField';


const ArtistForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
    <form onSubmit={handleSubmit} className='flexColumn'>
      <div className='artistForm'>
        <Field
          label='Artist Username'
          type='text'
          component={TextField}
          name='username'
          fullWidth
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'artistForm',
})(ArtistForm);
