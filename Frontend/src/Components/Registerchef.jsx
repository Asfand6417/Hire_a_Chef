// from "../Redux/Cook_Details/actions";
import { useNavigate } from "react-router-dom";
import "../Styles/Registerchef.css"
import React from 'react'

function Registerchef() {
  return (
    <div>
      <form method='' action=''>
      <div class="user__details">
      <div class="input__box">
        <span class="details">Full Name</span>
        <input type="text" placeholder="E.g: John Smith" required></input>
      </div>
      <div class="input__box">
        <span class="details">Username</span>
        <input type="text" placeholder="johnWC98" required> </input>
      </div>
      <div class="input__box">
        <span class="details">Email</span>
        <input type="email" placeholder="johnsmith@hotmail.com" required></input>
      </div>
      <div class="input__box">
        <span class="details">Mobile Number</span>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required></input>
      </div>
       <div class="input__box">
        <span class="details">Experience</span>
        <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="5 Year" required></input>
      </div>
       <div class="input__box">
        <span class="details">Ratings</span>
        <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="5 Star" required></input>
      </div>
       <div class="input__box">
        <span class="details">Reviews</span>
        <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="5 Star" required></input>
      </div>
      <div class="input__box">
        <span class="details">Password</span>
        <input type="password" placeholder="********" required></input>
      </div>
      <div class="input__box">
        <span class="details">Confirm Password</span>
        <input type="password" placeholder="********" required></input>
      </div>
 <div class="input__box">
        <span class="details">Rate</span>
        <input type="number" pattern="" placeholder="25" required></input>
      </div>
    </div>
    <div class="gender__details">
      <input type="radio" name="gender" id="dot-1"></input>
      <input type="radio" name="gender" id="dot-2"></input>
      <input type="radio" name="gender" id="dot-3"></input>
      <span class="gender__title">Categories</span>
      <div class="category">
        <label for="dot-1">
          <span class="dot one"></span>
          <span>Vegetable </span>
        </label>
        <label for="dot-2">
          <span class="dot two"></span>
          <span>Non Vegetable</span>
        </label>
        <label for="dot-3">
          <span class="dot three"></span>
          <span>Chinese</span>
        </label>
      </div>
    </div>
    <div class="button">
      <input type="submit" value="Register"></input>
    </div>
      </form>
    </div>
  )
}

export default Registerchef
