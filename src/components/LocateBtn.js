import UseLocation from './UseLocation';

const LocateBtn = ({ geolocate }) => {
  return (
    <button onClick={geolocate} className='btn'>
      Use My Location
    </button>
  );
};

export default LocateBtn;
