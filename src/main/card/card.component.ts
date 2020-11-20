import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../../app/models/board.model';
import { Column } from '../../app/models/column.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  board: Board = new Board('Card List', [
    new Column('Fruits', [
      "Apple",
      "Orange",
      "Grape"
    ]),
    new Column('Vegetable', [
      "Beetroot",
      "Carrot",
      "Beans"
    ]),
    new Column('Grocery', [
      'Soap',
      'Brush',
      'Grains',
      'Sugar'
    ]),
  ]);
  disableButton = false;
  selectedItem: any;
  newCardDetails:any
  constructor(private router: Router,) { }

  ngOnInit() {
    this.newCardDetails = JSON.parse(localStorage.getItem('newCard'));
    if (this.newCardDetails !== null) {
      if (this.newCardDetails.nameList === 'Fruits'){
        this.board.columns[0].tasks.push(this.newCardDetails.cardName);
      } else if (this.newCardDetails.nameList === 'Vegetable') {
        this.board.columns[1].tasks.push(this.newCardDetails.cardName);
      } else if (this.newCardDetails.nameList === 'Grocery') {
        this.board.columns[2].tasks.push(this.newCardDetails.cardName);
      }
    }
  }

  /**
   * Drag and Drop method
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /**
   * Delete List
   * @param e 
   */
  deleteList(e){
    if (e.name === 'List 1' || e.name === 'List 2' || e.name === 'List 3') {
      e.tasks.shift();
    }
  }

  /**
   * Add Card List
   * @param e 
   */

  addButton(e) {
    if (e) {
      this.selectedItem = e;
      localStorage.setItem('utilityData', JSON.stringify(this.selectedItem));
    } else { 
      localStorage.removeItem('utilityData');
    }
    this.router.navigate(['./add-card']);
  }
}
