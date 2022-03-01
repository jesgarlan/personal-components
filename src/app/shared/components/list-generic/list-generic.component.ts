import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Constants } from '../../constants';

@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html',
  styleUrls: ['./list-generic.component.scss']
})
export class ListGenericComponent implements OnInit {

  public settings: any;
  public source: LocalDataSource = new LocalDataSource();

  @Input() public mode: string;
  @Input() public hideSubHeader: boolean;
  @Input() public actions: any;
  @Input() public btnAdd: any;
  @Input() public btnEdit: any;
  @Input() public btnDelete: any;
  @Input() public columns: any;
  @Input() public pager: any;

  @Input() public data: Array<any> = new Array<any>();

  @Output() public outputCreate = new EventEmitter<Array<any>>();
  @Output() public outputEdit = new EventEmitter<Array<any>>();
  @Output() public outputDelete = new EventEmitter<Array<any>>();


  constructor(public constants: Constants) {
  }

  ngOnInit() {
    this.source.load(this.data);
    this.settings = {
      mode: this.mode,
      hideSubHeader: this.hideSubHeader,
      actions: this.actions,
      add: this.btnAdd,
      edit: this.btnEdit,
      delete: this.btnDelete,
      columns: this.columns,
      noDataMessage: this.constants.NO_RESULTADOS,
      pager: this.pager
    };
  }

  createConfirm(event) {
    this.data.push(event.newData);
    this.source.load(this.data);
    this.outputCreate.emit(this.data);
  }

  editConfirm(event) {
    let index = this.data.indexOf(event.data);
    this.data[index] = event.newData;
    this.source.load(this.data);
    this.outputEdit.emit(this.data);
  }

  deleteConfirm(event) {
    let index = this.data.indexOf(event.data);
    this.data.splice(index, 1);
    this.source.load(this.data);
    this.outputDelete.emit(this.data);
  }
}
