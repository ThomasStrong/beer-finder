import UseLocation from './UseLocation';

const LocateBtn = ({ onClick }) => {
  return (
    <div id='locateBtn'>
      <button onClick={onClick} className='btn'>
        Use My Location
      </button>
    </div>
  );
};

export default LocateBtn;
