import {User} from './User';
import {Company} from './Company';
// in typescript class acts as a type and a way to create intance too


// user should have location property to qualify to be shown as a marker and it can have more properties too
interface Item{
  location: {
    lat: number,
    lng: number
  };
}

export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(map: HTMLElement) {
    this.googleMap = new google.maps.Map(map, {
      zoom: 8,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }



  addMarker(item: Item) {
        new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    })
  }

  // **** dont set classes as types
  // addMarker(item: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: item.location.lat,
  //       lng: item.location.lng
  //     }
  //   })
  // }


  // **** dont make individual functions 
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }

}


/* 

 | operator will alow to refer to those which are present in both

  single value can have multiple different types
  here User and Company both satisfy Item type
  
*/