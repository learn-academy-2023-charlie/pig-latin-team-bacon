import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      
      // Story 1 pseudocode ->
      // input: string
      // output: string
      // words begininning with vowel, add "way" to the end
      // in the `vowelsArray`use the built in method `.includes`to include the eachWord that has the first index with a vowel
      // return the words that begin with a vowel plus the string "way".

      // Story 2 pseudocode ->
      // input: string
      // output: string
      // words beginning with `qu`, move the consonant and the `u` to the end and add "ay".
      // use the `.slice` built in method to slice `eachWord` making a subset of the "0,1" indexes.
      // return the remainder of the string starting at the second index plus the string `quay`.

      // Story 3 pseudocode ->
      // input: string 
      // output: string that has 
      // words that have no vowels other than "y" translated by moving all the consonant to the end and add "ay".
      // .include on eachWord to check if the word includes the letter y
      // created a new variable called consonant 
      // use the `.slice` built in method to slice `eachWord` with the starting index of 0 and ending in the index that includes the letter y.
      // return the "y" + consonant + "ay" to translate the word to pig latin. Which is our main goal!!


      // Story 4 pseudocode ->
      // input: string
      // output: words with vowals at front and consonants at the end + 'ay'


      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      if (vowelsArray.includes(eachWord[0])) {
        return eachWord + "way"; }
        else if (eachWord.slice(0, 2) === 'qu') {
          return eachWord.slice(2) + 'quay';
        }
      // yfray took everything in fornt of y and moved it the back and added ay
      else if (eachWord.includes("y")) {
        const consonant = eachWord.slice(0,eachWord.indexOf("y"))
        return "y" + consonant + "ay"
    } else {
      return eachWord + "ay"
    }
    
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App