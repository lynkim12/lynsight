import './App.css';
import './style.css';
import './font.css';

export function WorkTitle(props: {
    title: string; 
    description : string;
    team : string;
    role : string;
    period : string;
}) {
    return (
        <div style={{margin: "auto", maxWidth: "1400px", alignContent: "center", padding: "80px 48px", display: "flex", flexDirection:"column", gap: "72px"}}>
            <div style={{display: "flex", flexDirection:"column", gap: "14px"}}>
                <div 
                    style = {{
                        color: "#131517",
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
    )
}
