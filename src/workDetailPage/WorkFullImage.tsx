import '../App.css';
import '../style.css';
import '../font.css';
import './style_works.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function WorkFullImage(props: {
    image: string; 
    description? : React.ReactNode;
}) {
    return (
        <>
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true} offset={0}>
        <div className='image-center' style={{gap:'20px'}}> 
          <img className='workFullImage' src = {props.image}/>
          {props.description && <div className='imageCaption'>{props.description}</div>}
        </div>
        </AnimationOnScroll>
        </>
    )
}