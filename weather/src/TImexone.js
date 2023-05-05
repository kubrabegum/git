import moment from "moment-timezone";

function TimeZone() {
  // Set the list of time zones to display
//   const timeZones = [
//     "America/New_York",
//     "Europe/London",
//     "Asia/Kolkata",
//     "Australia/Sydney",
//   ];

  // Get the current date and time in the local time zone
  const localDate = new Date();
  const localTime = localDate.toLocaleTimeString();

  return (
    <div>
      <h1>Current Date and Time in Different Time Zones</h1>

      <p>Local Time: {localTime}</p>
      <p >
          Timezone: {moment.tz(localDate).format()}
        </p>

      {/* Display the date and time for each time zone
      {timeZones.map((timeZone) => (
        <p key={timeZone}>
          {timeZone}: {moment.tz(localDate, timeZone).format()}
        </p>
      ))} */}
    </div>
  );
}


export default TimeZone