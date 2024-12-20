import React, { useState } from 'react';
import './Room.css';
import { assets } from '../assets/assets';
const Room = () => {
  const [selectedRoomType, setSelectedRoomType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const filterRooms = () => {
    let filteredRooms = assets.rooms || [];

    if (selectedRoomType !== 'all') {
      filteredRooms = filteredRooms.filter(room => room.type === selectedRoomType);
    }

    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filteredRooms = filteredRooms.filter(room => room.price >= min && room.price <= max);
    }

    return filteredRooms;
  };

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const filteredRooms = filterRooms();

  return (
    <div className='room'>
      <header className="header">
        <h1>ROOMS</h1>
      </header>

      <div className="container">
        <div className="allroom-selector">
          <button onClick={() => {
            setSelectedRoomType('all');
            setSelectedPriceRange('all');
          }}>
            All Types Room
          </button>
        </div>

        <div className="roomoption">
          <div className="room-selector">
            <label htmlFor="room-type">CHOOSE ROOM TYPE:</label>
            <select id="room-type" value={selectedRoomType} onChange={handleRoomTypeChange}>
              <option value="all">ALL</option>
              <option value="1">1 Person Room</option>
              <option value="2">2 Person Room</option>
              <option value="3">3 Person Room</option>
              <option value="4">4 Person Room</option>
              <option value="5-10">Family Room (5-10 Persons)</option>
            </select>
          </div>

          <div className="room-selector">
            <label htmlFor="price-range">CHOOSE PRICE:</label>
            <select id="price-range" value={selectedPriceRange} onChange={handlePriceRangeChange}>
              <option value="all">All</option>
              <option value="0-5000">Rs. (0-5000)</option>
              <option value="5001-10000">Rs. (5001-10000)</option>
              <option value="10001-15000">Rs. (10001-15000)</option>
              <option value="15001-20000">Rs. (15001-20000)</option>
              <option value="20001-25000">Rs. (20001-25000)</option>
              <option value="25001-30000">Rs. (25001-30000)</option>
              <option value="30001-35000">Rs. (30001-35000)</option>
              <option value="35001-40000">Rs. (35001-40000)</option>
            </select>
          </div>
        </div>

        {filteredRooms.length === 0 ? (
          <div id="no-rooms-message">ROOM NOT AVAILABLE</div>
        ) : (
          <div className="room-container">
            {Object.keys(assets.roomTitles).map((type) => {
              const roomsOfType = filteredRooms.filter(room => room.type === type);
              if (roomsOfType.length === 0) return null;

              return (
                <div key={type}>
                  <h2 className='type-person'>{assets.roomTitles[type]}</h2>
                  <div className="room-row">
                    {roomsOfType.map(room => (
                      <div key={room.id} className="room-item">
                        <img src={room.image} alt={room.name} />
                        <h3>{room.name}</h3>
                        <p>{room.description}</p>
                        <p>Price: Rs. {room.price}</p>
                        <button>Book Now</button> {/* Add a booking button */}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Room;
