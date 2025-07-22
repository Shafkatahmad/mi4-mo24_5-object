const student = {
  name: 'Zohir Khan',
  id: 121,
  address: 'sport',
  doesPlay: true,
  friends: ['Apu', 'Rakib', 'Salman', 'Rakib'],
  game: [{name: 'football', year: 2025}, {name: 'soccer', year: 2023}],
  act: function() {
    console.log('Playing like hero');
  }
  ,
  car : {
    brand: 'tesla',
    price: 50000000,
    made: 2025,
    manufacturer: {
      name: 'tesla',
      ceo: 'elon mask',
      country: 'usa'
    }
  }
}

// console.log(student);
// console.log(student.act);
student.act();