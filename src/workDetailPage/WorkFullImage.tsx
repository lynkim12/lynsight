import '../App.css';
import '../style.css';
import '../font.css';
import './style_works.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function WorkFullImage (props: {
    image: string; 
    isRoundedCorner: boolean;
    description? : React.ReactNode;
    isBackgroundColor : boolean;
    isMargin : boolean;
}){

    return (
        <>
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true} offset={1}>
        <div className={`'image-center' ${props.isMargin ? 'margin48' : ''}`} style={{margin:'0px 0px 80px 0px'}} >  
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <img className={`workFullImage 
                        ${props.isRoundedCorner ? 'corner-round24' : ''} 
                        ${props.isBackgroundColor ? 'worksimage-GrayBackgroundColor' : ''} 
                        ` } src = {props.image}/>
                {props.description && <div className='imageCaption'>{props.description}</div>}
            </div>
        </div>
        </AnimationOnScroll>
        </>
    )
}

