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
        await updateProperty({
            variables: {
                propertyId: value,
                description: currentProperty
            }
        })
    }
    const setDescription = (event) =>{
        setProperty(event.target.value)
        console.log(currentProperty)
    }
    if (editingId === property[0]._id) {
        return(
            <div>
                {property.map((property)=>
                <div>
                    <td><input key={property._id} placeholder={property.description} onChange={setDescription}/></td>
                    <button key={property._id} onClick={(event)=>{handleUpdate(property._id)}}>Save</button>
                </div>      
                )}
            </div>

            )}
        else {
            return(
            <div>
                {property.map((property)=>
                <div>
                    <p>{property.description}</p>
                    <button key={property._id} onClick={(event)=>{handleClick(property._id)}}>Edit</button>
                </div>
                    )}
            </div> 
        )}

}

export default Property;