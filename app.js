function grade(number) {
    var result;
    if (number >= 80 && number <= 100) {
        result = 'A+';
    } else if (number >= 70 && number <= 79) {
        result = 'A';
    } else if (number >= 60 && number <= 69) {
        result = 'A-';
    } else if (number >= 50 && number <= 59) {
        result = 'B';
    } else if (number >= 40 && number <= 49) {
        result = 'C';
    } else if (number >= 33 && number <= 39) {
        result = 'D';
    } else if (number >= 0 && number <= 32) {
        result = 'F';
    } else {
        return 'It\'s an invalid number'
    }
    return result;
}

document.getElementById('action-btn').addEventListener('click', function () {
    // Calculate Bangla Grade
    const getBanglaNumber = document.getElementById('bNumber').value;
    document.getElementById('bGrade').innerText = grade(getBanglaNumber);

    // calculate English Grade
    const getEnglishNumber = document.getElementById('eNumber').value;
    document.getElementById('eGrade').innerText = grade(getEnglishNumber);

    // Calculate ICT Grade
    const getIctNumber = document.getElementById('iNumber').value;
    document.getElementById('iGrade').innerText = grade(getIctNumber);

    // Calculate Total Marks
    const getFinalMarks = parseInt(getBanglaNumber) + parseInt(getEnglishNumber) + parseInt(getIctNumber);
    document.getElementById('total-marks').innerText = getFinalMarks;

    // Caculate Fonal Grade
    document.getElementById('finalGrade').innerText = grade(getFinalMarks / 3);
})