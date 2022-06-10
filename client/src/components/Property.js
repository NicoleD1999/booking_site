import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROPERTY } from "../utils/mutations"


const Property = ({property}) => {
const [updateProperty, {error, data}]= useMutation(UPDATE_PROPERTY)
const [editingId, setEditingId] = useState(-1)
const [currentProperty, setProperty] = useState()
    function handleClick (value){
        console.log(value)
        setEditingId(value) 
    }
    const handleUpdate = async (value)=> {
       console.log(value)
       console.log(currentProperty)
       console.error(error)
        await updateProperty({
            variables: {
                propId: value,
                description: currentProperty
            }
        })
        setEditingId(-1)
    }
    const setDescription = (event) =>{
        setProperty(event.target.value)
        // console.log(currentProperty)
    }
    const handleIdChange= () =>{
        setEditingId(-1)
    }
    if (editingId === property[0]._id) {
        return(
            <div>
                {property.map((property)=>
                <div>
                    <td><input key={property._id} placeholder={property.description} onChange={setDescription}/></td>
                    <button key={property._id} onClick={(event)=>{handleUpdate(property._id)}}>Save</button>
                    <button onClick={handleIdChange}>Cancel</button>
                </div>      
                )}
            </div>

            )}
        else {
            return(
            <div>
                {property.map((property)=>
                <div>
                    <p key={property.description}>{property.description}</p>
                    <button key={property._id} onClick={(event)=>{handleClick(property._id)}}>Edit</button>
                </div>
                    )}
            </div> 
        )}

}

export default Property;