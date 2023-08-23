import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Board} from "../../models/board.models";
import {Column} from "../../models/column.model";


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  constructor() {
  }

  board: Board = new Board('Test board', [
    new Column('Ideas', ['Some random ideas', 'Another random ideas', 'And another random ideas'
    ]),
    new Column('Research', ['Lorem ipsum', 'foo', 'bar'
    ]),
    new Column('Todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']
    ),
    new Column('Done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])
  ])

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
