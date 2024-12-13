import MinesweeperWeb from "./web-game-field.webp"
import MinesweeperD3D from "./d3d-game-field.webp"
import Win from "./win.mp4"
import Defeat from "./defeat.mp4"
import Atlas from "./d3d-atlas.webp"

export const Minesweeper = () => {
    return (
        <>
            <details class="accordion" open>
                <summary>Minesweeper Web</summary>
                <div class="vert">
                    <img alt="Minesweeper frontend game field" src={MinesweeperWeb} height={400} />
                    <a target="_blank" href="https://github.com/0ctav0/minesweeper-v3-frontend">Github: minesweeper-v3-frontend</a>
                    <p>This is my third version of Minesweeper made in Web. I used TypeScript + Vite.
                        Standard drawing calls to the HTMLCanvas element using CanvasRenderingContext2D.
                        Everything is pretty easy compared to the DirectX low-level API.
                    </p>
                    <p>It's integrated into the Telegram bot: <a target="_blank"
                        href="https://t.me/ra_minesweeper_bot">https://t.me/ra_minesweeper_bot</a></p>
                    <p>Also I created a confetti effect for win effect. Wafe effect when clicking on a mine, to do that I had to initialize webgl context, create copy of a gamefield texture and apply to it graphic pipeline. I had to create vertex and fragment shaders with logic of wave effect.</p>
                    <div class="horiz">
                        <video style={{ width: 300 }} autoplay muted loop controls>
                            <source src={Win} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <video style={{ width: 300 }} autoplay muted loop controls>
                            <source src={Defeat} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
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