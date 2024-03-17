// Generics

const funcEx1 = <T>(val: T): T => {
  let newVal: T;

  return val;
};

// T works as a place holder which will be replaced by the given argument
// It can be any Alphabet ex. T, A or CustomType
// mostly used is T

const ans = funcEx1(20);
const ans2 = funcEx1("20");
const ans3 = funcEx1(true);

//----------------------------------------------------------------------------------------

// In Case of Custom Data Types

type Person1Ex = {
  name: string;
  age: number;
};

const newPerson1Ex: Person1Ex = {
  name: "vTrox",
  age: 22,
};

const getDataFrom = <T>(val: T): T => {
  return val;
};

const data = getDataFrom<Person1Ex>(newPerson1Ex);
//                     |
//This value will fill/replace the T

//-------------------------------------------------------------------------

// multiple parameters

const func1 = <T, U>(n: T, m: U) => {
  return { a: n, b: m };
};
// OR
const func2 = <T, U>(n: T, m: U): { a: T; b: U } => {
  return { a: n, b: m };
};

const ex2 = func1<number, string>(20, "a");

//----------------------------------------------------------------------------------------

// extend keyword

type Player1 = {
  name: string;
  age: number;
};

type Player2Ex = {
  name: string;
  age: number;
  city: string;
};

const newPlayer: Player1 = {
  name: "v",
  age: 21,
};

const newPlayer2: Player2Ex = {
  name: "y",
  age: 22,
  city: "z",
};

const getPlayerData = <T, U extends T>(
  player1: T,
  player2: U
): { player1: T; player2: U } => {
  return { player1: player1, player2: player2 };
};

const playerData = getPlayerData<Player1, Player2Ex>(newPlayer, newPlayer2);
