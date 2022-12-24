
    console.log("connected");
    const current_date = document.getElementById("Current_date");
    let weathercon = document.getElementById("weathercon");
    
    const temp_status = "cloud";
    
    const getCurrentDay = () => {
      let Day_arr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = new Date();
      let today = Day_arr[day.getDay()];
      return today;
    };
    
    const getCurrentMonth = () => {
      let Month_arr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let day = new Date();
      let Curr_Month = Month_arr[day.getMonth()];
      let year=day.getFullYear();
      let date=day.getDate();
      let houre=day.getHours();
      let minute=day.getMinutes();
      let periods="AM"
      if(houre>=12){
        periods="PM"
      }if(minute<10){
        minute="0"+minute
      }
      
     let final_data=`${date}/${Curr_Month}/${year} | ${houre}:${minute} | ${periods}`;
     return final_data
    };
    
    current_date.innerText=`${getCurrentDay()} | ${getCurrentMonth()}`;
    
    
  