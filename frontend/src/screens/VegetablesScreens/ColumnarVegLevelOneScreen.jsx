import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetables from "../../data/vegetables.json"
import ColumnarQuestions from "../../components/RandomQuestionsGenerator/ColumnarQuestions";
import ColumnarTable from "../../components/Tables/ColumnarTable/ColumnarTable";

function ColumnarVegLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetables} levelChoice={1} cipherType={ColumnarQuestions}/>
                <ColumnarTable />
            </div>
        </div>
    );
}

export default ColumnarVegLevelOneScreen;