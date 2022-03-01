import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../constants';

@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html',
  styleUrls: ['./list-generic.component.scss']
})
export class ListGenericComponent implements OnInit {

  public settings: any;

  @Input() mode: string;
  @Input() hideSubHeader: boolean;
  @Input() actions: any;
  @Input() btnAdd: any;
  @Input() btnEdit: any;
  @Input() btnDelete: any;
  @Input() columns: any;
  @Input() pager: any;

  @Input() data: Array<any> = new Array<any>();


  constructor(public constants: Constants) {
  }

  ngOnInit() {
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

}
