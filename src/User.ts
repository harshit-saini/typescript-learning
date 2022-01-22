// we are going to export classes from here that is why
// capital U in users.


// can also impport @faker-js/faker
import faker from 'faker';

export class User{

  name: string;     // this is like name="harshit" in a class
  location: {
    lat: number,
    lng:number
  }

  constructor() {
    this.name = faker.name.firstName() + " " + faker.name.lastName();
    // this.location.lat = <something>    //this does not work as online 11 we have not initialised locaion to be an object that is just for typescript
    
    this.location = {
      lat: Number(faker.address.latitude()),
      lng : Number(faker.address.longitude())
    }
  }
}