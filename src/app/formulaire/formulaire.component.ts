import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Thing } from '/Users/farizonnoemie/Documents/Informatique/Projet_webl3/projet_l3_web/src/backend/models/Thing.js';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public thingForm: FormGroup; 

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.thingForm = this.formBuilder.group({
      nom: [null],
      circuit: [null],
      commentaire: [null]
    });
  }
  
  onSubmit() {
    // const thing = new Thing();
    // thing.nom = this.thingForm.get('nom').value;
    // thing.circuit = this.thingForm.get('circuit').value;
    // thing.commentaire = this.thingForm.get('commentaire').value;
  }
}
