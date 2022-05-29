import React from "react";
import { useContext} from "react";
import { DataContext } from "../context/DataContext";

function Container() {
  const { data, setSearch, input, setInput, search } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  // Date

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  // Time

  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const main =  Object.entries(data).length !== 0 && data.weather[0].main

  return (
    <div className="container-component d-flex justify-content-start align-items-center flex-column" style={{background:`url("./img/${main}.jpg")`}}>
      <form onSubmit={handleSubmit} className="mt-3">
        <div class="input-group mb-4 w-75 mx-auto">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="search"
            name="search"
            value={input}
            class="form-control"
            placeholder="Search City"
            aria-label="Search City"
            aria-describedby="basic-addon2"
          />
          <button type="submit" class="input-group-text" id="basic-addon2">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className="card bg-opacity  text-white d-flex justify-content-center align-items-center w-50 ">
        <div className="card-body">
          <h5 className="card-title">{search.toUpperCase()}</h5>
          <hr/>
          <p className="card-text lead">
            {day}, {month} {date}, {year}
            <br />
            {time}
          </p>
          <hr />
          <img
          className="icon"
            src={
              data.weather
                ? "http://openweathermap.org/img/w/" +
                  data.weather[0].icon +
                  ".png"
                : ""
            }
          />
          <h1 className="fw-bolder mb-5">
            {Object.entries(data).length !== 0 && data.main.temp} &deg;C
          </h1>
          <hr/>
          <p className="lead fw-bolder mb-0 ">
            {Object.entries(data).length !== 0 && data.weather[0].description}
          </p>
          <p className="lead">
            {Object.entries(data).length !== 0 && data.main.temp_min} &deg;C |{" "}
            {Object.entries(data).length !== 0 && data.main.temp_max} &deg;C
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container;
