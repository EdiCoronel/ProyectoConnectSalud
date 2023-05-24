import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  }

