import { HashRouter, Match, Link } from 'react-router'
import React from 'react'
import Home from './Components/Home'
import Examples from './Components/Examples'

const App = () => {
    return (
        <HashRouter>
            <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Liform</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Main</Link></li>
                            <li><Link to="/examples">Examples</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


                {/*<Miss component={NoMatch}/>*/}
            <div className="container">
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/examples" component={Examples} />
            </div>
            </div>
        </HashRouter>
    )
}

export default App