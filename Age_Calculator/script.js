const birthDate = document.getElementById('birthdate');
const calculateBtn = document.getElementById('submit');
const age = document.getElementById('age');
const months = document.getElementById('months');
const days = document.getElementById('days');

calculateBtn.addEventListener('click', () => {
  if(birthDate.value === '') {
    alert('Please enter your birth date');
    return;
  }
  const birthDateValue = new Date(birthDate.value);
  const todayDate = new Date();
  if(birthDateValue > todayDate) {
    alert('Birth date cannot be in the future!');
    return;
  }
  let years = todayDate.getFullYear() - birthDateValue.getFullYear();
  let monthsDiff = todayDate.getMonth() - birthDateValue.getMonth();
  let daysDiff = todayDate.getDate() - birthDateValue.getDate();
  if(monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    years--;
    monthsDiff += 12;
  }
  if(daysDiff < 0) {
    const lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
    daysDiff += lastMonth.getDate();
    monthsDiff--;
  }
  age.textContent = `Age: ${years} years`;
  months.textContent = `Months: ${monthsDiff}`;
  days.textContent = `Days: ${daysDiff}`;
})

