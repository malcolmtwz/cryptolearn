import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json"
import VigenereQuestions from "../../components/RandomQuestionsGenerator/VigenereQuestions";
import VigenereCipherAccordion from "../../components/Tables/VigenereTable/VigenereCipherTable";

function VigenereFruitLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={fruits} levelChoice={1} cipherType={VigenereQuestions}/>
                <VigenereCipherAccordion isAccordionExpanded={false}/>
            </div>
        </div>
    );
}

export default VigenereFruitLevelOneScreen;