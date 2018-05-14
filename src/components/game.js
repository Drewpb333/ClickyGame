import React, {Component} from 'react';
import Header from './header';
import franklin from '../../public/img/franklin.jpg';
import linus from '../../public/img/linus.jpg';
import lucy from '../../public/img/lucy.jpg';
import marcy from '../../public/img/marcy.jpg';
import olaf from '../../public/img/olaf.jpg';
import peppermintPatty from '../../public/img/peppermint-patty.jpg';
import pigpen from '../../public/img/pigpen.jpg';
import rerun from '../../public/img/rerun.jpg';
import sally from '../../public/img/sally.jpg';
import schroeder from '../../public/img/schroeder.jpg';
import snoopy from '../../public/img/snoopy.jpg';
import woodstock from '../../public/img/woodstock.jpg';

const photosArr = [franklin, linus, lucy, marcy, olaf, peppermintPatty, pigpen, rerun, sally, schroeder, snoopy, woodstock];

class Game extends Component {
    state = {
        score: 0,
        highestScore: 0,
        photos: []
    };

    //fisher-yates shuffle
    shufflePhotos = arr => {
        let currentIndex = arr.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // picks a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swaps it with another element
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        };
        this.setState({photos: arr});
    }

    

    componentDidMount() {
        this.shufflePhotos(photosArr);
    }

    displayPhotos = arr => (

    )

    alreadyClicked = hasBeenClicked => (
        if(hasBeenClicked && this.score > this.highestScore){
            this.highestScore = this.score;
            this.score = 0;
        }
        else if(hasBeenClicked && this.score < this.highestScore){
            this.score = 0;
        }
        else{
            this.score ++;
        }
    )

    render() {
        return(
        <div className="peanuts-images">
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[0]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[1]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[2]}></div>
                <div className="col-2-xs"></div>
            </div>
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[3]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[4]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[5]}></div>
                <div className="col-2-xs"></div>
            </div>
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[6]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[7]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[8]}></div>
                <div className="col-2-xs"></div>
            </div>
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[9]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[10]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[11]}></div>
                <div className="col-2-xs"></div>
            </div>
        </div>)
    };
}

export default Game;