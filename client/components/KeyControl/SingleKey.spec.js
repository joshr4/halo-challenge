import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SingleKey from './SingleKey'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleKey Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SingleKey keyInfo={{id:1, key:'test key'}} />)
  })

  it('renders a <tr> with three <td> children elements', () => {
    expect(wrapper.find('tr').exists()).to.be.equal(true);
    expect(wrapper.find('tr > td').length).to.be.equal(3);
  })

  it('the first <td> element contains the prop keyInfo.key', () => {
    expect(wrapper.find('tr > td').first().props().children).to.be.equal('test key');
  })
})
