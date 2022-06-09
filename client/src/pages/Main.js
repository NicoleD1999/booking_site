import React from 'react'
import Property from '../components/Property'
import { useQuery } from '@apollo/client'
import { QUERY_PROPERTY, QUERY_OWNER, QUERY_EXPECTATIONS } from '../utils/queries'
const MainPage = () => {
const {data: propertyData, loading: loadingProperty}=useQuery(QUERY_PROPERTY)

// const {data: ownerData, loading: loadingOwner}=useQuery(QUERY_OWNER)
// const {data: expectationsData, loading: loadingExpectations} = useQuery(QUERY_EXPECTATIONS)

const property = propertyData?.property || []
// const owner = ownerData?.owner || []
// const expectations = expectationsData?.expectations || []
return (
    <div>
        {loadingProperty ? (
            <h1>Loading Property Info...</h1>
        ):(
            <Property property={property}/>   
        )}

    </div>
)

}

export default MainPage