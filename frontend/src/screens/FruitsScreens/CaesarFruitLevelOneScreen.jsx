import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json"
import CaesarTable from "../../components/Tables/CaesarTable/CaesarTable"
import CaesarQuestions from "../../components/RandomQuestionsGenerator/CaesarQuestions";

function CaesarFruitLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={fruits} levelChoice={1} cipherType={CaesarQuestions}/>
                <CaesarTable defaultRotation={0} keepClosed={0}/>
            </div>
        </div>
    );
}

export default CaesarFruitLevelOneScreen;