import UseLocation from './UseLocation';

const LocateBtn = ({ geolocate }) => {
  return (
    <div id='locateBtn'>
      <button onClick={geolocate} className='btn'>
        Use My Location
      </button>
    </div>
  );
};

export default LocateBtn;
