import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

const spacing = 10;

const theme = {
  emeraldColors: colors,
  palette: {
    primary: colors.emerald,
    secondary: colors.ash,
    divider: colors.conch.main,
    background: {
      default: colors.snow
    },
    action: {
      selected: colors.snow,
      hover: 'none'
    }
  },
  spacing: {
    unit: spacing
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontFamily: [
      '"Rubik"',
      '"Roboto"',
      "sans-serif"
    ].join(',')
  },
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: spacing * 2,
        boxSizing: 'border-box',
        borderRadius: '1px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: colors.conch.main,
        paddingLeft: spacing,
        paddingRight: spacing,
      },
    },
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        bottom: -(spacing * 2),
      },
    },
    MuiButton: {
      root: {
        color: colors.emerald.main,
        borderRadius: 0,
        minHeight: spacing * 4,
      },
      contained: {
        color: colors.white.main,
        backgroundColor: colors.emerald.main,
        boxShadow: 'none',
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: spacing * 3,
        paddingRight: spacing * 3
      }
    },
    MuiInputAdornment: {
      root: {
        maxHeight: 'none'
      }
    },
    MuiInput: {
      root: {
        height: spacing * 5
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      },
      colorDefault: {
        backgroundColor: colors.white.main
      }
    },
    MuiList: {
      root: {
        borderTop: `1px solid ${colors.conch.main}`,
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0
      }

    },
    MuiListItem: {
      root: {
        borderBottom: `1px solid ${colors.conch.main}`,
        borderRight: 'none',
        borderLeft: 'none'
      }
    },
    MuiPaper: {
      root: {
        border: `1px solid ${colors.conch.main}`,
      },
    },
    MuiMenuItem: {
      root: {
        cursor: 'pointer',
        padding: `${spacing / 2}px ${spacing * 8}px ${spacing / 2}px ${spacing * 4}px`,
        border: 'none',
        lineHeight: spacing * 2,
        marginLeft: spacing / 2,
        height: 'auto',
      },
      selected: {
        marginLeft: '0',
        borderLeft: `${spacing / 2}px solid ${colors.emerald.main}`,
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: spacing * 4
      },
      paragraph: {
        marginBottom: spacing * 2
      }
    }
  },
  props: {
    MuiTypography: {
      color: 'secondary',
    },
    MuiInput: {
      disableUnderline: true,
    },
    MuiFormHelperText: {
      error: true,
    },
    MuiPaper: {
      square: true,
      elevation: 0,
    },
    MuiList: {
      disablePadding: true
    }
  },
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
