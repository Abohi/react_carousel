import React from 'react'
import { Typography,Box } from '@material-ui/core'
import PlantImg from "../images/plant_slide.png";
import BoxStopImg from "../images/boxstop_slide.png";
import GraduationImg from "../images/graduation_slide.png";
import HouseImg from "../images/house_slide.png";
import HouseImg2 from "../images/house_slide2.png";
import MotorImg from "../images/motor_slide.png";
import WalletImg from "../images/wallet_slide.png";
import PiggyImg from "../images/piggy_slide.png";
import { findByLabelText } from '@testing-library/react';

const slideArray = [
    [BoxStopImg, 
        GraduationImg,
         PlantImg, 
         WalletImg, 
         HouseImg, 
         PiggyImg],

    ["I want to study",

    "I want to Pass a",

    "I want to grow",

    "I want to retire",

    "I want to pay",

    "I want to be"
    ],
    [
        "abroad",
        "Licensing Exam",
        "my business",
        "wealthy",
        "for rent",
        "debt free"

    ]
]
function Deck_Mobile(props) {
    return (
        <Box style={{
            ...styles.card,
            backgroundImage: `url(${slideArray[0][props.index]})`


        }}>
            <Typography style={styles.typographyStyle}>
                {slideArray[1][props.index]}
            </Typography>
            <Typography style={styles.typographyStyle2}>
                {slideArray[2][props.index]}
            </Typography>

        </Box>
    )
}

const styles = {
    card: {
        position:"relative",
        height: "200px",
        margin:"3% 5% 0% 5%",
        boxSizing: "border-box",
        backgroundImage: `url(${PlantImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

            

    },
    typographyStyle: {
        position: "absolute",
        right: "20px",
        top: "35%",
        fontSize: "20px",
        fontWeight: "500",
        color: "#fff"
    },
    typographyStyle2: {
        position: "absolute",
        right: "20px",
        top: "50%",
        fontSize: "20px",
        fontWeight: "500",
        color: "#fff"
    },
    typographyStyle3: {
        position: "absolute",
        right: "20px",
        top: "50%",
        fontSize: "20px",
        fontWeight: "500",
        color: "#fff"
    }
}


export default Deck_Mobile;
