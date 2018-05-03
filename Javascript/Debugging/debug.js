console.log("Enter the Biodome here");

function numberOfGuests() {
  console.log("How many people are in here?");
  fs.readFile("Guests.txt", (err, data) => {
    console.log(data);
  });
  console.log("Decent turnout?");
}
numberOfGuests();
console.log("That's not very much!");
