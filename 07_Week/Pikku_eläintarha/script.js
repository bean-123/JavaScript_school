document.addEventListener("DOMContentLoaded", () => {
  let animals = [
    { name: "Kettu", type: "Nisäkäs" },
    { name: "Karhu", type: "Nisäkäs" },
    { name: "Susi", type: "Nisäkäs" },
    { name: "Haukka", type: "Lintu" },
    { name: "Jänis", type: "Nisäkäs" },
    { name: "Ahma", type: "Nisäkäs" },
    { name: "Korppi", type: "Lintu" },
    { name: "Rapu", type: "Äyriäinen" },
    { name: "Sammakko", type: "Sammakkoeläin" },
    { name: "Hirvi", type: "Nisäkäs" },
    { name: "Ahven", type: "Kala" },
    { name: "Kameleontti", type: "Matelija" },
  ];

  const animalInput = document.getElementById("searchAnimal");
  const animalList = document.getElementById("animalList");
  const newAnimal = document.getElementById("newAnimalName");
  const inputType = document.getElementById("newAnimalType");
  const filterSelect = document.getElementById("filterType");
  const sortBtn = document.getElementById("sortAnimals");
  const addBtn = document.getElementById("addAnimal");

  function displayAnimals(list) {
    animalList.innerHTML = ""; //clears the list before re-rendering it, so theres no doubles when it re-renders

    if (list.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Eläimiä ei löytynyt";
      li.classList.add("noResults"); //for css styling
      animalList.appendChild(li);
      return;
    }

    list.forEach((animal, index) => {
      const li = document.createElement("li");
      li.textContent = `${animal.name} (${animal.type})`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        animals.splice(index, 1);
        applyFilters();
      });

      //adding them to the page
      li.appendChild(deleteBtn);
      animalList.appendChild(li);
    });
  }
  addBtn.addEventListener("click", () => {
    const name = newAnimal.value.trim(); // we dont want any extra spaces in the list
    const type = inputType.value;

    if (name === "") return; //dont add empty names, goes back to start of the function

    animals.push({ name, type }); //add the new name n type to list
    applyFilters();
  });

  //localeCompare compares a and b alphabetically n sorts them, fi is finnish bc we have ä n ö
  sortBtn.addEventListener("click", () => {
    animals.sort((a, b) => a.name.localeCompare(b.name, "fi"));
    applyFilters();
  });

  //function to filter by name on type
  function applyFilters() {
    let filtered = [...animals]; //(... is spread syntax in js)copying the original list and making changes to the copy without affecting the original one

    const selectedType = filterSelect.value; //the dropdown selecting thing for species
    const searchTerm = animalInput.value.trim().toLowerCase(); //users input, takes extra spaces off and puts to lowercase so it recognices it

    //filter by type
    if (selectedType !== "Kaikki") {
      filtered = filtered.filter((animal) => animal.type === selectedType); //filter goes thru the filtered array and pick only the animaltypes that matches our selected type
    }

    if (searchTerm !== "") {
      filtered = filtered.filter(
        (animal) => animal.name.toLocaleLowerCase().includes(searchTerm) // includes checks if the input is in the animal name, n returns true or false
      );
    }
    displayAnimals(filtered); //shows the filtered array
  }
  filterSelect.addEventListener("change", applyFilters); //adding listener to the dropdown, will trigger when changed n applies the filter function
  animalInput.addEventListener("input", applyFilters); //listening to user input, and adding the function filter to it when triggered

  displayAnimals(animals);
});
