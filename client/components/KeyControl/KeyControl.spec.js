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

  it('has the correct initial state', () => {
    expect(wrapper.state().keyFieldEmpty).to.be.equal(true);
    expect(wrapper.state().valueFieldEmpty).to.be.equal(true);
    expect(wrapper.state().newKey).to.be.equal('');
    expect(wrapper.state().newValue).to.be.equal('');
    expect(wrapper.state().userKeys.length).to.be.equal(0);
    expect(wrapper.state().errorMessage).to.be.equal(null);
  })

  // it('renders a <div> with class "main-app"', () => {
  //   expect(wrapper.find('div').hasClass('main-app')).to.be.equal(true)
  // })

  // it('has a <div> with a <UserControl> child', () => {
  //   expect(wrapper.find('div>UserControl').exists()).to.be.equal(true);
  // })

  // it('has a <div> with a <KeyControl> child that only renders if a user exists on state', () => {
  //   expect(wrapper.find('div>KeyControl').exists()).to.be.equal(false);

  //   wrapper.setState({ user: testUser });
  //   expect(wrapper.find('div>KeyControl').exists()).to.be.equal(true);
  // })
})
