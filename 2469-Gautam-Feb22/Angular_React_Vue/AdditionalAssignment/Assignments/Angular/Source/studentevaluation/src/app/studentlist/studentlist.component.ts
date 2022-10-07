import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  id: number = 0;
  finallist: Array<any> = [];
  allentries: Array<any> = [];
  filterdlist: any[] = [];
  obtmark = '';
  currdate = '';

  selectedName = '';
  finalName: any;

  studentlist: any[] = [
    {
      id: '1',
      Name: 'ABC',
    },
    {
      id: '2',
      Name: 'XYZ',
    },
    {
      id: '3',
      Name: 'PQR',
    },
  ];

  standardlist: any[] = [
    {
      Standard: '1',
      Name: '',
      units: [
        {
          Unit: '',
        },
        { Unit: '' },
      ],
    },
    {
      Standard: '2',
      Name: '',
      units: [
        {
          Unit: '',
        },
        { Unit: '' },
        { Unit: '' },
        { Unit: '' },
      ],
    },
    {
      Standard: '3',
      Name: '',
      units: [
        {
          Unit: '',
        },
        { Unit: '' },
        { Unit: '' },
        { Unit: '' },
        { Unit: '' },
        { Unit: '' },
      ],
    },
  ];

  onSubmit() {
    console.warn(this.finallist);
    let temp = JSON.parse(JSON.stringify(this.finallist));
    this.allentries.push(temp);
    this.onClear();
  }

  onClear() {
    this.finallist.map((item) => (item.Name = ''));
    this.finallist.map((item) => item.units.map((i:any) => (i.Unit = '')));
  }

  printResult(entry: any) {
    this.filterdlist = [];
    this.filterdlist.push(entry);
    console.log(entry);
    this.currdate = new Date().toDateString();
  }

  calculateobtained(units: any) {
    console.log(units);
    return units
      .map((item:any) => item.Unit)
      .reduce((prev:any, curr:any) => parseInt(prev) + parseInt(curr));
  }

  constructor(private activeroute: ActivatedRoute) {}

  ngOnInit() {
    this.activeroute.params.subscribe((p) => {
      this.id = p['stdId'];
      this.finallist = this.standardlist.filter((p) => p.Standard == this.id);
    });
  }
}
