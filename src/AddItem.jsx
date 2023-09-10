import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import './Additem.css';

const AddItem = ({addItem}) => {
    const [addedInput,setaddedInput] = useState();
     
    const onInputChange = (event) => {
        setaddedInput(event.target.value);
    }
    const onAddClick = () => {
        addItem(addedInput);
        setaddedInput('');
    }

    return(
        <div className="input">
            <TextField onChange={onInputChange} value={addedInput}/>
            <Button onClick={onAddClick}>
            <AddIcon />
            </Button>
        </div>
    );
}
export default AddItem;