import React from "react";
import babyinsite from "../../images/babyInSite.png";
import teammates from "../../images/teammatezTracker.png";
import workday from "../../images/workDayTracker.png";
import fitnesstracker from "../../images/fitnesstracker.png";
import notetaker from "../../images/notetaker.png";
import weatherdashboard from "../../images/weatherdashboard.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row">
        <div className="col-md-6 ">
          <div>
            <h5>Teammatez Tracker</h5>
            <div>
              Web app that uses 3rd party APIs to display stats for recent
              teammates in the game Fortnite.
            </div>
            <div>
              Repository:{" "}
              <a href="https://github.com/JoeyGitsIt/teammatezTracker">
                github.com/JoeyGitsIt/teammatezTracker
              </a>
            </div>
            <div>
              Live:{" "}
              <a href="https://joeygitsit.github.io/teammatezTracker/">
                joeygitsit.github.io/teammatezTracker/
              </a>
            </div>
            <div className="card-body">
              <img src={teammates} alt="screenshot of teammatezTracker" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div>
            <h5>Work Day Tracker</h5>
            <div>
              Web app that utilizes local storage to create, save, and color
              code notes based on a typical 8 hour workday.
            </div>
            <div>
              Repository:{" "}
              <a href="https://github.com/JoeyGitsIt/workDayTracker">
                github.com/JoeyGitsIt/workDayTracker
              </a>
            </div>
            <div>
              Live:{" "}
              <a href="https://joeygitsit.github.io/workDayTracker/">
                joeygitsit.github.io/workDayTracker/
              </a>
            </div>
            <div className="card-body">
              <img src={workday} alt="screenshot of Work Day Tracker" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div>
            <h5>Baby In Site</h5>
            <div>
              Web application that allows users to interact with a baby's data
              pertaining to diet, health, and sleep.
            </div>
            <div>
              Repository:{" "}
              <a href="https://github.com/JoeyGitsIt/babyinsite">
                github.com/JoeyGitsIt/babyinsite
              </a>
            </div>
            <div>
              Live: <a href="Needs Live Link">Needs Live Link</a>
            </div>
            <div className="card-body">
              <img src={babyinsite} alt="screenshot of Baby In Site" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div>
            <h5>Fitness Tracker</h5>
            <div>
              Web application that utilizes MongoDB in the backend to create,
              store, and modify the user's workouts.
            </div>
            <div>
              Repository:{" "}
              <a href="https://github.com/JoeyGitsIt/fitnessTracker">
                github.com/JoeyGitsIt/fitnessTracker
              </a>
            </div>
            <div>
              Live:{" "}
              <a href="https://fitness-tracker-12344.herokuapp.com/">
                fitness-tracker-12344.herokuapp.com/
              </a>
            </div>
            <div className="card-body">
              <img src={fitnesstracker} alt="screenshot of Fitness Tracker" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div>
            <h5>Note Taker</h5>
            <div>
              Note Taker is a web application that allows the user to create a
              note and save it to a json file. The user can also delete the
              notes by clicking the trash can.
            </div>
            <div>
              Repository:{" "}
              <a href="https://github.com/JoeyGitsIt/noteTaker">
                github.com/JoeyGitsIt/noteTaker
              </a>
            </div>
            <div>
              Live:{" "}
              <a href="https://floating-falls-31567.herokuapp.com/">
                floating-falls-31567.herokuapp.com/
              </a>
            </div>
            <div className="card-body">
              <img src={notetaker} alt="screenshot of Note Taker" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div>
            <h5>Weather Dashboard</h5>
            <div>
              Web application that displays weather data from api calls based on
              the city the user is searching for through the site.
            </div>
            <div>
              Repository:{" "}
              <a href="https://github.com/JoeyGitsIt/weatherDashboard">
                github.com/JoeyGitsIt/weatherDashboard
              </a>
            </div>
            <div>
              Live:{" "}
              <a href="https://joeygitsit.github.io/weatherDashboard/">
                joeygitsit.github.io/weatherDashboard/
              </a>
            </div>
            <div className="card-body">
              <img
                src={weatherdashboard}
                alt="screenshot of Weather Dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
