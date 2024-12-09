
import { render } from 'preact'
import Router, { Route } from "preact-router"
import './style.css'
import { Minesweeper } from "./minesweeper/minesweeper"
import { Home } from "./home/home"
import { Uno } from './uno/uno'

const base = `portfolio`;
export const homeUrl = `${base}/`;
export const minesweeperUrl = `/${base}/minesweeper`;
export const unoUrl = `/${base}/uno`;

const App = () => {
    return (
        <Router>
            <Route path={homeUrl} component={Home} />
            <Route path={minesweeperUrl} component={Minesweeper} />
            <Route path={unoUrl} component={Uno} />
        </Router>
    )
}

render(<App />, document.getElementById('app')!)