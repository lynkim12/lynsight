import '../App.css';
import '../style.css';
import '../font.css';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import '../workDetailPage/style_works.css';

export function ArticleTextSection(props: {
    title?: React.ReactNode; 
    bigTitle? : boolean;
    description? : React.ReactNode;
    subDescription? : React.ReactNode;
    }) {
    return (
        <>
            <div className={'articletextsection fadeIn'}>
                {props.title && <div className={`${props.bigTitle? 'bigTitle' :''}`} style={{
                        color:'#131517',
                        fontSize: "24px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "140%"
                    }}>{props.title}</div>}
                <div className='textsection-sub'>
                    {props.description && <div style={{
                        color: '#3A3E44',
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "151.8%",
                        // display: "inline-block"
                        // margin:"0px 0px 60px 0px"
                    }}>{props.description}</div>}
                    {props.subDescription && <div style={{
                        color: '#9AA0A7',
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "151.8%",
                        maxWidth: "800px"
                        // margin:"0px 0px 60px 0px"
                    }}>{props.subDescription}</div>}
                </div>
            </div>
        </>
      )
}
