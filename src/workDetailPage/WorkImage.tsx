import '../App.css';
import '../style.css';
import '../font.css';
import './style_works.css';

export function WorkImage(props: {
    image: string; 
    description? : React.ReactNode;
}) {
    return (
        <>
        <div className='image-center-align'> 
          <img className='workImage'  src = {props.image}/>
          {props.description && <div className='imageCaption'>{props.description}</div>}
        </div>
        </>
    )
}