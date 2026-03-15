import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPLOYEES } from '../../models/data';

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css'
})
export class EmployeeDirectoryComponent {
  employees = EMPLOYEES;
}