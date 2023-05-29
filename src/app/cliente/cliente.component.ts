import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  client: Client[] = [];
  isEditing : boolean = false;

  formGroupClient : FormGroup;
  
constructor(private clientService: ClientService,
            private formBuilder: FormBuilder){

              this.formGroupClient = formBuilder.group({
                id : [''],
                nome : [''],
                email : [''],
                cpf : [''],
                telefone : [''],
                endereco : ['']

              });
            }


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

  save(){
    if (this.isEditing)
    {

    }
    else{
      this.clientService.save(this.formGroupClient.value).subscribe(
        {
          next: data => 
          { this.client.push(data);
            this.formGroupClient.reset();
          }
        }
      );
  }
}

  edit(client: Client) {
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }

  delete(client: Client){
    this.clientService.delete(client).subscribe({
      next: () => this.loadClients()
    });
  }

}
