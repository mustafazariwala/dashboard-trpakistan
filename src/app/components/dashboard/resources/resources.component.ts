import { Component, OnInit, ViewChild } from '@angular/core';
import { AddBookmarkComponent } from '../../apps/bookmarks/modal/add-bookmark/add-bookmark.component';
import { CreateTagComponent } from '../../apps/bookmarks/modal/create-tag/create-tag.component';
import { EditBookmarkComponent } from '../../apps/bookmarks/modal/edit-bookmark/edit-bookmark.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  @ViewChild("addbookmark") AddBookmark: AddBookmarkComponent;
  @ViewChild("editbookmark") EditBookmark: EditBookmarkComponent;
  @ViewChild("createTag") CreateTag: CreateTagComponent;

  public listBookmark: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark
  }

}
