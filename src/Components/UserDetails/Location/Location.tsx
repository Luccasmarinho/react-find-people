import type { LocationTypes } from "../../../interfaces/interfaces";


const Location = ({ city, country, state, name, number}: LocationTypes) => {
  return (
    <ul>
      <li>
        <h3>City</h3>
        <p>{city}</p>
      </li>
      <li>
        <h3>Country</h3>
        <p>{country}</p>
      </li>
      <li>
        <h3>State</h3>
        <p>{state}</p>
      </li>
      <li>
        <h3>Street</h3>
        <p>{name}</p>
      </li>
      <li>
        <h3>Number</h3>
        <p>{number}</p>
      </li>
    </ul>
  );
};

export default Location;
