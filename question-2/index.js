/**
 * @question_2 {
 *  Your application has users from multiple time zones.
 *  And you want to send them an email at their local time.
 *  Let’s say you want to send an email to the users on 25 August
 *  2022 at 11:00 AM. All users from different time zones will receive
 *  the email at 11:00 AM (on 25 August 2022).
 *
 *  Suppose your application has the “Asia/Dhaka” and
 *  “America/Costa_Rica” users. Bangladeshi users will
 *  receive the email at BST 11:00 AM and American users
 *  will receive the email at US 11:00 AM. You don’t have to
 *  implement the email sending mechanism, just print the timezone(s).
 *  (must be use JS language)
 * }
 *
 * @approached_solution [
 *  1. Searched for api/json(https://github.com/dmfilipenko/timezones.json) data where world time zones abbreviation according to
 *      country is located
 *  2. Made method to print time zone which receives zoneName and expected time
 *      and display time zone abbreviation with time
 * ]
 */
const { timeZoneAbbreviationList } = require("./time-zone-abbreviations.db");

function printTimeZoneAbbreviation(zoneName, expectedTime) {
  let timeZoneAbbreviation;
  for (let timeZone of timeZoneAbbreviationList) {
    if (timeZone.utc.includes(zoneName)) {
      timeZoneAbbreviation = timeZone.abbr;
      break;
    }
  }
  console.log(
    `Requested time zone area: ${zoneName}\nExpected mailing time: ${timeZoneAbbreviation} ${expectedTime} \n`
  );
}

(() => {
  console.log("Question - 2 ===>");
  let expectedTime = "11:00 AM";
  let timeZones = [
    "Asia/Dhaka",
    "America/Costa_Rica",
    "Pacific/Honolulu",
    "America/Anchorage",
    "America/Chicago",
    "America/Indiana/Marengo",
  ];

  for (let zone of timeZones) {
    printTimeZoneAbbreviation(zone, expectedTime);
  }
})();
