import '../App.css';
import '../style.css';
import '../font.css';
import '../workDetailPage/style_works.css';

export function ArticleTitle(props: {
    title: string; 
    description : React.ReactNode ;
    category : string;
    date : string;
    showButton?: boolean;
    buttonLabel?: string;
    buttonHref?: string;
}) {
    return (
        <div style={{margin: "auto", maxWidth: "1000px", display: "flex", alignContent: "center", flexDirection:"row", padding: "80px 48px", gap:'40px', justifyContent: "space-between"}}> 
         <div style={{ display: "flex", flexDirection:"column", gap: "60px"}}> 
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
                    <div style={{display: "flex", flexDirection:"row", gap: "8px"}}>
                        <div style = {{
                                color: "#131517",
                                fontSize: "16px",
                                fontWeight: "700"
                        }}>{props.category}</div> 
                        ·
                        <div style = {{
                                color: "#51575E",
                                fontSize: "16px",
                                fontWeight: "400"
                        }}>{props.date}</div>
                    </div>
                
            </div>
            <div>
        </div>
        </div>
    )
}
