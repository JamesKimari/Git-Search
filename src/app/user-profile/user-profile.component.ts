import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../github/gitsearch.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'git-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any = [];
  repos: any = [];
  username: string;

  constructor(private gitSearchService: GitsearchService) { }

  ngOnInit() {
    this.gitSearchService.getUserProfile().subscribe(users => {
      this.userProfile = users;
      console.log(users);
    });

    this.gitSearchService.getUserRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });


    }

  searchUserProfile() {
    this.gitSearchService.updateUserProfile(this.username);

    this.gitSearchService.getUserProfile().subscribe(users => {
      this.userProfile = users;
      console.log(users);
    });

    this.gitSearchService.getUserRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });

  }
}

