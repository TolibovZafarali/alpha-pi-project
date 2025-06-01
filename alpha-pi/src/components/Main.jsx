import StyledLink from "./StyledLink";
import "./HomePage.css"

const Main = () => {
    return (
        <main className="home-page">
            <div className="welcome-text">
                <h2>Start Your Business or Invest in One That Matters.</h2>
                <p>Whether you're building from scratch or investing in tomorrow's success — <strong>Alpha-Pi</strong> brings ideas to life.</p>
                <br />
                <hr />
                <br />
                <div>
                    <p>Start your journey here:</p>
                    <StyledLink destination={`/application`}>
                        <button className="start-business-btn">Start business</button>
                    </StyledLink>

                    <StyledLink destination={`/business-profiles`}>
                        <button className="invest-btn">Start investing</button>
                    </StyledLink>
                </div>

                <p>Already have an account? Sign in <StyledLink destination={"/login"}>here</StyledLink></p>

            </div>
        </main>
    );
}
 
export default Main;