import React from "react";
import "./GameScreen.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FaApple, FaCarrot } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import { Typography } from "@mui/material";




function GameScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <h1 className="h-1">Welcome to the Game Section!</h1>
                    <Typography variant="h5">The game will be a 10 question quiz, and each question will reward you with 1 point! </Typography>
                    <Typography variant="h5">Beware! A hint for a  specific question will cost you half a point! </Typography>
                    <hr className="border-line"/>
                    <Typography variant="h5">Below are the 2 topics available for the quizzes, any encrypted or decrypted questions will be based on the topic!</Typography>

                <div className="game-container">
                    <Link to="/selection/fruits">
                        <Button variant="primary" className="btn-lg quiz-btn-scale" >
                            <div className="d-flex flex-column align-items-center">
                            <FaApple className="mb-2" />
                            FRUITS
                            </div>
                        </Button>
                    </Link>

                    <Link to="/selection/vegetables">
                        <Button variant="success" className="btn-lg quiz-btn-scale ml-3" >
                            <div className="d-flex flex-column align-items-center">
                            <FaCarrot className="mb-2" />
                            VEGETABLES
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    
    );
}

export default GameScreen;