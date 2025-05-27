import { useState } from "react";

function MultiSelect({filters, openLabel}) {
    const [open, setOpen] = useState(false);  
    const [selectedFilters, setSelectedFilters] = useState([]);  

    return (
        <div onClick={() => setOpen(!open)} className="multi-select">   
            <div>{openLabel} ({selectedFilters.length})</div>
            {
                open && <ul>
                    {filters.map((filter) => (
                        <li key={filter.id}>
                            <input type="checkbox" onChange={(e)=> setSelectedFilters(...selectedFilters, filter)} /> {filter.name}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}