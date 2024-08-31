import React from "react"

export function NavMenuItem (props: {
    isSelected: boolean;
    name: string;
}
) {
    return (
        <div className={props.isSelected ? "slectedMenu" : "defaultMenu"}>
            {props.name} 
          </div>
    )
}
