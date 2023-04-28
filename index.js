let searchResEl = document.getElementById("searchResult");
let searchInputEl = document.getElementById("searchInput");
let breakEl = document.createElement("br");
let url = "https://apis.ccbp.in/city-bikes?bike_name=";

function createAndAppend(bikes) {
  for (let eachItem of bikes) {
    console.log(eachItem);
    let titleEl = document.getElementById("p");
    let describeEl = document.createElement("p");
    titleEl.textContent = "Bike Name:" + eachItem.name;
    describeEl.textContent = "City:" + eachItem.city;
    searchResEl.appendChild(titleEl);
    searchResEl.appendChild(describeEl);
  }
}
searchInputEl.addEventListener("keydown", function (event) {
  let searchValue = event.target.value;
  if (event.key === "Enter") {
    url = "https://apis.ccbp.in/city-bikes?bikes_name=" + searchValue;
    let options = {
      methods: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let bikes = jsonData;
        console.log(bikes);
        createAndAppend(bikes);
      });
  }
});
function onPage() {
  searchResEl.textContent = "";
  let options = {
    method: "GET",
  };
  fetch(url, options).then(function (response) {
    return response.json();
  });
}
onPage();
