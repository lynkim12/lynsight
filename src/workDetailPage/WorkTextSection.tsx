import '../App.css';
import '../style.css';
import '../font.css';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import './style_works.css';

export function WorkTextSection(props: {
    title?: React.ReactNode; 
    bigTitle? : boolean;
    description? : React.ReactNode;
    isWhiteText? : boolean;
    }) {
    return (
        <>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
            <div className={'textsection'}>
                {props.title && <div className={`${props.bigTitle? 'bigTitle' :''}`} style={{
                        color: props.isWhiteText ? '#fff' : '#131517',
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal"
                    }}>{props.title}</div>}
                {props.description && <div style={{
                    color: "#3A3E44",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "151.8%",
                    // margin:"0px 0px 60px 0px"
                }}>{props.description}</div>}
            </div>
        </AnimationOnScroll>
        </>
      )
}
