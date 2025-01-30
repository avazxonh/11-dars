const loaderContainer = document.querySelector(".loader-container");
const list = document.querySelector("#list");
const btn = document.querySelector(".btn_dm_lm");
const body = document.body;

async function getData() {
  loaderContainer.classList.remove("hidden");
  const req = await fetch("https://restcountries.com/v3.1/all");
  const data = await req.json();
  loaderContainer.classList.add("hidden");
  return data;
}

function generateCountires(countries) {
  countries.forEach((c) => {
    console.log(c);

    let li = document.createElement("li");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    li.classList.add("list__item");

    let img = document.createElement("img");
    img.src = c.flags.png;
    img.alt = c.flags.alt;
    li.appendChild(img);
    img.classList.add("img");

    li.append(p, p2, p3, p4);

    p.textContent = c.name.common;
    p2.textContent = `Population:  ${c.population}`;
    p3.textContent = `Region:  ${c.region}`;
    p4.textContent = `Capital:  ${c.capital ? c.capital[0] : "no-capital"}`;
    list.appendChild(li);

    p.classList.add("cityName");
    p2.classList.add("city_information");
    p3.classList.add("city_information");
    p4.classList.add("city_information");
  });
}

btn.addEventListener("click", () => {
  if (body.classList.contains("darkM")) {
    body.classList.remove("darkM");
    btn.textContent = "Dark Mode";
  } else {
    body.classList.add("darkM");
    btn.textContent = "light Mode";
  }
});

getData()
  .then((data) => generateCountires(data))
  .catch((error) => console.log(error));
