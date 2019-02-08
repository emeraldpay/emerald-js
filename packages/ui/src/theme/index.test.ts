import theme from './index';

describe('Emerald Theme', () => {
  it('should contain correct MuiMenuItem settings', () => {
    expect(theme.overrides.MuiMenuItem.root.lineHeight).toEqual('20px');
  });
});