import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  type_stats : string ;

  tipi_ammessi : Array<string> = ['immobili', 'aziende'];

  constructor(
    private route: ActivatedRoute,
    private router: Router) 
  {
    this.type_stats = this.route.snapshot.paramMap.get('type');

    if( _.indexOf(this.tipi_ammessi , this.type_stats) < 0)
    {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
  }

}
