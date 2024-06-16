import './App.css';
import Card from './components/card';
import Input from './components/input';
import Button from './components/button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';
function App() {
  const weather= useWeather();

  useEffect(()=>{
    weather.fetchCurrentUserLocationData()
  },[])
  const refreshPage = () => {
    weather.fetchCurrentUserLocationData();
  };
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card/>
      <Button onClick={refreshPage} value="Refresh"/>
    </div>
  );
}

export default App;
