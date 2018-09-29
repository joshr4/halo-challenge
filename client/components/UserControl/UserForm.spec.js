import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserForm from './UserForm'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserForm Component', () => {
  let wrapper
  let errorMessage = 'something went wrong'
  let loginPageName = 'login'
  let login = () => {}

  beforeEach(() => {
    wrapper = shallow(<UserForm loginPageName={loginPageName} />)
  })

  it('renders a <form> with class "login-form"', () => {
    expect(wrapper.find('form').exists()).to.be.equal(true);
    expect(wrapper.find('form').hasClass('login-form')).to.be.equal(true)
  })

  it('renders an error <Alert> component only if an errorMessage is passed in on props', () => {
    expect(wrapper.find('form > Alert').exists()).to.be.equal(false);
    wrapper.setProps({ errorMessage:errorMessage});
    expect(wrapper.find('form > Alert').exists()).to.be.equal(true);
  })
})
