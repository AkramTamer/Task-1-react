import "./SupportSection.css";
import supportImg from "../assets/team-4-min.png";
export default function SupportSection(){
    return(
        <section className="support-section">
            <div className="support-image">
                <img src={supportImg} alt="support"/>
                
            </div>
            <div className="support-content">
                <h2>24/7/365 Support</h2>
                <p>
                    Sample text. Click to select the Text Element. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <span className="support-credit">
                    Image from{""}
                    <a href="https://www.freepik.com" alt="24/7/365" targer="_blank" rel="noreferrer">Freepik</a>
                </span>
                <button type="button">Get Started</button>
            </div>
        </section>
    )
}