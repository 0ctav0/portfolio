
import { render } from 'preact'
import Router, { Route } from "preact-router"
import './style.css'
import { Minesweeper } from "./minesweeper/minesweeper"
import { Home } from "./home/home"

const base = `portfolio`;
export const homeUrl = `${base}/`;
export const minesweeperUrl = `/${base}/minesweeper`;

const App = () => {
    return (
        <Router>
            <Route path={homeUrl} component={Home} />
            <Route path={minesweeperUrl} component={Minesweeper} />
        </Router>
    )
}

render(<App />, document.getElementById('app')!)