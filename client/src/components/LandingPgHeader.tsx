import "../styles/LandingPgHeader.scss";

type LandingHeaderProps = {
    title:String;
}

function LandingPgHeader(props:LandingHeaderProps){

    return(
            <div className="header-wrapper">
                <div className="header-title">{props.title}</div> <div className="header-divider" />
            </div>
    );

}

export default LandingPgHeader;