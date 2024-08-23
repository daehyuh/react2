"use client";
import "./page.css";

function Calc(){

    function calc(){
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;
        let result = document.getElementById("result");

        result.value = Number(x)+Number(y);
    }
    
    return(
        <div class="calc">
            <input id="x"/>
            <input id="y"/>
            <input onClick={calc} id="button" type="button" value="계산"/>
            <input id="result"/>
        </div>
    )
}


export default function App() {

return (
    <>
        <h1>계산기 프로그램</h1>
        <Calc/>
    </>
);
}