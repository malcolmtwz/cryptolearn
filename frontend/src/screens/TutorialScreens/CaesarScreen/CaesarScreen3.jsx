import React, { useState, useEffect } from "react";
import "./CaesarScreen3.css";
import CaesarEncrypter from "../../../components/Encrypters/CaesarEncrypter/CaesarEncrypter";
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import SideBar from "../../../components/SideBar/SideBar";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";

import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";
import CaesarTable from "../../../components/Tables/CaesarTable/CaesarTable";

function CaesarScreen3() {

    return(
        
        <div className="caesar3-screen">
            <div className="caesar3-background">
                <NavigationButtonBack to="/caesar2"/>

                
<h2 className = "title"> Quiz Time</h2>
                
                <h4> Can you decrypt this encrypted message 'CsyKsxMx', which is shifted by 4, into a proper message?</h4>
                
                
                <hr className="border-line"/>

                <AnswerCheck correctAnswer="YouGotIt" hint="Beware that the answer is case-sensitive!"/>
                
                <CaesarTable defaultRotation="0" keepClosed={1}/>

                {/* <NavigationButton to="/caesar3" /> */}

                
            </div>
        </div> 
    );

    
}

export default CaesarScreen3;