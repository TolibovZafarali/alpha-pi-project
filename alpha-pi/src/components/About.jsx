import Header from "./Header";
import Footer from "./Footer";
import "./About.css"

const About = () => {
    return (
        <div className="wrapper">
            <Header />

            <main className="about-us-main">
                <div className="about-us-content">
                    <h1>About Alpha-Pi</h1>
                    <p>Alpha-Pi is a secure, end-to-end platform designed to bridge the gap between aspiring entrepreneurs and verified investors. Built on a foundation of transparency, guidance, and efficiency, Alpha-Pi streamlines every step of launching and scaling a small business.</p>

                    <hr />

                    <h2>Our Mission</h2>
                    <p>To empower visionary founders with the tools, mentorship, and investor access they need to turn ideas into thriving enterprises.</p>

                    <hr />

                    <h2>What We Offer</h2>
                    <ol>
                        <li>
                            Guided Business Registration & Private Profiles
                            <ul>
                                <li>Step-by-step compliance checklists and registration guidelines</li>
                                <li>Professional profile builder that showcases your venture to a vetted network of investors</li>
                            </ul>
                        </li>

                        <li>
                            Mentor Network & Location Management
                            <ul>
                                <li>Access and connect with industry-seasoned mentors for one-on-one coaching</li>
                                <li>Store, categorize, and manage potential business locations</li>
                                <li>Securely save contact details and notes for seamless networking</li>
                            </ul>
                        </li>

                        <li>
                            Investor Marketplace
                            <ul>
                                <li>Rigorous verification ensures only accredited investors can view business profiles</li>
                                <li>Advanced search filters to uncover ventures that match your investment thesis</li>
                                <li>Real-time notifications when new businesses align with your criteria</li>
                            </ul>
                        </li>
                    </ol>

                    <hr />

                    <h2>Why Alpha-Pi</h2>

                    <ul>
                        <li><strong>Privacy & Trust: </strong>Your information is shared only with authenticated investors and mentors.</li>
                        <li><strong>Action-Oriented: </strong>every feature is built to accelerate progress from concept to capital.</li>
                        <li><strong>Scalable Support: </strong>Whether you're launching your first side hustle or seeking series-A funding, Alpha-Pi grows with you.</li>
                    </ul>

                    <hr />

                    <table>
                        <tr>
                            <th>Subscription Mode</th>
                            <th>Target User</th>
                            <th>Key Features</th>
                            <th>Monthly Price (USD)</th>
                        </tr>

                        <tr>
                            <td>Basic</td>
                            <td>Entrepreneurs</td>
                            <td>Guided business registration, private investor-only profile</td>
                            <td>Free</td>
                        </tr>

                        <tr>
                            <td>Pro</td>
                            <td>Entrepreneurs</td>
                            <td>Everything in Basic + unlimited mentor connections, location & contact management</td>
                            <td>$29</td>
                        </tr>

                        <tr>
                            <td>Investor</td>
                            <td>Investors</td>
                            <td>Full access to all verified business profiles, advanced search filters, real-time alerts</td>
                            <td>$49</td>
                        </tr>
                    </table>
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default About;