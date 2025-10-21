import type { InfoTypes } from "../../../interfaces/interfaces";
import formatDate from "../../../utils/utilts";

const Info = ({ first, last, title, date, age }: InfoTypes) => {
  return (
    <ul>
      <li>
        <h3>First Name</h3>
        <p>{first}</p>
      </li>
      <li>
        <h3>Last Name</h3>
        <p>{last}</p>
      </li>
      <li>
        <h3>Title</h3>
        <p>{title}</p>
      </li>
      <li>
        <h3>Date</h3>
        <p>{formatDate(date)}</p>
      </li>
      <li>
        <h3>Age</h3>
        <p>{age}</p>
      </li>
    </ul>
  );
};

export default Info;
