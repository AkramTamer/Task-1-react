import "./Hero.css";
import heroImg from "../assets/website-min.png";

function Hero(){
    return(
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-text">
                    <div className="badge">
                        Don't miss limited-time savings:<b>Savings 20%</b>
                    </div>
                    <h1>Everything for Your Site to Succeed</h1>
                       <p className="credit" >
                        Image from <a href="https://www.freepik.com">Freepik</a>
                    </p>
                    <br></br>
                    <div className="hero-action">
                    <a href="#" className="hero-btn">Get Started</a>
                    <div className="price">
                        <span>starting at only</span>
                        <b>$4.75/mo*</b>
                        </div>
                        </div>
                 

                </div>
                <img className="hero-img" src={heroImg}  alt="Website hosting"/>
            </div>
        </section>
    );
}
export default Hero;