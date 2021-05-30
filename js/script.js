// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Guess-Number

"use strict"

// get a number of right answer
const number = Math.floor(Math.random() * 10)

function enterClicked() {
  //input
  const guess = parseInt(document.getElementById("guess").value)

  // process
  if (guess > number) {
    //output that answer 
    document.getElementById('answer').innerHTML = "It is too high!"
  } else if (guess < number) {
    //output that answer 
    document.getElementById('answer').innerHTML = "It is too low!"
  } else {
    document.getElementById('answer').innerHTML = "You are right!"
  }
}