import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import 'jsdom-global/register'

Enzyme.configure({
  adapter: new Adapter(),
})