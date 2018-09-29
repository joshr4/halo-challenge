import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('App Component', () => {
  let wrapper
  let testUser = {id: 1, username: 'josh'}

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('has an initial state { user: null, errorMessages: null, loginPageName: "login" }', () => {
    expect(wrapper.state().user).to.be.equal(null);
    expect(wrapper.state().errorMessage).to.be.equal(null);
    expect(wrapper.state().loginPageName).to.be.equal('login');
  })

  it('renders a <div> with class "main-app"', () => {
    expect(wrapper.find('div').hasClass('main-app')).to.be.equal(true)
  })

  it('has a <div> with a <UserControl> child', () => {
    expect(wrapper.find('div>UserControl').exists()).to.be.equal(true);
  })

  it('has a <div> with a <KeyControl> child that only renders if a user exists on state', () => {
    expect(wrapper.find('div>KeyControl').exists()).to.be.equal(false);

    wrapper.setState({ user: testUser });
    expect(wrapper.find('div>KeyControl').exists()).to.be.equal(true);
  })
})
