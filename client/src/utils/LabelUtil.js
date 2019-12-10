import { createMuiTheme } from '@material-ui/core/styles';

import labels from '../constants/labels';

const LabelUtil = {
  getLabelColor: function () {
    return labels.base;
  },

  getTheme: function () {
    let labelColor = this.getLabelColor();
    return createMuiTheme({
      typography: {
        fontSize: 16,
        fontFamily: ['"Gotham"', 'sans-serif'].join(','),
        useNextVariants: true,
        body1: {
          fontSize: 16,
          color: '#8a8c8c',
          fontFamily: ['"Gotham"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
          fontWeight: 600
        }
      },
      overrides: {
        MuiFormLabel: {
          root: {
            fontSize: 15,
            lineHeight: 1
          }
        },
        MuiInput: {
          root: {
            fontSize: 15,
            lineHeight: 1.2,
            display: 'inline-flex',
            position: 'relative',
            flexDirection: 'column',
            verticalAlign: 'top'
          }
        },
        MuiFormHelperText: {
          root: {
            fontSize: 12
          }
        },
        MuiFormControlLabel: {
          root: {
            color: '#8a8c8c'
          }
        },
        MuiSelect: {
          icon: {
            right: 10
          },
          selectMenu: {
            minHeight: 1,
            height: 70,
            display: 'flex',
            alignItems: 'center'
          }
        },
        MuiDialog: {
          paper: {
            overflow: 'hidden auto!important',
            margin: 0
          }
        },
        MuiOutlinedInput: {
          root: {
            '&$disabled $notchedOutline': {
              borderColor: '#e6e6ea'
            },
            '&:hover $notchedOutline': {
              borderColor: '#e6e6ea'
            },
            '&$focused $notchedOutline': {
              borderColor: '#e6e6ea'
            }
          },
          notchedOutline: {
            borderWidth: 4,
            borderColor: '#e6e6ea',
            borderRadius: 7
          },
          input: {
            height: 70,
            padding: '0 20px',
            borderRadius: 7,
            fontSize: 14
          }
        },
        MuiInputBase: {
          input: {
            '&$disabled': {
              backgroundColor: '#e6e6ea'
            }
          }
        }
      },
    });
  }
};

export default LabelUtil;
