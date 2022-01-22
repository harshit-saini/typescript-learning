import { User } from './User';
import { Company } from './Company';
;


const person = new User;
console.log(person)

const company = new Company;
console.log(company)

const map = document.getElementById("map")
new google.maps.Map(map, {
  backgroundColor: "blue",
  zoom: 8,
  center: {
    lat: 0,
    lng: 0
  }
})