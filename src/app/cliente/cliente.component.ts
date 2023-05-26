import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  client: Client[] = [];
  
constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clientService.getClients().subscribe(
      {
        next : data => this.client = data
      }

    );
  }

}
