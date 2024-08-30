import { useState } from "react";

export default function TestTricon(){

    const [prevClick,setPrevClick]=useState(["Click"]);



    function clickkerdia(){
        console.log("Clicked!!!");
        alert("clicked!!");
        // document.getElementById("clicked_one").style({display: hidden});
        // document.getElementById("clicked_one").innerHTML("");
        setPrevClick("");
        
    }

    function nowresetit(){
        console.log("button resetting!!");
        // document.getElementById("clicked_one").style({display: visible});
        // document.getElementById("clicked_one").innerHTML("Click");
        setPrevClick("clicked");
        alert("done");
    }

    return <>
        <div className="Tricon">
            <div id="clicked_one" onClick={clickkerdia}>Click</div>
            <div onClick={nowresetit}>Reset</div>
        </div>
    </>
}