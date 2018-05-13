import React from 'react';

const Header = props => (
    //not sure what to call first div
    <div className="Banner">
        <h1>Clicky Game</h1>
        <h3>Score: <span score={props.score}></span> || Highest Score: <span highestScore={props.highestScore}></span></h3>
    </div>
);

export default Header;