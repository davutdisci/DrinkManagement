import { CoctailService } from '../services/coctails.service';
import { Component, OnInit } from '@angular/core';
import { ICoctail } from '../../models/i-coctail';
import { AutoUnsubscribe } from 'src/app/decorators/decorators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoctailDetailComponent } from './coctail-detail/coctail-detail.component';

@AutoUnsubscribe
@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.css'],
})
export class CoctailsComponent implements OnInit {

  public coctails: ICoctail[] = [];
  public paginatedCoctails: ICoctail[] = [];
  public headerColumns = [
    { field: 'strDrinkThumb', header: 'Picture' },
    { field: 'idDrink', header: 'Drink ID' },
    { field: 'strAlcoholic', header: 'Is Alcoholic' },
    { field: 'strDrink', header: 'Drink Name', },
    { field: 'strCategory', header: 'Category' },
  ];

  public functionMapping = {
    Name:"GetCoctailsByName",
    Category: "GetCoctailsByCategory",
    Ingredient: "GetCoctailsByIngredient"
  };

  public currentPage: number = 1;
  public pageSize: number = 10;
  public collectionSize: number = 0;

  constructor(
    private _coctailService: CoctailService,
    private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  /*
    @param event: page Number to go to in the list

  */ 
  public PageChange(event) {
    this.currentPage = event;
    this.paginateResults();
  }

  /*
    This method is to paginate the data in the client side to load items faster
  */
  private paginateResults() {
    this.paginatedCoctails = this.coctails.slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage);
  }

  public ViewCoctailDetail(drinkID) {
    let options = {
      size: 'xl',
      centered: true,
      drinkID: drinkID
    }
    const modalRef = this.modalService.open(CoctailDetailComponent, options);
    for (let prop in options) {
      modalRef.componentInstance[prop] = options[prop];
    }

  }

  /*
    This method is to call the related method of coctail service 
    upon chosing the right filter and its value
  */
  public SearchCoctails(event) {
    this._coctailService[`${this.functionMapping[event.filter]}`](event.filterValue).subscribe(result=>{
        this.coctails = result['drinks'] as ICoctail[];
        this.collectionSize = this.coctails.length;
        this.paginateResults();
    })
  }

}

