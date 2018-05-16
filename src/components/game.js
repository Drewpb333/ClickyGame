import React, {Component} from 'react';
import Header from './header';
import franklin from '../img/franklin.jpg'
import linus from '../img/linus.png';
import lucy from '../img/lucy.png';
import marcy from '../img/marcy.png';
import olaf from '../img/olaf.jpg';
import peanutsBanner from '../img/peanuts-banner.jpg'
import peppermintPatty from '../img/peppermint-patty.png';
import pigpen from '../img/pigpen.jpg';
import rerun from '../img/rerun.jpg';
import sally from '../img/sally.jpg';
import schroeder from '../img/schroeder.jpg';
import snoopy from '../img/snoopy.png';
import woodstock from '../img/woodstock.jpg';

const photosArr = [franklin, linus, lucy, marcy, olaf, peppermintPatty, pigpen, rerun, sally, schroeder, snoopy, woodstock];

class Game extends Component {
    state = {
        score: 0,
        highestScore: 0,
        photos: []
    };

    //fisher-yates shuffle
    shufflePhotos = arr => {
        let currentIndex = arr.length;
        let temporaryValue;
        let randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // picks a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // swaps it with another element
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        };
        this.setState({photos: arr});
    }

    componentDidMount() {
        this.shufflePhotos(photosArr);
    }

    alreadyClicked = hasBeenClicked => {
        if(hasBeenClicked && this.score > this.highestScore){
            this.highestScore = this.score;
            this.score = 0;
        }
        else if(hasBeenClicked && this.score < this.highestScore){
            this.score = 0;
        }
        else{
            this.score ++;
            this.shufflePhotos();
        }
    }

    render() {
        return(
        <div className="container-fluid">
            <Header score={this.state.score} highestScore={this.state.highestScore}/>
            {/* <div id="peanuts-banner">
                <img src={peanutsBanner} alt="Peanuts Banner"/>
            </div> */}
            <div className="peanuts-images">
                <div className="row">
                    <div className="col-2-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[0]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[1]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[2]} className="img-thumbnail"/>
                    </div>
                    <div className="col-2-xs"></div>
                </div>
                <div className="row">
                    <div className="col-2-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[3]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[4]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[5]} className="img-thumbnail"/>
                    </div>
                    <div className="col-2-xs"></div>
                </div>
                <div className="row">
                    <div className="col-2-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[6]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[7]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[8]} className="img-thumbnail"/>
                    </div>
                    <div className="col-2-xs"></div>
                </div>
                <div className="row">
                    <div className="col-2-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[9]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[10]} className="img-thumbnail"/>
                    </div>
                    <div className="col-1-xs"></div>
                    <div className="col-2-xs" alt="peanuts image" hasBeenClicked={false} onClick={this.alreadyClicked}>
                        <img src={this.state.photos[11]} className="img-thumbnail"/>
                    </div>
                    <div className="col-2-xs"></div>
                </div>
            </div>
        </div>)
    };
}

export default Game;