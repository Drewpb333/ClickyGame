import React from 'react';

const Header = props => (
    //not sure what to call first div
    <div className="jumbotron text-center">
        <h1>Clicky Game: Peanuts Version</h1>
        <h2>Score: <span score={props.score}></span> || Highest Score: <span highestScore={props.highestScore}></span></h2>
    </div>
);

export default Header;