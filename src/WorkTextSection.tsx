import './App.css';
import './style.css';
import {AnimationOnScroll} from 'react-animation-on-scroll';

export function WorkTextSection(props: {
    title: string; 
    description : string;
    }) {
    return (
        <>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
            <div style={{ padding: "120px 48px", display: "flex", flexDirection: "column", gap: "28px" }}>
                <div
                    style={{
                        color: "#131517",
                        fontFamily: "Pretendard",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                    }}>{props.title}</div>
                <div style={{
                    color: "#3A3E44",
                    fontFamily: "Pretendard",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "151.8%",
                }}>{props.description}
                </div>
            </div>
        </AnimationOnScroll>
        </>
      )
}
