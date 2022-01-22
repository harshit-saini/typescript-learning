import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';


const user = new User;
console.log(user)

const company = new Company;
console.log(company)

const map: HTMLElement = document.getElementById("map")
const googleMap = new CustomMap(map)
googleMap.addMarker(company);
googleMap.addMarker(user)

