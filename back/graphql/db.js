const people = [
  {
    id: '0',
    name: '이성재',
    age: 27,
    gender: 'female',
  },
  {
    id: '1',
    name: '누구',
    age: 20,
    gender: 'male',
  },
  {
    id: '2',
    name: '홍길동',
    age: 22,
    gender: 'male',
  },
  {
    id: '3',
    name: '성춘향',
    age: 18,
    gender: 'female',
  },
];

const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  console.log(filteredPeople[0]);
  return filteredPeople[0];
};

module.exports.people = people;
module.exports.getById = getById;
