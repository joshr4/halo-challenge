import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserControl from './UserControl'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserControl Component', () => {
  let wrapper
  let testUser = {id: 1, username: 'josh'}
  let errorMessage = 'something went wrong'
  let loginPageName = 'login'
  let login = () => {}

  beforeEach(() => {
    wrapper = shallow(<UserControl user={null} />)
  })

  it('has a <div> with a UserForm child that only renders if a user exists on state', () => {
    expect(wrapper.find('div>UserForm').exists()).to.be.equal(true);

    wrapper.setProps({ user: testUser });
    expect(wrapper.find('div>UserForm').exists()).to.be.equal(false);
  })

  it('renders a navbar <div> with class "nav-bar"', () => {
    expect(wrapper.find('div>div').first().hasClass('nav-bar')).to.be.equal(true)
  })

  it('renders a <p> with class "logo"', () => {
    expect(wrapper.find('div>div').first().find('p').hasClass('logo')).to.be.equal(true)
  })
})
