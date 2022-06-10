import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_OWNER } from "../utils/mutations"


const Owner = ({owner}) => {
console.log(owner)
const [updateOwner, {error, data}]= useMutation(UPDATE_OWNER)
const [editingId, setEditingId] = useState(-1)
const [currentOwner, setOwner] = useState()


    function handleClick (value){
        setEditingId(value) 
    }
    const handleUpdate = async (value)=> {
        await updateOwner({
            variables: {
                propId: value,
                description: currentOwner
            }
        })
        setEditingId(-1)
    }
    const setDescription = (event) =>{
        setOwner(event.target.value)
        // console.log(currentowner)
    }
    const handleIdChange= () =>{
        setEditingId(-1)
    }


    if (editingId === owner[0]._id) {
        return(
            <div>
                {owner.map((owner)=>
                <div>
                    <td><input key={owner._id} placeholder={owner.description} onChange={setDescription}/></td>
                    <button key={owner._id} onClick={(event)=>{handleUpdate(owner._id)}}>Save</button>
                    <button onClick={handleIdChange}>Cancel</button>
                </div>      
                )}
            </div>

            )}
        else {
            return(
            <div>
                {owner.map((owner)=>
                <div>
                    <p key={owner.description}>{owner.description}</p>
                    <button key={owner._id} onClick={(event)=>{handleClick(owner._id)}}>Edit</button>
                </div>
                    )}
            </div> 
        )}

}

export default Owner;