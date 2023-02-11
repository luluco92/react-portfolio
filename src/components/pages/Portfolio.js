import React from 'react';
import PJ1 from '../../img/pj1.png';
import PJ2 from '../../img/pj2.png';
import Placeholder from '../../img/placeholder.png';

export default function Portfolio() {
  return (
    <div className="reactab">
      <h2>Portfolio</h2><hr/>
    <div class="container">
        <div class="content">
            <a href="#"><img src={Placeholder} alt="Primary Work" width='100%' /></a>
            <a href="#">Main Item</a>
        </div>
        <div class="content">
            <a href="https://fregosoj.github.io/Bootcamp-Goal/"><img src={PJ1} alt="Other Work 1" width='100%' /></a>
            <a href="https://fregosoj.github.io/Bootcamp-Goal/">Navigating Digital Nomadland</a>
        </div>
        <div class="content">
            <a href="#"><img src={Placeholder} alt="Other Work 2" width='100%' /></a>
            <a href="#">Item B</a>
        </div>
        <div class="content">
            <a href="#"><img src={Placeholder} alt="Other Work 3" width='100%' /></a>
            <a href="#">Item C</a>
        </div>
        <div class="content">
            <a href="http://still-mesa-87070.herokuapp.com/"><img src={PJ2} alt="Other Work 4" width='100%' /></a>
            <a href="http://still-mesa-87070.herokuapp.com/">One Stop Shop</a>
        </div>
        <div class="content">
            <a href="#"><img src={Placeholder} alt="Other Work 5" width='100%' /></a>
            <a href="#">Item F</a>
        </div>
        <div class="content">
            <a href="#"><img src={Placeholder} alt="Other Work 6" width='100%' /></a>
            <a href="#">Item G</a>
        </div>
    </div>    </div>
  );
}
