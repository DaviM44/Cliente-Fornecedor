import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor';
import { FornecedorService } from '../fornecedor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedor: Fornecedor[] = [];
  isEditing : boolean = false;

  formGroupFornecedor : FormGroup;
  
constructor(private fornecedorService: FornecedorService,
            private formBuilder: FormBuilder){

              this.formGroupFornecedor = formBuilder.group({
                id : [''],
                nome : [''],
                email : [''],
                cnpj : [''],
                telefone : [''],
                local : [''],
                nac : ['']

              });
            }


  ngOnInit(): void {
    this.loadFornecedor();
  }

  loadFornecedor(){
    this.fornecedorService.getFornecedor().subscribe(
      {
        next : data => this.fornecedor = data
      }

    );
  }

  save(){
    if (this.isEditing)
    {
      this.fornecedorService.update(this.formGroupFornecedor.value).subscribe(
        {
          next: () => {
            this.loadFornecedor();
            this.formGroupFornecedor.reset();
            this.isEditing = false;
          }
        }
      )
    }
    else{
      this.fornecedorService.save(this.formGroupFornecedor.value).subscribe(
        {
          next: data => 
          { this.fornecedor.push(data);
            this.formGroupFornecedor.reset();
          }
        }
      );
  }
}

  edit(fornecedor: Fornecedor) {
    this.formGroupFornecedor.setValue(fornecedor);
    this.isEditing = true;
  }

  delete(fornecedor: Fornecedor){
    this.fornecedorService.delete(fornecedor).subscribe({
      next: () => this.loadFornecedor()
    });
  }

}
