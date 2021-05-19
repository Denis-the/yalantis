
export const getMonthOrder = () => {
    const monthOrder = [];
    const currentMonth = new Date().getMonth();
    for (let i = currentMonth; i < 12; i+=1) {
      monthOrder.push(i);
    }
    for (let i = 0; i < currentMonth; i+=1) {
      monthOrder.push(i);
    }
    return monthOrder;
  };

export const monthNames = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };