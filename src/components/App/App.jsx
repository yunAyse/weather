import Days from "../Days/Days";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import "./App.css";
import axios from 'axios';

function App() {

  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY ;

  axios.get(`${apiUrl}?key=${apiKey}=Lyon&days=5&aqi=no&alerts=no`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

  function handleClickDay(event) {
    console.log(event.target);

    document.querySelector('.clickedDay').classList.remove('clickedDay');
    event.target.classList.add('clickedDay');

  }

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
              <Weather />
            </div>
            <div className="card-action">
              <Days handleClickDay={handleClickDay} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
