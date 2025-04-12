import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'react', label: 'React' },
  { value: 'node', label: 'Node.js' },
  { value: 'mongo', label: 'MongoDB' },
];

function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={setSelectedOptions}
    />
  );
}
export default MultiSelect;