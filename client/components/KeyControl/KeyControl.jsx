import React, { Component } from 'react';
import SingleKey from './SingleKey.jsx';
import AddKey from './AddKey.jsx';
import { Alert, Table } from 'react-bootstrap';
import axios from 'axios';

class KeyControl extends Component {
  constructor() {
    super();
    this.state = {
      keyFieldEmpty: true,
      valueFieldEmpty: true,
      newKey: '',
      newValue: '',
      userKeys: [],
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getUserKeys();
  }

  getUserKeys = () => {
    axios
      .get('/api/keys')
      .then(res => this.setState({ userKeys: res.data }))
      .catch(err => console.log(err));
  };

  handleChange = (evt) => {
    const { id, value } = evt.target
    if (id === 'newKey') this.setState({ newKey: value, keyFieldEmpty: this.formValidation(value) });
    if (id === 'newValue') this.setState({ newValue: value, valueFieldEmpty: this.formValidation(value) });
  };

  formValidation = (text) => !text.length

  addKey = (evt) => {
    evt.preventDefault()
    !this.state.keyFieldEmpty && !this.state.valueFieldEmpty ?
      axios
        .post('/api/keys', { key: this.state.newKey, value: this.state.newValue })
        .then(res => this.setState({ userKeys: [...this.state.userKeys, res.data], newKey: '', newValue: '', keyFieldEmpty: true, valueFieldEmpty: true, errorMessage: null}))
        .catch(err => console.log(err))
      : this.setState({errorMessage: 'Key and value fields cannot be blank.'});
  };

  deleteKey = (keyId) => {
    const newKeySet = this.state.userKeys.filter(key => key.id !== keyId);
    axios
      .delete(`/api/keys/${keyId}`)
      .then(res => this.setState({ userKeys: newKeySet }))
      .catch(err => console.log(err));
  };

  getValue = (keyId, isHide) => {
    if(isHide) this.setState((prevState) => {
      return { userKeys: prevState.userKeys.map(key => key.id===keyId ? {...key, value: null} : key) }
    })
    else axios
      .get(`/api/keys/${keyId}`)
      .then(res => this.setState((prevState) => {
        return { userKeys: prevState.userKeys.map(key => key.id===keyId ? {...key, value: res.data.value} : key) }
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { newKey, newValue, userKeys, errorMessage } = this.state
    const { handleChange, addKey, deleteKey, getValue } = this
    console.log('userKeys',userKeys)
    return (
      <div className="key-control">
        <AddKey newKey={newKey} newValue={newValue} handleChange={handleChange} addKey={addKey} />
        {!!errorMessage ? <Alert bsStyle="warning">{errorMessage}</Alert> : null}
        <Table striped bordered hover responsive>
          <thead>
            <tr className="table-head">
              <th>Key</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userKeys.map(key => (<SingleKey keyInfo={key} deleteKey={deleteKey} getValue={getValue} key={key.id} />))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default KeyControl;
