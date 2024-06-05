import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const Projects = () => {
    return (

        <><main>
            <div class="section">
                <div class="project-card">
                    <div class="project-content">
                        <h2 class="project-title"> Creating a journal website</h2>
                        <p class="project-description">This website was the first projetc for the course, using html and css we had to
                            put a website together to document what we were learning the project was originally just for two
                            weeks but I decided to continue with it as I found it helpful as way to practice web
                            development, but also as a way to keep notes and tasks together and organise them. </p>
                    </div>
                    <div class="project-image">
                        <img src="../assets/images/journal.png" alt="journal"/>
                        </div>
                    <div class="project-link">
                    <Link to="/journal" class="btn">View Project</Link> <a href="https://mcnsgit.github.io/submission_journal_project_tgc/" target="_blank" rel="noopener" 
                            class="btn">View Project</a>
                    </div>
                </div>
            </div>
        <div class="section">
                <div class="project-card">
                    <div class="project-content">
                        <h2 class="project-title"> Drum Kit</h2>
                        <p class="project-description">After learning how to interact with the DOM and figuring out how to create a key generator, the next challenge was creating a drum kit. It had to produce different sounds depending on the key presses and mouse clicks made by the user. </p>
                    </div>
                    <div class="project-image">
                        <img src="../assets/images/DrumKit.png" alt="Drum_Kit"/>
                        </div>
                    <div class="project-link">
                        <a href="https://mcnsgit.github.io/js-dom-drumkit-challenge/" target="_blank" rel="noopener"
                            class="btn">View Project</a>
                    </div>
                </div>
            </div>

        <div clas="section">
            <div class="project-card">
                <div class="project-content">
                    <h2 class="project-title"> Escape Room - Veil of Shadows</h2>
                    <p class="project-description">After learnig how to interact with the DOM and figuring out how to create a key generator the next challenge was going to be creating a drum kit. which had to make a differnt noise depending on which keyPresses and mouseClicks made my the user. </p>
                </div>
                <div class="project-image">
                    <img src="../assets/images/DrumKit.png" alt="Drum_Kit" />
                </div>
                <div class="project-link">
                    <Link to="/drumkit" class="btn">View Project</Link> <a href="https://mcnsgit.github.io/js-dom-drumkit-challenge/" target="_blank" rel="noopener"
                        class="btn">View Project</a>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </>
    )
}

export default Projects

