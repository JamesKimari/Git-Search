import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../github/gitsearch.service';

@Component({
  selector: 'git-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any = [];
  userRepos: any = [];

  constructor(private gitSearchService: GitsearchService) { }

  ngOnInit() {
    this.gitSearchService.getUserProfile().subscribe(res => {
      this.userProfile = res;
      console.log(res);
    });

    this.gitSearchService.getUserRepos().subscribe(res => {
      this.userRepos = res;
      console.log(res);
    });

  }
}

