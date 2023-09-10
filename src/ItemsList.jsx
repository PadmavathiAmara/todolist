import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ItemsList.css'

const ItemsList = ({ list, delById }) => {

    return (
        <div className="total">
            {list.map((item) => {
                return (
                    <div className="display">
                        <div>{item.value}</div>
                        <Button onClick={() => delById(item.id)}>
                            <EditIcon />
                            <DeleteIcon />
                        </Button>
                    </div>
                )
            })}

        </div>

    );
}
export default ItemsList;