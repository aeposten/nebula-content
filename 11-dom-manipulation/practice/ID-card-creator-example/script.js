const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const birthday = document.getElementById("birthday");
const fact = document.getElementById("fact");
const idCard = document.getElementById("id-card");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createIdCard(event);
  form.reset(event);
  console.log(event.target.birthday.value)
});

function createIdCard(event) {
  const {fullName, birthday, fact} = event.target;

  const nameHeading = document.createElement("h2");
  idCard.append(nameHeading);
  nameHeading.textContent = fullName.value;
  nameHeading.classList.add("name");

  const profileImg = document.createElement("img");
  profileImg.src = "business-cat.jpg";
  profileImg.className = "profile-img";
  idCard.append(profileImg);

  const age = document.createElement("h2");
  idCard.append(age);
  age.classList.add("age");
  let birthYear = parseInt(birthday.value.slice(0, 4));
  age.textContent = calculateAge(birthYear);

  const funFact = document.createElement("p");
  idCard.append(funFact);
  funFact.classList.add("fun-fact");
  funFact.textContent = fact.value;
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

