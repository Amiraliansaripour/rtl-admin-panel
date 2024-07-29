import jalaali from 'jalaali-js';

export const convertToJalali = (dateStr) => {
    // Convert the string to a Date object
    const date = new Date(dateStr);
    
    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    
    // Convert to Jalali date
    const jalaliDate = jalaali.toJalaali(year, month, day);
    
    // Format the Jalali date as a string
    const jalaliDateString = `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
    
    return jalaliDateString;
  };