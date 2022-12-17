// convert date time to string
export const convertDateTimeToString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

// convert date time format yyyy-mm-dd hh:mm:ss to date
export const convertStringToDateTime = (dateString) => {
  const date = new Date(dateString);
  return date;
};
