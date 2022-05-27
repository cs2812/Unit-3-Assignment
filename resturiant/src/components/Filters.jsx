import React from 'react'

export default function Filters({currentFilteredBy,filters,updateFilter}) {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
                {Object.entries(filters).map(([key,value])=>(//to get both key value;

                    <div key={key}className={`restaurant-option ${currentFilteredBy==value?"underline":""}`}
                     onClick={()=>updateFilter(key)}>
                    {value}
                    </div>
                ))}
            </div>
    </div>
)
}
