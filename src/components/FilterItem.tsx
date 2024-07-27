import React from "react"

export function FilterItem (props: {
    isSelected: boolean;
    name: string;
}
) {
    return (
        <div className={props.isSelected ? "selectedChip" : "defaultChip"}>
            {props.name} 
          </div>
    )
}
