const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const birthday = new Date(this.birthday.value);
  const gender = this.gender.value;

  const dayOfWeek = birthday.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dayOfWeek];

  let akanName;

  if (gender === 'male') {
    switch (dayName) {
      case 'Sunday':
        akanName = 'Kwasi';
        break;
      case 'Monday':
        akanName = 'Kwadwo';
        break;
      case 'Tuesday':
        akanName = 'Kwabena';
        break;
      case 'Wednesday':
        akanName = 'Kwaku';
        break;
      case 'Thursday':
        akanName = 'Yaw';
        break;
      case 'Friday':
        akanName = 'Kofi';
        break;
      case 'Saturday':
        akanName = 'Kwame';
        break;
      default:
        break;
    }
  } else if (gender === 'female') {
    switch (dayName) {
      case 'Sunday':
        akanName = 'Akosua';
        break;
      case 'Monday':
        akanName = 'Adwoa';
        break;
      case 'Tuesday':
        akanName = 'Abenaa';
        break;
      case 'Wednesday':
        akanName = 'Akua';
        break;
      case 'Thursday':
        akanName = 'Yaa';
        break;
      case 'Friday':
        akanName = 'Afua';
        break;
      case 'Saturday':
        akanName = 'Ama';
        break;
      default:
        break;
    }
  }

  result.innerText = `Your Akan name is ${akanName}!`;
});
