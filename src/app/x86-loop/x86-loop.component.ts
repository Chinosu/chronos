import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-x86-loop',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './x86-loop.component.html',
  styleUrl: './x86-loop.component.css'
})
export class X86LoopComponent {
  text = `section .text
    global _start

_start:
    mov ecx, 0 ; Initialize your counter to 0

loop:
    ; Increment the counter
    inc ecx

    ; Call a delay function to wait for approximately one second
    call delay

    ; Loop back to increment and wait again
    jmp loop

; Simple delay function
delay:
    push eax
    push ecx

    mov ecx, 0x0FFFFFFF ; Adjust this value to control the delay length

delay_loop:
    dec ecx
    jnz delay_loop

    pop ecx
    pop eax
    ret
`;
  lines: string[] = [];
  currentHighlightIndex = -1;

  ngOnInit(): void {
    this.lines = this.text.split('\n');
    setInterval(() => {
      this.currentHighlightIndex = (this.currentHighlightIndex + 1) % this.lines.length;
    }, 200);
  }

  getLineClass(index: number): string {
    return index === this.currentHighlightIndex ? 'highlight' : '';
  }
}
