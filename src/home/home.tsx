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
                <p class="sub">Located in Russia, eager to relocate to France</p>
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
            <p>I made a telegram game <a target="_blank" href="https://t.me/ra_minesweeper_bot">Minesweeper</a>.</p>
            <p>I love learning languages; currently I am learning French. I listen to the podcast "The Debug Log" about game development. And love to run in parks.</p>
            <br />
            <p>I am hardcore PC gamer.</p>
            <p>I love a lot of PC games of different genres, such as FPS, Action, RPG, RTS/TBS, Survaival-Craft. Games of those genres:</p>
            <p> MM6, Heroes III, Gothic 2, Dark Souls, Cyberpunk 2077, Total Annihilation, AoE2 HD, Warcraft 3, Call of Duty Black Ops 2 (with elements of turn based tactics), 7 Days to Die, Minecraft, Terraria, etc.</p>
            <p>I don't play mobile games much. Mobile games I like: Hidden City (HOPA), Orna (GPS MMORGP), HearthStone, PvZ 2, Rush Royale (TD with cards), TD Heroes.</p>
            <br />
            <p>I want to enter GameDev industry with the possibility to grow into a Game Designer, or into a Graphics Programer C++, or into a 3d Modeler, to make PC hardcore AAA games.</p>

            <h2>Work experience (None in GameDev)</h2>
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
            <p>In my work I like to use such tools:</p>
            <p>I use <span class="skill" data-tippy-content={"Basic level, I can cherry pick redundant commit with help of tutorial. I understand the concept of atomic commits and try to follow"}>Git</span> on a daily basis to commit to Github, when working on some projects</p>
            <p>I am learning <span class="skill" data-tippy-content={"Making a donut by some tutorial!"}>Blender</span></p>
            <p>I created several screens in <span class="skill" data-tippy-content={"I also used it before in my work as a Frontend Dev, to build web interfaces"}>Figma</span> for my pet project game</p>
            <p>I love to use <span class="skill" data-tippy-content={"For organizing knowledge and making a game design of my ideas"}>Xmind</span></p>
            <p>Use <span class="skill" data-tippy-content={"Many, many years of basic usage"}>Paint.net</span></p>
            <br />
            <div class="horiz">
                <span class="skill" data-tippy-content="Proficient Level. Overall 6 years">TypeScript</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>Unity / C#</span>
                <span class="skill" data-tippy-content={BASIC_LEVEL}>SQL</span>
            </div>
            <br />
            <div class="horiz">Practicing in
                <span class="skill" data-tippy-content="To grow into something bigger" >C++</span>
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