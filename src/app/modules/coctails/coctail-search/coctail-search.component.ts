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

  public SearchCoctails(){
    this.filterChanged.emit({filter: this.chosenFilter, filterValue: this.filterValue});
  }

}
