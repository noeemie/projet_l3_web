import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Thing } from '../models/Thing.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public thingForm: FormGroup; 

  constructor(/*private formBuilder: FormBuilder,
              private router: Router*/) { }

  ngOnInit() {
    /*this.thingForm = this.formBuilder.group({
      nom: [null, Validators.required],
      circuit: [null, Validators.required],
      commentaire: [null, Validators.required]
    });*/
  }
  
  onSubmit() {/*
    const thing = new Thing();
    thing.nom = this.thingForm.get('nom').value;
    thing.circuit = this.thingForm.get('circuit').value;
    thing.commentaire = this.thingForm.get('commentaire').value;
  */}
}
