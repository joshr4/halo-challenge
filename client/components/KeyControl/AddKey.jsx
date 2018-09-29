import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

const AddKey = props => {
  const { newKey, newValue, addKey, handleChange } = props;
  return (
    <div className="add-key">
      <FormControl
        id='newKey'
        type="text"
        value={newKey}
        placeholder="Enter a key name"
        onChange={handleChange}
        />
      <FormControl
        id='newValue'
        type="text"
        value={newValue}
        placeholder="Enter a value"
        onChange={handleChange}
        />
      <Button bsStyle="primary" onClick={addKey}>Add key</Button>
    </div>
  )
};

export default AddKey;
