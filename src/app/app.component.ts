import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-14-version-unibell';

  displayedColumns: string[] = ['id', 'name', 'track'];
  dataSource = playList;

}
export interface PlayList {
  id: string;
  name: string;
  track: string;
  isExpanded?: boolean;
}

const playList: PlayList[] = [
  { id: '1', name: 'Important', track: 'assets/audio/something-important.mp3', isExpanded: false },
  { id: '2', name: 'Oslik', track: 'assets/audio/oslik.mp3', isExpanded: false },
  { id: '2', name: 'Baby shark', track: 'assets/audio/baby_shark_sample.mp3', isExpanded: false },
];
