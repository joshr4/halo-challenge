import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SingleKey = props => {
  const { keyInfo, deleteKey, getValue } = props;
  return (
    <tr>
      <td>{keyInfo.key}</td>
      <td>{keyInfo.value ? keyInfo.value : null}</td>
      <td>
        <ButtonGroup>
          {keyInfo.value ? <Button className="key-button" onClick={() => getValue(keyInfo.id, true)} bsStyle="info">Hide Value</Button> : <Button className="key-button" onClick={() => getValue(keyInfo.id, false)} bsStyle="info">Show Value</Button>}
          <Button className="key-button" onClick={() => deleteKey(keyInfo.id)} bsStyle="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  )
}

export default SingleKey;
