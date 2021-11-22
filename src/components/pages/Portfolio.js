import React from "react";
import babyinsite from "../../images/babyInSite.png";
import teammates from "../../images/teammatezTracker.png";
import workday from "../../images/workDayTracker.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="row">
        <div className="col-md-6 fullwidth">
          <div className="card">
            <h5 className="card-header">
              Teammatez Tracker
              <a href="https://github.com/JoeyGitsIt/teammatezTracker">
                github.com/JoeyGitsIt/teammatezTracker
              </a>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <a href="https://joeygitsit.github.io/teammatezTracker/">
                  <img src={teammates} alt="screenshot of teammatezTracker" />
                </a>
              </p>
            </div>
            <div className="card-footer">
              Web app that uses 3rd party APIs to display stats for recent
              teammates in the game Fortnite.
            </div>
          </div>
        </div>
        <div className="col-md-6 fullwidth">
          <div className="card">
            <h5 className="card-header">
              Work Day Tracker
              <a href="https://github.com/JoeyGitsIt/workDayTracker">
                github.com/JoeyGitsIt/workDayTracker
              </a>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <a href="https://joeygitsit.github.io/workDayTracker/">
                  <img src={workday} alt="screenshot of workDayTracker" />
                </a>
              </p>
            </div>
            <div className="card-footer">
              Web app that utilizes local storage to create, save, and color
              code notes based on a typical 8 hour workday.
            </div>
          </div>
        </div>
        <div className="col-md-6 fullwidth">
          <div className="card">
            <h5 className="card-header">
              Teammatez Tracker
              <a href="https://github.com/JoeyGitsIt/teammatezTracker">
                github.com/JoeyGitsIt/teammatezTracker
              </a>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <a href="https://joeygitsit.github.io/teammatezTracker/">
                  <img src={teammates} alt="screenshot of teammatezTracker" />
                </a>
              </p>
            </div>
            <div className="card-footer">
              Web app that uses 3rd party APIs to display stats for recent
              teammates in the game Fortnite.
            </div>
          </div>
        </div>
        <div className="col-md-6 fullwidth">
          <div className="card">
            <h5 className="card-header">
              Work Day Tracker
              <a href="https://github.com/JoeyGitsIt/workDayTracker">
                github.com/JoeyGitsIt/workDayTracker
              </a>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <a href="https://joeygitsit.github.io/workDayTracker/">
                  <img src={workday} alt="screenshot of workDayTracker" />
                </a>
              </p>
            </div>
            <div className="card-footer">
              Web app that utilizes local storage to create, save, and color
              code notes based on a typical 8 hour workday.
            </div>
          </div>
        </div>
        <div className="col-md-6 fullwidth">
          <div className="card">
            <h5 className="card-header">
              Teammatez Tracker
              <a href="https://github.com/JoeyGitsIt/teammatezTracker">
                github.com/JoeyGitsIt/teammatezTracker
              </a>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <a href="https://joeygitsit.github.io/teammatezTracker/">
                  <img src={teammates} alt="screenshot of teammatezTracker" />
                </a>
              </p>
            </div>
            <div className="card-footer">
              Web app that uses 3rd party APIs to display stats for recent
              teammates in the game Fortnite.
            </div>
          </div>
        </div>
        <div className="col-md-6 fullwidth">
          <div className="card">
            <h5 className="card-header">
              Work Day Tracker
              <a href="https://github.com/JoeyGitsIt/workDayTracker">
                github.com/JoeyGitsIt/workDayTracker
              </a>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <a href="https://joeygitsit.github.io/workDayTracker/">
                  <img src={workday} alt="screenshot of workDayTracker" />
                </a>
              </p>
            </div>
            <div className="card-footer">
              Web app that utilizes local storage to create, save, and color
              code notes based on a typical 8 hour workday.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
