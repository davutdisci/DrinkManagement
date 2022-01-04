import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AutoUnsubscribe } from 'src/app/decorators/decorators';
import { ICoctail } from 'src/app/models/i-coctail';
import { CoctailService } from '../../services/coctails.service';

@AutoUnsubscribe
@Component({
  selector: 'app-coctail-detail',
  templateUrl: './coctail-detail.component.html',
  styleUrls: ['./coctail-detail.component.css']
})
export class CoctailDetailComponent implements OnInit {

  @Input() coctail:ICoctail;
  @Input() drinkID: string
  public row: number;
	public rows;
  public tempFieldsRow;
  public rowData = [];

  public coctailDetail:ICoctail;

  constructor(
    public activeModal: NgbActiveModal,
    public _coctailService:CoctailService) {}

    ngOnInit() {
    this._coctailService.GetCoctailByID(this.drinkID).subscribe(result=>{
      this.coctail = result.drinks && result.drinks.length? result.drinks[0]: null;
      this.chunkSizeSettingForDynamicRow()
    })
  }

  private chunkSizeSettingForDynamicRow() {
    this.tempFieldsRow = Object.entries(this.coctail);
    this.sanitizeCoctailData();

    this.row = (Object.keys(this.coctail).length) / 4;
    this.rows = Array(Math.ceil(this.row)).fill(1);
    let chunk_size = 4;
    let arr = this.tempFieldsRow;
    let groups = arr.map(function (e, i) {
      return i % chunk_size === 0 ? arr.slice(i, i + chunk_size) : null;
    }).filter(function (e) { return e; });
    this.rowData = groups;
  }


  private sanitizeCoctailData(){
    this.tempFieldsRow.forEach(row=>{
      if(row[0].includes("str")){
       row[0] = row[0].replace(/^.{3}/g, '');
      }
    })
  }

}
