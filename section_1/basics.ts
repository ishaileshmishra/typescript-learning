export const person: {
  name: string;
  age: number;
  sex: string;
  occupation: string;
  hobbies: string[];
} = {
  name: "shailesh mishra",
  age: 30,
  sex: "male",
  occupation: "proffessional",
  hobbies: ["sports", "reading", "hiking"],
};

person.hobbies.forEach((element) => {
  console.log(element.toUpperCase);
});
