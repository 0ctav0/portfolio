import tippy from "tippy.js"
import "tippy.js/dist/tippy.css"
import { useEffect } from "preact/hooks"
import Me from "./img/me.jpg"
import Telegram from "./img/telegram.png"
import Mail from "./img/mail.png"
import Mine from "./img/mine-100.webp"
import UnoImg from "./img/uno.webp"
import { minesweeperUrl, unoUrl } from "../main"

const BASIC_LEVEL = "Basic level";

export const Home = () => {
    useEffect(() => {
        tippy("[data-tippy-content]", {
            duration: 0,
            arrow: false,
            delay: [500, 200],
        });
    }, [])
    return (
        <>
            <div class="me">
                <img src={Me} alt="Anna Ra Game Developer" />
                <h1 class="name">Anna Ra</h1>
                <p class="sub">Located in Russia, eager to relocate</p>
            </div>
            <h1>Game Developer</h1>
            <h2>Contacts</h2>
            <div class="horiz">
                <a class="horiz" target="_blank" href="https://t.me/anna_gamedev"><img alt="Link to telegram" width={32}
                    height={32} src={Telegram} />anna_gamedev</a>

                <a class="horiz" href="mailto:anna.ra.phoenix@gmail.com"><img alt="Link to mail" width={32} height={32}
                    src={Mail} />anna.ra.phoenix@gmail.com</a>

            </div>
            <h2>About Me</h2>
            <p>I am pretty artistic. 💃 Love to have fun, play, think of, and create video games. I listen to the podcast "The Debug Log" about Game Development.</p>
            <p>I have 4 years of work experience as a developer, 2 of them as a frontend developer, mostly on React.</p>
            <h2>Skills</h2>
            <div class="horiz">
                <span class="skill" data-tippy-content="Proficient Level. Overall 8 years. Work: 2 years as React frontend dev">TypeScript</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Unity / C#</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Figma</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Git</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>SQL</span>
            </div>
            <br />
            <div class="horiz">
                <span class="skill" data-tippy-content="Basic level. I actively improve it" >C++</span>
                <a class="badge" target="_blank" href="https://codewars.com/users/0ctav0"><img src="https://www.codewars.com/users/0ctav0/badges/micro" /></a>
            </div>

            <h2>Games</h2>
            <div id="games-gallery">
                <a href={minesweeperUrl}><img src={Mine} alt="Minesweeper" /></a>
                <a href={unoUrl}><img src={UnoImg} alt="Uno" /></a>
            </div>
        </>
    )
}