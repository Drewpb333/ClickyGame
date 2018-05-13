import React, {Component} from 'react';
import Header from './header';

class Game extends Component {
    state = {
        score: 0,
        highestScore: 0
    };

    shufflePhotos = () => ;
    //use fisher-yates shuffle here
    

    componentDidMount () {
        this.shufflePhotos();
    }


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
        <div className="peanuts-images">
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[1]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[2]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[3]}></div>
                <div className="col-2-xs"></div>
            </div>
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[4]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[5]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[6]}></div>
                <div className="col-2-xs"></div>
            </div>
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[7]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[8]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[9]}></div>
                <div className="col-2-xs"></div>
            </div>
            <div className="row">
                <div className="col-2-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[10]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[11]}></div>
                <div className="col-1-xs"></div>
                <div className="col-2-xs" hasBeenClicked={false} id={photos[12]}></div>
                <div className="col-2-xs"></div>
            </div>
        </div>
    };
}

export default Game;