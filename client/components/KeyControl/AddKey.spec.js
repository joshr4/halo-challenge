import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddKey from './AddKey'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AddKey Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AddKey newKey='test key' newValue='test value' />)
  })

  it('renders a div with class "add-key"', () => {
    expect(wrapper.find('div').hasClass('add-key')).to.be.equal(true);
  })

  it('has a newKey input with text equal to the newKey prop', () => {
    expect(wrapper.find('#newKey').exists()).to.be.equal(true);
    expect(wrapper.find('#newKey').props().value).to.be.equal('test key');
  })

  it('has a newValue input with text equal to the newValue prop', () => {
    expect(wrapper.find('#newValue').exists()).to.be.equal(true);
    expect(wrapper.find('#newValue').props().value).to.be.equal('test value');
  })

  it('has a button labeled "Add key"', () => {
    expect(wrapper.find('#add-key-btn').props().children).to.be.equal('Add key');
  })

})
