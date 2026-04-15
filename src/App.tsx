import ProfileCard from './components/ProfileCard';
import Temperature from './components/Temperature';
function App() {
  return (
    <>
      <ProfileCard name="Sara Nilsson" profession={'Frontendutvecklare'} city={'Malmö'} />
      <ProfileCard name="Gunn Gunarsson" profession={'Vaktmästare'} city={'Göteborg'} />
      <ProfileCard name="Albin Holgersson" profession={'Lärare'} city={'Stockholm'} />
      <Temperature startTemperature={20}></Temperature>
    </>
  );
}

export default App;
