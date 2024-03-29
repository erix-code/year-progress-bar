document.addEventListener("DOMContentLoaded", function() {
    // THIS IS A VANILLA CODE
    // THE CODE CAN BE IMPROVED USING CARBON JS FOR FUTURE VERSIONS

    // Elements
    const elementProgressBarYear = document.querySelector("#progress-bar-percentage-year")
    const elementProgressBarMonth = document.querySelector("#progress-bar-percentage-month")

    // Labels
    const labelProgressBarYear = document.querySelector("#label-progress-bar-percentage-year");
    const labelProgressBarMonth = document.querySelector("#label-progress-bar-percentage-month");

    console.log(labelProgressBarYear);
    function getYearPercentage() {
        // Getting the current date
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear()      // Get the four digit year (yyyy)
        const nextYearValue = currentYear + 1;
        // Time of the next year  in miliseconds
        const nextYearDate = new Date("01/01/"+nextYearValue.toString()).getTime()

        // Fixing bug of leap year
        const startDate = new Date("01/01/"+ currentYear.toString())
        const totalYearDays = ((nextYearDate - startDate)/1000) /86400;

        // diff in time and then we convert the diff to days
        const diffInDays = ((nextYearDate - currentTime.getTime()) / 1000) / 86400;
        const currentDayOfYear = totalYearDays - diffInDays;

        // get percentage of the year
        const percentage = (100 * currentDayOfYear) / totalYearDays;
        // setting the element in the html
        elementProgressBarYear.style.width =String( parseInt(percentage)) + "%";
        labelProgressBarYear.textContent = format_percentage(percentage) + " %";
    }
    function getMonthPercentage() {
        // Get the current days in float
        const currentTime = new Date();
        // Get the day of the end of the month
        const nextMonth = currentTime.getMonth() + 1 + 1;
        const nextMonthDate = new Date(nextMonth +"/01/"+currentTime.getFullYear())
        // Get the first day of the month
        const currentMonth = currentTime.getMonth() + 1;
        const firstDayMonth = new Date(currentMonth + "/01/"+ currentTime.getFullYear())

        // diff form the last  to the first element
        const diffLastFirst = nextMonthDate - firstDayMonth;
        // diff from the current to the first element in the month
        const diffCurrentFirst = currentTime - firstDayMonth;

        const percentage = (100*diffCurrentFirst) / diffLastFirst;

        // setting the element in the html
        elementProgressBarMonth.style.width =String( parseInt(percentage)) + "%";
        labelProgressBarMonth.textContent = format_percentage(percentage) + " %";
    }
    function format_percentage(percentage) {
        return parseFloat(percentage).toFixed(6);
    }

    setInterval(() => {
        getYearPercentage();
        getMonthPercentage();
    }, 500)

});
