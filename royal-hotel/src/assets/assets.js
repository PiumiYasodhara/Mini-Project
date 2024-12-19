import Hotel from './hotel.jpg';
import Hotel2 from './hotel2.jpg';
import Hotel11 from './hotel1-1.jpg';
import Hotel12 from './hotel1-2.jpg';
import Hotel13 from './hotel1-3.jpg';
import Hotel14 from './hotel1-4.jpg';
import Hotel15 from './hotel1-5.jpg';
import Hotel21 from './hotle2-1.jpg'; 
import Hotel22 from './hotel2-2.jpg';
import Hotel23 from './hotel2-3.jpg';
import Hotel24 from './hotel2-4.jpg';
import Hotel25 from './hotel2-5.jpg';
import Hotel26 from './hotel2-6.jpg';
import Hotel31 from './hotel3-1.jpg';
import Hotel32 from './hotel3-2.jpg';
import Hotel33 from './hotel3-3.jpg';
import Hotel34 from './hotel3-4.jpg';
import Hotel35 from './hotel3-5.jpg';
import Hotel36 from './hotel3-6.jpg';
import Hotel37 from './hotel3-7.jpg';
import Hotel3 from './hotel3.jpg';
import Hotel4 from './hotel4.jpg';
import Hotel5 from './hotel5.jpg';
import Hotel6 from './hotel6.jpg';
import Hotel7 from './hotel7.jpg';
import Hotel8 from './hotel8.jpg';
import Hotel9 from './hotel9.jpg';
import Room1 from './room1.jpg';
import Room2 from './room2.jpg';
import Room3 from './room3.jpg';
import Room4 from './room4.jpg';
import Room5 from './room5.jpg';
import Room6 from './room6.jpg';
import Room7 from './room7.jpg';
import Room8 from './room8.jpg';
import Room9 from './room9.jpg';
import Room10 from './room10.jpg';
import Room11 from './room11.jpg';
import Room12 from './room12.jpg';
import Room13 from './room13.jpg';
import Room14 from './room14.jpg';
import Room15 from './room15.jpg';
import Room16 from './room16.jpg';
import Logo from './Logo.png';
import Logo2 from './Logo2.png';

const rooms = [
    { id: 1, type: '1', price: 5000, name: 'Standard', image: Hotel31, description: 'A comfortable room for one person with all the necessary amenities.' },
    { id: 2, type: '1', price: 7500, name: 'Deluxe', image: Hotel12, description: 'A luxurious room with upgraded features and amenities.' },
    { id: 3, type: '1', price: 10000, name: 'Suite', image: Room3, description: 'A spacious suite with additional features and a premium experience.' },
    { id: 4, type: '1', price: 15000, name: 'Executive', image: Room2, description: 'An executive room with enhanced amenities for business travelers.' },
    { id: 5, type: '1', price: 20000, name: 'Penthouse', image: Room1, description: 'A top-tier penthouse offering the ultimate in luxury and comfort.' },
    { id: 6, type: '2', price: 7000, name: 'Standard', image: Hotel12, description: 'A standard room suitable for two persons with essential facilities.' },
    { id: 7, type: '2', price: 10000, name: 'Deluxe', image: Room9, description: 'A deluxe room providing a superior level of comfort and luxury.' },
    { id: 8, type: '2', price: 13000, name: 'Suite', image: Hotel24, description: 'A suite offering extra space and premium features for two persons.' },
    { id: 9, type: '2', price: 17000, name: 'Executive', image: Room7, description: 'An executive room with advanced amenities for a comfortable stay.' },
    { id: 10, type: '2', price: 22000, name: 'Penthouse', image: Room5, description: 'A luxurious penthouse designed for an exceptional experience.' },
    { id: 11, type: '3', price: 9000, name: 'Standard', image: Room12, description: 'A standard room suitable for three persons with essential amenities.' },
    { id: 12, type: '3', price: 12000, name: 'Deluxe', image: Hotel13, description: 'A deluxe room offering additional space and luxury for three persons.' },
    { id: 13, type: '3', price: 16000, name: 'Suite', image: Room4, description: 'A suite providing a high level of comfort and premium facilities.' },
    { id: 14, type: '3', price: 20000, name: 'Executive', image: Room8, description: 'An executive room with advanced amenities for a comfortable stay.' },
    { id: 15, type: '3', price: 25000, name: 'Penthouse', image: Hotel12, description: 'An exceptional penthouse offering the ultimate in luxury and comfort.' },
    { id: 16, type: '4', price: 11000, name: 'Standard', image: Room9, description: 'A spacious standard room for four persons with necessary amenities.' },
    { id: 17, type: '4', price: 14000, name: 'Deluxe', image: Hotel24, description: 'A deluxe room providing a high level of comfort for four persons.' },
    { id: 18, type: '4', price: 18000, name: 'Suite', image: Room7, description: 'A suite offering premium features and space for four persons.' },
    { id: 19, type: '4', price: 22000, name: 'Executive', image: Room5, description: 'An executive room with top-tier amenities for four persons.' },
    { id: 20, type: '4', price: 27000, name: 'Penthouse', image: Hotel12, description: 'An ultimate luxury penthouse designed for four persons.' },
    { id: 21, type: '5-10', price: 15000, name: 'Standard', image: Hotel31, description: 'A spacious room ideal for a family of 5-10 persons.' },
    { id: 22, type: '5-10', price: 20000, name: 'Deluxe', image: Hotel12, description: 'A deluxe room offering more space and luxury for a family.' },
    { id: 23, type: '5-10', price: 25000, name: 'Suite', image: Room3, description: 'A suite providing a premium experience for a large family.' },
    { id: 24, type: '5-10', price: 30000, name: 'Executive', image: Room2, description: 'An executive room with top-tier amenities for a family stay.' },
    { id: 25, type: '5-10', price: 35000, name: 'Penthouse', image: Room1, description: 'An ultimate luxury penthouse ideal for a large family.' }
];

export const assets = {
    Hotel, Hotel2, Hotel3, Hotel4, Hotel5, Hotel6, Hotel7, Hotel8,
    Hotel9, Hotel11, Hotel12, Hotel13, Hotel14, Hotel15, Hotel21,
    Hotel22, Hotel23, Hotel24, Hotel25, Hotel26, Hotel31, Hotel32,
    Hotel33, Hotel34, Hotel35, Hotel36, Hotel37, Room1, Room2,
    Room3, Room4, Room5, Room6, Room7, Room8, Room9, Room10,
    Room11, Room12, Room13, Room14, Room15, Room16, Logo, Logo2,
    roomTitles: {
        '1': '1 PERSON',
        '2': '2 PERSONS',
        '3': '3 PERSONS',
        '4': '4 PERSONS',
        '5-10': 'FAMILY ROOM (5-10 PERSONS)',
    },
    rooms 
};
