import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import KeyControl from './KeyControl'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('KeyControl Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<KeyControl />)
  })
  //this is disabled due to the componentDidMount function trying to make a request from the flask server which is not running
  xit('has the correct initial state', () => {
    expect(wrapper.state().keyFieldEmpty).to.be.equal(true);
    expect(wrapper.state().valueFieldEmpty).to.be.equal(true);
    expect(wrapper.state().newKey).to.be.equal('');
    expect(wrapper.state().newValue).to.be.equal('');
    expect(wrapper.state().userKeys.length).to.be.equal(0);
    expect(wrapper.state().errorMessage).to.be.equal(null);
  })
})
