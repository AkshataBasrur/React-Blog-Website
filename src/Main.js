import React, { Component } from "react";
import './App.css';
import m1 from './m1.jpg';
import m2 from './m2.jpg';
import m3 from './m3.jpg';

class Main extends Component {
    render() {
      return (
        <div className="outer-border">
          <div class="first-blog">
            <h2>Seljalandsfoss, Iceland</h2>
            <img src={m1} width='90%' height='60%'/>
            One of the most famous waterfalls in Iceland’s south region
            Seljalandsfoss is a must-visit stop on any drive along the ring road.
            <p script="text-align:right, color:yellow">Date:11/15/2018</p>
          </div>
        
          <div class="second-blog">
            <h2> Iguazu Falls, Argentina </h2>
            <img src={m2} width='90%' height='60%'/>
            One of the seven new natural wonders of the world, these incredible waterfalls frame you won’t be able to look without losing your breath
            <p>11/20/2018</p>
          </div>

          <div class="third-blog">
            <h2> Nuuk, Greenland </h2>
            <img src={m3} width='90%' height='60%'/>
            Humpback whales! Fjords! Icebergs!
            Few of amazing things in Greenland’s tiny capital city, having perfect contrast to the freezing arctic weather 
            <p>11/23/2018</p>
          </div>
        </div>
      );
    }
  }
 
export default Main;