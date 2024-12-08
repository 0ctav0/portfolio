import Me from "./me.jpg"
import Telegram from "./telegram.png"
import Mail from "./mail.png"
import MinesweeperWeb from "./minesweeper-frontend/game-field.webp"
import MinesweeperD3D from "./minesweeper-d3d11/game-field.webp"
import Atlas from "./minesweeper-d3d11/atlas.webp"


export const App = () => {
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
            <p>I am pretty artistic. 💃 Love to have fun, play, think of, and create video games. I listen to the podcast "The
                Debug Log" about Unity Game Development.</p>
            <p>I have 4 years of work experience as a developer, 2 of them as a frontend developer, mostly on React.</p>
            <h2>Skills</h2>
            <div class="horiz">
                <span>JavaScript</span>
                <span>C++</span>
                <span>Unity</span>
                <span>C#</span>
                <span>Blender</span>
                <span>Figma</span>
                <span>Git</span>
                <span>SQL</span>
            </div>

            <h2>Pet Projects</h2>

            <details class="accordion" open>
                <summary>Minesweeper Frontend</summary>
                <div class="vert">
                    <img alt="Minesweeper frontend game field" src={MinesweeperWeb} height={400} />
                    <a target="_blank" href="https://github.com/0ctav0/minesweeper-v3-frontend">Github: minesweeper-v3-frontend</a>
                    <p>This is my third version of Minesweeper made in Web. I used TypeScript + Vite.
                        Standard drawing calls to the HTMLCanvas element using CanvasRenderingContext2D.
                        Everything is pretty easy compared to the DirectX low-level API.
                    </p>
                    <p>It's integrated into the Telegram bot: <a target="_blank"
                        href="https://t.me/ra_minesweeper_bot">https://t.me/ra_minesweeper_bot</a></p>
                </div>
            </details>

            <details class="accordion">
                <summary>Minesweeper DirectX 11</summary>
                <div class="vert">
                    <img alt="Minesweeper DirectX game field" src={MinesweeperD3D} />
                    <a target="_blank" href="https://github.com/0ctav0/D3D11Minesweeper">Github: D3D11Minesweeper</a>
                    <p>I struggled a lot. There are a lot of new topics. More of that is a lot of outdated information. Old DirectX
                        11
                        functions were deprecated, and Effects (FX) was also deprecated. I used <a target="_blank"
                            href="https://github.com/microsoft/DirectXTK">DirectXTK</a> since it has functions that replace deprecated old
                        ones and has easy-to-use many of the "vanilla" DirectX features.</p>
                    <p>I briefly got to know Windows API programming and the standard Windows message queue loop. DirectX 11 setup
                        code,
                        uploading shaders, different kinds of buffers into memory, and game loop.</p>
                    <p>I used a texture atlas for rendering many sprites for the game.</p>
                    <img alt="Texture atlas" src={Atlas} />
                </div>
            </details>
        </>
    )
}
