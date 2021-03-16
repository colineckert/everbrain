export const parseDate = (date) => {
    
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  let current = new Date();
  let previous = new Date(date);

  let newDate = new Date(date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  let elapsed = current - previous;
  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' seconds ago';
  }
  
  else if (elapsed < msPerHour) {
    const minute = Math.round(elapsed/msPerMinute);
    return minute + (minute === 1 ? ' minute ago' : 'minutes ago');
  }
  
  else if (elapsed < msPerDay ) {
    const hour = Math.round(elapsed/msPerHour);
    return hour + (hour === 1 ? ' hour ago' : ' hours ago');
  }

  else if (elapsed < msPerMonth) {
    const day = Math.round(elapsed/msPerDay);
    return day + (day === 1 ? ' day ago' : ' days ago');
  }
  
  else if (elapsed < msPerYear) {
    const month = Math.round(elapsed/msPerMonth);
    return month + (month === 1 ? ' month ago' : ' months ago');
  }
  
  else {
    return newDate;   
  }
}