import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coctail-search',
  templateUrl: './coctail-search.component.html',
  styleUrls: ['./coctail-search.component.css']
})
export class CoctailSearchComponent implements OnInit {

  @Output() filterChanged = new EventEmitter();

  public chosenFilter: string = "Name";
  public filters: string[] = ["Name", "Category", "Ingredient"];
  public filterValue: string = "margarita";

  constructor() { }

  ngOnInit() {
    this.SearchCoctails();
  }

  /*
    The method to send selected filter and its value to the parent component
    to initiate the search on the http api
  */
  public SearchCoctails(){
    this.filterChanged.emit({filter: this.chosenFilter, filterValue: this.filterValue});
  }

}
