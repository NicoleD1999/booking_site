import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_EXPECT } from "../utils/mutations"


const Expectations = ({expectations}) => {
    console.log(expectations)
const [updateExpect, {error, data}]= useMutation(UPDATE_EXPECT)
const [editingId, setEditingId] = useState(-1)
const [currentExpectations, setExpectations] = useState()


    function handleClick (value){
        setEditingId(value) 
    }
    const handleUpdate = async (value)=> {
        await updateExpect({
            variables: {
                expectId: value,
                description: currentExpectations
            }
        })
        setEditingId(-1)
    }
    const setDescription = (event) =>{
        setExpectations(event.target.value)
        // console.log(currentExpectations)
    }
    const handleIdChange= () =>{
        setEditingId(-1)
    }

    
    if (editingId === expectations[0]._id) {
        return(
            <div>
                {expectations.map((expectations)=>
                <div>
                    <td><input key={expectations._id} placeholder={expectations.description} onChange={setDescription}/></td>
                    <button key={expectations._id} onClick={(event)=>{handleUpdate(expectations._id)}}>Save</button>
                    <button onClick={handleIdChange}>Cancel</button>
                </div>      
                )}
            </div>

            )}
        else {
            return(
            <div>
                {expectations.map((expectations)=>
                <div>
                    <p key={expectations.description}>{expectations.description}</p>
                    <button key={expectations._id} onClick={(event)=>{handleClick(expectations._id)}}>Edit</button>
                </div>
                    )}
            </div> 
        )}

}

export default Expectations;