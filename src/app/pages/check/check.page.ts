import { getLocaleExtraDayPeriods } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { ɵROUTER_PROVIDERS } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false 
    },
    {
      name: 'secondary',
      selected: true 
    },
    {
      name: 'tertiary',
      selected: false 
    },
    {
      name: 'success',
      selected: true 
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick( item:any ){
    console.log(item);
  }

  verData(){
    console.log(this.data)
  }

}



