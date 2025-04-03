import '../App.css';
import '../style.css';
import '../font.css';
import './style_works.css';
import OpenButton from '../components/OpenButton';

export function WorkTitle(props: {
    title: string; 
    description : React.ReactNode ;
    team : string;
    role : string;
    period : string;
    showButton?: boolean;
    buttonLabel?: string;
    buttonHref?: string;
}) {
    return (
        <div style={{margin: "auto", maxWidth: "1400px", display: "flex", alignContent: "center", flexDirection:"row", padding: "80px 48px", gap:'60px', justifyContent: "space-between"}}> 
         <div style={{ display: "flex", flexDirection:"column", gap: "72px"}}> 
                <div style={{display: "flex", flexDirection:"column", gap: "14px"}}>
                    <div
                        style = {{
                            color: "#131517",
                            fontFamily: "Montserrat",
                            fontSize: "54px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                            letterSpacing : "-1px"
                        }}>{props.title}</div>
                    <div style = {{
                            color: "#51575E",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "130%",
                            letterSpacing : "0.5px"
                        }}>{props.description}</div>
                    </div>
                <div style = {{display: "flex", flexDirection:"row", gap: "100px" }}>
                    <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
                        <div style = {{
                                color: "#131517",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "700"
                        }}>Team</div> 
                        <div style = {{
                                color: "#51575E",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "151.8%"
                        }}>{props.team}</div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
                        <div style = {{
                                color: "#131517",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "700"
                        }}>Role</div> 
                        <div style = {{
                                color: "#51575E",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "151.8%"
                        }}>{props.role}</div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
                        <div style = {{
                                color: "#131517",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "700"
                        }}>Peroid</div> 
                        <div style = {{
                                color: "#51575E",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "151.8%"
                        }}>{props.period}</div>
                    </div>
                </div>
                
            </div>
            <div>{props.showButton && props.buttonLabel && props.buttonHref && (
                    <OpenButton label={props.buttonLabel} href={props.buttonHref} />
                 )}</div>
        </div>
    )
}
