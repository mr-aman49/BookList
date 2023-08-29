import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-detail',
  templateUrl: './volume-detail.component.html',
  styleUrls: ['./volume-detail.component.css'],
})
export class VolumeDetailComponent implements OnInit {
  userList: any;
  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.getUserList();
  }

  searchText: string = '';
  getUserList() {
    this.httpClient
      .get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
      .subscribe((result: any) => {
        this.userList = result.items;
      });

    return this.userList;
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;

  }
}
