import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Additem from './AddItem';
import ItemsList from './ItemsList';
import './ToDoList.css'

const TodoList = () => {
    const [list,setList] = useState([]);
    const [currentId, setCurrentId] = useState(1);
    
    const addItem = (addedInput) => {
       setList([...list,...[{id: currentId, value: addedInput}]]);
       setCurrentId(currentId+1);
    }
    const delById = (id) => {
       let updatedList = list.filter((item) => (item.id !== id));
       setList(updatedList);
    }

    return(
        <div className="todo">
            <Paper elevation={3}>
                <Additem addItem={addItem} />
                <ItemsList list={list} delById={delById}/>
                {/* {JSON.stringify(list)} */}
            </Paper>   
        </div>
    );
}
export default TodoList;