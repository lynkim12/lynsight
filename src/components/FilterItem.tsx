import React from "react"

export function FilterItem (props: {
    isSelected: boolean;
    name: React.ReactNode;
}
) {
    return (
        <div className={props.isSelected ? "selectedChip" : "defaultChip"}>
            {props.name} 
          </div>
    )
}
