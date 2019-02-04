import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import { Address, getStyles } from './Address';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(getStyles()).reduce(reduceClasses, {});

const mockMuiTheme = {
  palette: {},
};

describe('Address', () => {
  // TODO: Solve it! Should we require id or not?
  // it('works without provided id', () => {
  //   const component = shallow(<Address classes={classes} muiTheme={mockMuiTheme} />);
  //   expect(component.find('div')).toHaveLength(0);
  // });

  it('shows address', () => {
    const accountAddr = shallow(<Address classes={classes} id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" muiTheme={mockMuiTheme} />);

    expect(accountAddr.find(Typography).props().children)
      .toEqual('0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98');
  });

  // it('shows shortened address', () => {
  //   const accountAddr = render(
  //       <Address classes={classes} shortened id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" muiTheme={mockMuiTheme} />
  //   );
  //   //expect(accountAddr.find(Typography).props().children).toEqual('0xFBb1b...0fBB98');
  //   console.log(accountAddr.text());
  // });

  it('has showCheck == false by default', () => {
    const accountAddr = shallow(<Address classes={classes} id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" muiTheme={mockMuiTheme} />);
    expect(accountAddr.props().showCheck).toBeFalsy();
  });

  it('shows sanitized hex', () => {
    const accountAddr = shallow(<Address classes={classes} shortened id="FBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" muiTheme={mockMuiTheme} />);
    expect(accountAddr.find(Typography).props().className).toEqual('shortenedAddress');
  });
});

