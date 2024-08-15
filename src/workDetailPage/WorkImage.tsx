import '../App.css';
import '../style.css';
import '../font.css';
import './style_works.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function WorkImage(props: {
    image: string; 
    description? : React.ReactNode;
    isMaxheight : boolean;
    isbottomPadding : boolean;

}) {
    return (
        <>
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true} offset={0}>
        <div className={`image-center ${props.isbottomPadding ? 'bottomPadding':''}`}> 
          <img className={`workImage ${props.isMaxheight ? 'maxheight600' : ''}`} src = {props.image}/>
          {props.description && <div className='imageCaption'>{props.description}</div>}
        </div>
        </AnimationOnScroll>
        </>
    )
}