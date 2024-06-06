import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import "../App.css";

const Employability = () => {
    return (
        <div>
            <Header />
            <section class="week-summary">
                <h2>Week 7 - Employability & LinkedIn Strategies</h2>
                <div class="topic">
                    <h3>LinkedIn Profile Enhancements</h3>
                    <p>Focus on technical and soft skills relevant to your industry. Utilize LinkedIn's skill assessments and endorsements to validate your abilities. Remember, quality over quantity applies when listing up to 50 skills.</p>
                    <p>Consider also responding to key interview questions on your profile to showcase transferable skills.</p>
                </div>
                <div class="topic">
                    <h3>Content Strategy for LinkedIn</h3>
                    <p>Engage your network with meaningful posts. Here are ideas:</p>
                    <ul>
                        <li><strong>Ask questions</strong> to spark conversation.</li>
                        <li><strong>Offer motivation</strong> or shout out a successful project.</li>
                        <li><strong>Share insights</strong> from your experiences across jobs or industries.</li>
                        <li><strong>Highlight achievements</strong> or start a content series for consistency.</li>
                        <li><strong>Create lists</strong> or welcome new users to build community.</li>
                    </ul>
                    <p>Read more on <a href="https://skaled.com/insights/what-should-i-post-on-linkedin-99-ideas/" target="_blank" rel="noopener">posting ideas for LinkedIn</a>.</p>
                </div>
                <div class="topic">
                    <h3>LinkedIn Engagement Tips</h3>
                    <ol>
                        <li>View each diary entry as potential content.</li>
                        <li>Remember, if it interests you, it will interest others.</li>
                        <li>Challenge yourself to post more frequently to increase visibility.</li>
                        <li>Use hashtags and tags to expand your reach.</li>
                    </ol>
                </div>
                <div class="topic">
                    <h3>Exploring Career Paths: Entry-level and Apprenticeships</h3>
                    <p>Identify junior or entry-level roles by looking for terms like 'trainee', 'junior', or 'graduate'. Seek roles where skills are 'desirable' for a better chance at qualifying.</p>
                    <p>Apprenticeships combine work with study to gain skills and a qualification. They can last from 1 to 5 years and cover various levels, from GCSE equivalent up to degree level.</p>
                    <p>Off-the-job training is part of apprenticeships, ensuring you learn the necessary skills while working. It's required that 20% of your time is dedicated to this type of training.</p>
                    <p><strong>Apprenticeship salaries</strong> vary by sector and level, with many employers paying above the minimum wage. The tech sector, in particular, may offer higher wages due to the demand for skilled professionals.</p>
                </div>
                <div class="topic">
                    <article>
                        <h2>Imposter Syndrome</h2>
                        <p>imposters Syndromeome is psychological term that refers to a pattern of behavior where an individual doubt their abilities and have constant fear of being exposed as an imposter.</p>
                        <h3>How to approach imposter Syndrome</h3>
                        <h4> Challenge your doubts</h4>
                        <p>- Accurate self-appraisal - the more that you challenge your thoughts, the more you will start to accurately assess your strengths and areas for improvement - it's about being honest, rather than negative.</p>
                        <p>- Risk-taking and initiative - when you start to challenge your thoughts, you become more  willing to take more risks, believe in yourself and seize opportunities - this ultimately leads to personal and professional growth</p>
                        <p>- Reduces anxiety and stress by reducing the emotional impact of
                            negative thoughts</p>
                        <p>- Can help you to tap into your full potential and enhance your
                            resilience</p>
                        <h4> Acccept Praise/Feedback</h4>
                        <p>- Validation of achievement - accepting praise reinforces the idea
                            that you are deserving of any recognition that you receive</p>
                        <p>- External perspective - it can help you to understand the views of
                            others who have a more objective view. Accepting feedback can
                            help you to see your own contributions and appreciate your
                            impact.</p>
                        <p>- Enhance motivation - it can motivate you to continue to work at a
                            high level, helping to maintain or exceed performance</p>
                        <h4> Asking questions and learning</h4>
                        <p>Increasing your confidence - as you acquire more knowledge. you
                            become more confident in your own abilities</p>
                        <p>Validation of skills - learning and asking questions often leads to receiving
                            positive feedback/hearing that you are on the right track</p>
                        <p>Normalising mistakes - helping to reduce the fear of failure by
                            acknowledging that mistakes are part of the learning process</p>
                    </article>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Employability
