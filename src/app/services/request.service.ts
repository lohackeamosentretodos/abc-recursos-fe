import { Injectable } from '@angular/core';
import { Request } from '../models/request-model';

@Injectable()

export class RequestService  { 
  
    private requests:Request[] = [
        {
          cod: "AMASFD50",
          name: "Romina",
          lastname: "Luzzi",
          company: "Caritas",
          request: "Necesitamos alimentos no perecederos.",
          state: "Pendiente",
          received: "-"
        },
        {   
            cod: "HYASFD82",
            name: "Ezquiel",
            lastname: "Arcuri",
            company: "Hospital Centenario",
            request: "Necesitamos barbijos.",
            state: "En transito",
            received: "Micaela"
        }

    ];

    constructor(){ 
    } 

    getRequest( id: string ){
        return this.requests[id];
    }
    
    searchRequest ( text:string ):Request[]{

        let requestsArr:Request[] = [];
        text = text.toLowerCase();
    
        for( let i = 0; i < this.requests.length; i ++ ){
    
          let request = this.requests[i];
    
          let cod = request.cod.toLowerCase();
    
          if( cod.indexOf( text ) >= 0  ){
            request.id = i;
            requestsArr.push( request )
          }
    
        }
    
        return requestsArr;
    
      }
} 
