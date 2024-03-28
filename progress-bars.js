document.addEventListener("DOMContentLoaded", function() {
    // THIS IS A VANILLA CODE
    // THE CODE CAN BE IMPROVED USING CARBON JS FOR FUTURE VERSIONS
    const elementProgressBarYear = document.querySelector("#progress-bar-percentage-year")
    const labelProgressBarYear = document.querySelector("#label-progress-bar-percentage-year");

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
        labelProgressBarYear.textContent = percentage + " %";
    }
    setInterval(() => {
        getYearPercentage();
    }, 500)

});
