import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	public sidebarVisible: boolean = true;
  public tab:string="Kontaktdaten";
  

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

  changeTabs(presentTab:string){
    this.tab=presentTab
  }


}
