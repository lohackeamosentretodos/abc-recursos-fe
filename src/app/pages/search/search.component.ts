import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from './../../models/request-model';
import { RequestService } from '../../services/request.service';
import { Location } from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  requests:any[] = [];
  text:string;

  displayedColumns = ['cod', 'applicant', 'company', 'request', 'state', 'received'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor( private activatedRoute:ActivatedRoute, private location: Location, private _requestService: RequestService ) {
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.text = params['text'];
      this.requests = this._requestService.searchRequest( params['text'] );
      this.dataSource = new MatTableDataSource(this.requests);
      console.log(this.dataSource);
    });

  }
}
