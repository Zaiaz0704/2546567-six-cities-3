import { useSelector } from 'react-redux';
import '../../styles.css';
import { RootState } from '../../store';
import { RequestStatus } from '../../utils/const';
import CardList from './card-list';
import MapComponent from '../../components/map-component';
import LocationListMain from '../../components/location-list-main';
import { LongCat } from '../../components/LongCat';

function MainContent(): JSX.Element {
  const currentCity = useSelector(
    (state: RootState) => state.cities.currentCity
  );
  const selectedPoint = useSelector(
    (state: RootState) => state.cities.selectedPoint
  );
  const status = useSelector((state: RootState) => state.cities.status);

  if (status === RequestStatus.Loading) {
    return <LongCat />;
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationListMain />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {currentCity.offers.length} place
              {currentCity.offers.length > 1 && 's'} to stay in{' '}
              {currentCity.name}
            </b>
            <CardList />
          </section>
          <div className="cities__right-section">
            <MapComponent
              city={currentCity}
              selectedPoint={selectedPoint}
              className="cities__map"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
