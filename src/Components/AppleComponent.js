import React, { useState } from 'react'

function AppleComponent() {

    const [numberOfApples, setNumberofApples] = useState(0)

    function AppleDisplay(numberOfApples) {

    if (numberOfApples===1){
        return `John has ${numberOfApples} apple`;
      }
      else if (numberOfApples===0 || numberOfApples>1){
        return `John has ${numberOfApples} apples`
      } 
      else {
        return  `John ows us ${Math.abs(numberOfApples)} apples`
      }
    }


    function IncreaseApple() {
        setNumberofApples(currentValue=>currentValue + 1)
    }

    function DecreaseApple() {
        setNumberofApples(currentValue=>currentValue -1)
    }

    function TooManyDisplay(){
        if (numberOfApples > 10) {
            return <h1>John has too many apples</h1>
        }
    }


    return (
        <>
        <div>
            <h1>{AppleDisplay(numberOfApples)}</h1>

        </div>
        <button  onClick={IncreaseApple} type="button" className="btn btn-success mr-2">Increase</button>
        <button style={{display: numberOfApples <=0 ? "None" : ""}} onClick={DecreaseApple} type="button" className="btn btn-danger mr-2">Decrease</button>
        {TooManyDisplay()}
        {/*numberOfApples >10 ? <h1>John has too many apples</h1> : ""*/}

        </>
    )
}

export default AppleComponent