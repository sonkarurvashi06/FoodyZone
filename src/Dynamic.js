import React from 'react'
import {useParams} from 'react-router-dom'
function Dynamic(prop) {
    {
        const name = useParams()
        console.log(name)
        return (
            <div>
                <h1>users component</h1>
             </div>

         )


    }


}
export default Dynamic;