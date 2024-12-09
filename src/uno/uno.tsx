import Vid from "./uno-multiplayer-gameplay.mp4"
import "./uno.css"

export const Uno = () => {
    return (
        <div class="vert">
            <h1>Uno playable prototype</h1>
            <h2>110 hours spent totally</h2>
            <h2>~70 hours if I was more experienced</h2>
            <h2>Stack: Unity C#, Nodejs Typescript</h2>
            <p>I created Uno prototype for a client.</p>
            <p>I learnt a lot in Unity and C#. I used websockets. Server is on Nodejs using Typescript.</p>

            <p>At the first I created a game logic on the client while creating a singleplayer game. But when I started creating a Nodejs server I had to create a game logic once again using different language. Though it could be more convient to use server on C#. I choosed Nodejs because I have frontend background and wanted to try Nodejs. And my experince in js/ts allowed me to implement features fast.</p>

            <p>In mutiplayer game I had to implement a way to communicate the client and the server using websockets. I encoded all needed data in bytes. I sent buffers. As the first byte is endpoint value to determine a specific function what is happening and how to parse rest data.</p>

            <p>I used the authoritative server meaning that the client is sending intention of some action not declaring to do the server something. That is preventing cheating. The server has guards like check if sent a card has in player hands, if a player doesnt have the specified card then the server stops a function execution and logs that player is possibly a cheater.</p>

            <p>I used tests on the server and it's rewarding!</p>

            <div id="vid-container">
                <video id="vid" autoplay muted loop controls>
                    <source src={Vid} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    )
}