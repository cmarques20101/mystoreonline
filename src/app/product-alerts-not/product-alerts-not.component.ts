import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts-not',
  templateUrl: './product-alerts-not.component.html',
  styleUrls: ['./product-alerts-not.component.css']
})
export class ProductAlertsNotComponent implements OnInit {
  @Input() product;
  @Output() notify2 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}