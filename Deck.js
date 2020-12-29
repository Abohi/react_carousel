import React, { Component } from 'react'
import Card from './Card'
class Deck extends Component {


    constructor(props) {
        super(props)

        this.state = {
            cards: []
        }
        this.animation_in_progress = false;
    }


    componentDidMount() {
        var new_cards = [
            
        ];
        if(this.deck===null){
            return;
        }

        let total_number_of_cards = 6;
        let middle_card_by_index = Math.floor(total_number_of_cards / 2);

        let center = {
            x: parseFloat(this.deck.style.width) / 2,
            y: parseFloat(this.deck.style.height) / 2,
        }
        let new_x = 0;
        let new_y = 0;
        let new_zindex = 0;
        let new_scale = 1;
        for (let i = 0; i < 6; i++) {
            if (i < middle_card_by_index) {//left side of deck
                //order the cards
                new_x = center.x - (378 * (middle_card_by_index - i));
                new_y = center.y;

                //cascade the cards
                new_x = new_x + ((0.33 * 378) * (middle_card_by_index - i));

                //zindex the cards
                new_zindex = i;

                // Scale the cards
                new_scale = Math.pow(0.95, (middle_card_by_index - i));
            } else {// right side of deck
                new_x = center.x + (378 * (i - middle_card_by_index));
                new_y = center.y;

                //cascade the cards
                new_x = new_x - ((0.33 * 378) * (i - middle_card_by_index));

                //zindex the cards
                new_zindex = i * (-1.0);

                // Scale the cards 
                new_scale = Math.pow(0.95, (i - middle_card_by_index));
            }

          new_cards.push(<Card
            x={new_x}
            y={new_y}
            z_index={i === middle_card_by_index ? 100 : new_zindex}
            scale={new_scale}
            index={i}
            key={i}
            />
            );
            
           
        }

       

        this.setState({ cards: new_cards });
        
    }

    handle_next = () => {
        if(this.deck!==null){
                   
        if (!this.animation_in_progress) {
            this.animation_in_progress = true;
               
            let last_cards_left = this.deck.children[this.deck.children.length - 1].style.left;
            let last_cards_zIndex = this.deck.children[this.deck.children.length - 1].style.zIndex;
            let last_cards_transform = this.deck.children[this.deck.children.length - 1].style.transform;

            for (let i = this.deck.children.length - 1; i > 0; i--) {
                this.deck.children[i].style.transitionDuration = "1.0s";
                this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
                this.deck.children[i].style.zIndex = this.deck.children[i - 1].style.zIndex;
                this.deck.children[i].style.transform = this.deck.children[i - 1].style.transform;
            }

            // //special case
            // this.deck.children[0].style.transitionDuration = "0.2s";
            // this.deck.children[0].style.transform = `translate(-50%, -50%) scale(0)`;

            setTimeout(() => {
                this.deck.children[0].style.transitionDuration = "0.0s";
                this.deck.children[0].style.left = last_cards_left;
                this.deck.children[0].style.zIndex = last_cards_zIndex;
                this.deck.appendChild(this.deck.children[0]);
                setTimeout(() => {
                    this.deck.children[this.deck.children.length - 1].style.transitionDuration = "0.2s";
                    this.deck.children[this.deck.children.length - 1].style.transform = last_cards_transform;
                    this.animation_in_progress=false;
                }, 100)

            }, 700);

        }else{
            return;
        }
        }


       

    }
    
    // handle_previous = () => {

    //     if (!this.animation_in_progress) {
    //         this.animation_in_progress = true;

    //         let first_cards_left = this.deck.children[0].style.left;
    //         let first_cards_zIndex = this.deck.children[0].style.zIndex;
    //         let first_cards_transform = this.deck.children[0].style.transform;

    //         for (let i =0; i < this.deck.children.length-1; i++) {
    //             this.deck.children[i].style.transitionDuration = "1.0s";
    //             this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
    //             this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex;
    //             this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform;
    //         }

    //         //special case
    //         this.deck.children[this.deck.children.length-1].style.transitionDuration = "0.2s";
    //         this.deck.children[this.deck.children.length-1].style.transform = `translate(-50%, -50%) scale(0)`;

    //         setTimeout(() => {
    //             this.deck.children[this.deck.children.length-1].style.transitionDuration = "0.0s";
    //             this.deck.children[this.deck.children.length-1].style.left = first_cards_left;
    //             this.deck.children[this.deck.children.length-1].style.zIndex = first_cards_zIndex;
    //             this.deck.insertBefore(this.deck.children[this.deck.children.length-1],this.deck.children[0])
    //             setTimeout(() => {
    //                 this.deck.children[0].style.transitionDuration = "0.2s";
    //                 this.deck.children[0].style.transform = first_cards_transform;
    //                 this.animation_in_progress=false;
    //             }, 100)

    //         }, 700);

    //     }else{
    //         return;
    //     }
    // }

    render() {
        return (
            <div>
                <div ref={ref_id => this.deck = ref_id} style={styles.deck}>
                   {console.log(this.state.cards)}
                    {this.state.cards}
                    {setInterval(this.handle_next, 3000)}
                </div>
            </div>
        )
    }
}

const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "white",
    "orange",
    "pink",
    "grey",
    "yellow"
]

const styles = {
    deck: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        height: "231px",
        width: "378px",
        backgroundColor: "transparent",
    }
}

export default Deck;
