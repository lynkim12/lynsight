import '../App.css';
import '../style.css';
import '../font.css';
import '../workDetailPage/style_works.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function ArticleMainImage (props: {
    image: string; 
    isRoundedCorner?: boolean;
    description? : React.ReactNode;
    isBackgroundColor? : boolean;
    isMargin? : boolean;
    isBottomMargin? : boolean;
    isShadow?: boolean;
    isBorder? : boolean;
}){

    return (
        <>
        <div className='fadeIn articleImage corner-round24'>  
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <img className='article-mainimage worksimage-GrayBackgroundColor' src = {props.image}/>
                {props.description && <div className='imageCaption'>{props.description}</div>}
            </div>
        </div>
        </>
    )
}

