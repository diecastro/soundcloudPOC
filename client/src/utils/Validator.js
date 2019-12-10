import errorMessages from '../constants/messages';

const Validator = {
  messages: errorMessages.validator,

  hasNoValue: function (value) {
    return !value;
  },
  validateArtistForm: (values) => {
    let errors = {};
    let that = this;

    if (values['username'] && Validator.hasNoValue(values['username'])) {
      errors.username = that.messages.requiredText;
    }

    return errors;
  }
};
export default Validator;

