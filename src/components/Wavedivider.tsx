import '../style.css'
import wavedivider from '../image/wavedivider.png';

export function Wavedivider() {
    return (
        <>
        <div  style={{maxWidth: "1400px", display: 'flex', overflow: "hidden", height: "9px",  justifyContent : "center",  margin:"auto",padding: " 0px 48px"}}><img src={wavedivider} className={"wave"} style={{height: "9px", display : "flex", alignSelf: "stretch", textAlign:"center"}}/></div>
        </>
    )
};