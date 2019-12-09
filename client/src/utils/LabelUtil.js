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
      palette: {
        primary: {
          '50': '#e3f2fd',
          '100': labelColor.secondaryColor,
          '200': '#90caf9',
          '300': '#3e3935',
          '400': '#42a5f5',
          '500': labelColor.primaryColor,
          '600': '#1e88e5',
          '700': labelColor.primaryColor,
          '800': '#1565c0',
          '900': '#0d47a1',
          A100: '#82b1ff',
          A200: '#448aff',
          A400: '#2979ff',
          A700: labelColor.primaryColor,
          contrastDefaultColor: 'light'
        },
        secondary: {
          main: labelColor.primaryColor
        },
        button: {
          backgroundColor: labelColor.primaryColor
        }
      }
    });
  }
};

export default LabelUtil;
