import tippy from "tippy.js"
import "tippy.js/dist/tippy.css"
import { useEffect } from "preact/hooks"
import Me from "./img/me.jpg"
import Telegram from "./img/telegram.png"
import Mail from "./img/mail.png"
import Github from "./img/github.svg"
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

                <a class="horiz" target="_blank" href="https://github.com/0ctav0">
                    <img alt="Link to Github" src={Github} />
                    My Github</a>
            </div>
            <h2>About Me</h2>
            <p>I am pretty artistic. 💃 Love to have fun, play, think of, and create video games. I listen to the podcast "The Debug Log" about Game Development.</p>
            <p>I love a lot of PC games of different genres, such as FPS, Action, RTS/TBS, Survaival-Craft. Games of those genres: MM6, Heroes III, Gothic 2, Dark Souls, Cyberpunk 2077, Total Annihilation, 7 Days to Die, Terraria.</p>
            <p>I don't play mobile games much. Mobile games I like: Hidden City, Orna, HearthStone, PvZ 2, Rush Royale, TD Heroes.</p>

            <h2>Work experience</h2>
            <div id="work-exp">

                <a target="_blank" href="https://softline.ru/">Softline</a>
                <span>1 Year as tech specialist</span>
                {/* <span>Groovy, SQL, JavaScript</span> */}
                <span>Configuring ITSM platforms: Naumen ServiceDesk, ServiceNow, writing SQL to reports.</span>

                <a target="_blank" href="https://sgaz.pro/">Sgaz</a>
                <span>1 Year as fullstack dev</span>
                {/* <span>Scala, Java, SQL</span> */}
                <span>Developing AIS for construction. Fullstack on Scala, ORM, SQL, PostgreSQL.</span>

                <a target="_blank" href="https://digitalleague.ru/">Digital League</a>
                <span>1 Year as frontend dev</span>
                {/* <span>Typescript, React, Git, Npm</span> */}
                <span>Developing AISs for a couple of projects. Typescript, React, Git, Npm, Figma.</span>

                <a target="_blank" href="https://alloysoftware.com/">Alloy Software</a>
                <span>1 Year as frontend dev</span>
                {/* <span>Typescript, React, Git, Npm</span> */}
                <span>Developing AIS for discovering devices in a subnet. Typescript, React, Material Design, Cypress (E2E), Figma.</span>
            </div>

            <h2>Skills</h2>
            <div class="horiz">
                <span class="skill" data-tippy-content="Proficient Level. Overall 6 years">TypeScript</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Unity / C#</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Figma</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Git</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>SQL</span>
            </div>
            <br />
            <div class="horiz">
                <span class="skill" data-tippy-content="Basic level" >C++</span>
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