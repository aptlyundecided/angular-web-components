import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  private scrub: Subject<boolean>;

  // Selections & Fixed form Data
  sandwichTypes: any[] = [
    { value: 'Club', key: 0},
    { value: 'Meatball', key: 1},
    { value: 'Italian', key: 2},
    { value: 'Tuna', key: 3},
    { value: 'Turkey', key: 4},
  ];
  sandwichSizes: any[] = [
    { value: 'small', key: 0 },
    { value: 'medium', key: 1 },
    { value: 'large', key: 2 },
  ];
  chipSelections: any[] = [
    { value: 'Sour Cream and Onion', key: 0 },
    { value: 'Salt and Vinegar', key: 1 },
    { value: 'Plain', key: 2 },
    { value: 'Barbeque', key: 3 },
  ];
  drinkSelections: any[] = [
    { value: 'Coke', key: 0 },
    { value: 'Dr. Pepper', key: 1 },
    { value: 'Sprite', key: 2 },
    { value: 'Coke Zero', key: 3 },
    { value: 'Fanta', key: 4 },
  ];

  // form control properties
  sandwichForm: FormGroup;

  constructor() {
    this.scrub = new Subject<boolean>();
    this.sandwichForm = new FormGroup<any>({
      selectedSandwich: new FormControl(''),
      selectedSandwichSize: new FormControl(''),
      chipTypeSelection: new FormControl({value: '', disabled: true}),
      drinkTypeSelection: new FormControl({value: '', disabled: true}),
      containsChips: new FormControl({value: false, disabled: false}),
      containsDrink: new FormControl({value: false, disabled: false}),
    });
  }

  ngOnInit(): void {
    this.sandwichForm.valueChanges
      .pipe(takeUntil(this.scrub))
      .subscribe({
        next: (formData) => {

          // Update drink selection enable/disable state
          if (formData.containsDrink) {
            this.sandwichForm.get('drinkTypeSelection')?.enable({ emitEvent: false });
          } else {
            this.sandwichForm.get('drinkTypeSelection')?.disable({ emitEvent: false });
          }

          // Update chips selection enable/disable state
          if (formData.containsChips) {
            this.sandwichForm.get('chipTypeSelection')?.enable({ emitEvent: false });
          } else {
            this.sandwichForm.get('chipTypeSelection')?.disable({ emitEvent: false });
          }
        }
      });
  }
}
