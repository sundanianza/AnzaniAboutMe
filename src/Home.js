import React, { Component } from "react";
import me from "./me.jpg";
import oppo1 from "./oppo1.png";
import {
  Route,
  NavLink,
  HashRouter,

  Routes
} from "react-router-dom";
class Home extends Component {
  render() {
    return (

      <HashRouter>
        <div>

          <h1>Welcome to my Mini Portfolio Page </h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>

          </ul>


          <div className="content">


            <h3>About Me</h3>
            <hr></hr>
            <img src={me} alt=""/>
            <p>My name is <span>Anzani Sundani</span>, and i was born and brought up in Limpopop and now i am living
              in Gauteng, Pretoria.
              i did my National Diploma and Btech Degree at the Tshwane University Of Technology(TUT).


              one of my biggest strength is that i am the type of a person who always want to
              be in a learning zone, becouse i believe that a day without learning is a wasted day.

              <h5>Short Term Goal</h5>
              well my short term goal is to get a job in a well reputated company , where i will be able to
              express my knowledge, and be able to gain more skills and experience, which will
              have a huge impact in my carrer joruney in IT.

              <h5>Long Term Goal</h5>
              my long term goal is to find my self having achived a good position in a company where
              i can build my career all the way up and be able to grow with the organization and contribute
              towards the goal of the company, and continue to learn and gain more knowledge of any type of
              work in a company.


              <h5>My Hobbies</h5>

              i enjoy watching soccer during my spare time, and one of the things i enjoy doing is hiking
              and taking long walks,this helps to calm my body and mind and get me back in the zone.

              if i am home and free i also enjoy playing video games.


            </p>


            <Routes>
              <Route path="/" component={Home} />

            </Routes>
          </div>


          <br />
          <br />
          <br />

          <div className="content">


            <h3>Why i want to be a developer at SovTech</h3>
            <hr></hr>
            <img src={oppo1} id="oppo1"  alt=""/>
            <p>

              i have always been keen and interested in the IT Sector and when i saw the graduate role
              being advertised online, i was excited at the prospect of working for a
              top tech brand thats leading the future of the industry.<br />

            </p>
            <p>
              i have read alot about your company(SovTech) and i would welcome the opportunity to work
              in an organization that has a reputation for high employee satisfaction growth and empowering
              the graduates with knowldge and experience.<br />
            </p>
            <p>
              This is a very exciting opportunity to me, as i have always been looking to be part of the graduate
              program with a reputated world class company like SovTech, not only is this exciting but its
              a dream come true to me, becouse through this graduate program i will be able to gain
              hands on experience, skills and knowledge in the field of IT.<br />
            </p>
            <p>

              I want to be part of this Program becouse when i see this program i see it as a program that will
              play a vital role in developing my career and equip me with neccessary knowledge as
              a software Engineering graduate and be able to stand out there in the world of IT,
              through this program i will be able to have an opportunity to apply my knowledge and also be
              able to gain more knowledge and experience from the world class company.<br />
            </p>
            <p>

              one of the things that excites me about being part of the graduate program with SovTech
              is that SovTech values 'Growth', which is one of the things that drives me through my career journey,
              as a result i see this role as role that will play a huge part in growth in my career in IT and be able
              to equip me with neccessary skills and knowledge to change the world with Technology.


            </p>


            <Routes>
              <Route path="/" component={Home} />

            </Routes>
          </div>
          <br />
          <br />

        </div>
        <div id="footer">

          @Copyright  Anzani Sundani  2022- All Right Reserved.



        </div>
      </HashRouter>



    );

  }
}

export default Home;