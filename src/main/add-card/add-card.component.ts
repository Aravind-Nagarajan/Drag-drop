import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  targetUtilityData: any;
  cardName: any;
  description: any;
  comments: any = [];
  public cardForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.targetUtilityData = JSON.parse(localStorage.getItem('utilityData'));
    this._buildcardForm();
  }

  /**
   * Form Creation
   */
  _buildcardForm() {
    this.cardForm = this.formBuilder.group({
      nameList: [this.targetUtilityData.name],
      cardName: [null, [Validators.required]],
      cardDesc: [null],
    });
  }

  /**
   * Add comment method
   */
  addComment() {
    this.comments.push(this.cardForm.value.cardDesc);
    this.cardForm.patchValue({ cardDesc: "" });
  }

 /**
  * Save method
  */
  onSave() {
    if (this.cardForm.valid) {
      const taxtypeObj = this.cardForm.value;
      localStorage.setItem('newCard', JSON.stringify(taxtypeObj));
      this.router.navigate(['']);
    }
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
