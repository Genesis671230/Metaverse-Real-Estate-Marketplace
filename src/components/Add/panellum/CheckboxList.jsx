import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function CheckboxList({linkedHotpsotCounter,setParanomaCheckbox}) {
  const [personName, setPersonName] = React.useState([]);


  return (
    <div>
  
        <Select
        className='w-8 h-8'
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={()=>{}}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {linkedHotpsotCounter.map((name) => (
            <MenuItem key={name} value={name}>
             <input
              onChange={() => setParanomaCheckbox((prev)=>({...prev,linkedScene:Number(name)}))}
              type="checkbox"
              name="1"
              id={name.toString()}
            />
              {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
    </div>
  );
}
