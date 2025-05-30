import Footer from "./Footer";
import Header from "./Header";

const SuccessfulMessage = () => {
    return (
        <div className="wrapper">
            <Header/>

            <main>
                <h1>Your message has been sent successfully</h1>
                <p>Please, allow us from 24 to 48 hours to review your message.</p>
            </main>

            <Footer />
        </div>
    );
}
 
export default SuccessfulMessage;