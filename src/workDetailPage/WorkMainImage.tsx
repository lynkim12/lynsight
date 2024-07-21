import '../App.css';
import '../style.css';
import '../font.css';
import './style_works.css';

export function MainImage(props: {
    image: string; 
}) {
    return (
        <>
        <div style = {{maxHeight :"900px",overflow:"hidden"  }}>
            <img style = {{ width:"100%", aspectRatio: "auto" }} src={props.image}/>
        </div>
        </>
    )
}