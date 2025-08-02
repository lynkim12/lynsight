import '../App.css';
import '../style.css';
import '../font.css';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import '../workDetailPage/style_works.css';

export function ArticleTextSection(props: {
    title?: React.ReactNode; 
    description? : React.ReactNode;
    subDescription? : React.ReactNode;
    }) {
    return (
        <>
            <div className={'articletextsection fadeIn'}>
                {props.title && <div className='articleTitle'>{props.title}</div>}
                <div className='textsection-sub'>
                    {props.description && <div className='articleDescription'>{props.description}</div>}
                    {props.subDescription && <div className='articleSubdescription' >{props.subDescription}</div>}
                </div>
            </div>
        </>
      )
}
