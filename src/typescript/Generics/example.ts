type PeoplesEx = {
  name: string;
  age: number;
};

const peoplesEx: PeoplesEx[] = [
  {
    name: "v",
    age: 7,
  },
  {
    name: "vt",
    age: 7,
  },
  {
    name: "vtr",
    age: 74,
  },
  {
    name: "vtro",
    age: 17,
  },
  {
    name: "vTrox",
    age: 22,
  },
];

const getFilteredPeoplesEx = <T, U extends keyof T>(
  person: T[],
  property: U,
  value: T[U]
) => {
  return person.filter((items) => items[property] === value);
};

const filteredPeoplesNameValue = getFilteredPeoples(peoplesEx, "name", "v");
const filteredPeoplesAgeValue = getFilteredPeoples(peoplesEx, "age", 7);
console.log(filteredPeoplesAgeValue);
