import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHighlightDirective } from './directives/element-highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BorderOnMouseLeaveDirective } from './directives/border-on-mouse-leave.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ElementHighlightDirective, BorderOnMouseLeaveDirective],
  exports: [
    ElementHighlightDirective,
    BorderOnMouseLeaveDirective,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
