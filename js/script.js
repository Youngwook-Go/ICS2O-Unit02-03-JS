// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Oct 2022
// This file contains the JS functions for index1.html

/**
 * This function gets users street adress and shows it back to user.
 */

function submit() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("info").innerHTML =
    "Your info is: " + streetNumber + " " + streetName + "."
}