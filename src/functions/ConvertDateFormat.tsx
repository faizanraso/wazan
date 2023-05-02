export default function convertDateFormat(date: string) {
  const [year, month, day] = date.split("-");
  var monthLong = "";

  switch (month) {
    case "01":
      monthLong = "January";
      break;
    case "02":
      monthLong = "February";
      break;

    case "03":
      monthLong = "March";
      break;

    case "04":
      monthLong = "April";
      break;

    case "05":
      monthLong = "May";
      break;

    case "06":
      monthLong = "June";
      break;

    case "07":
      monthLong = "July";
      break;

    case "08":
      monthLong = "August";
      break;

    case "09":
      monthLong = "September";
      break;
    case "10":
      monthLong = "October";
      break;

    case "11":
      monthLong = "November";
      break;

    case "12":
      monthLong = "December";
      break;

    default:
      monthLong = "";
      break;
  }

  return `${monthLong} ${day}, ${year}`;
}
