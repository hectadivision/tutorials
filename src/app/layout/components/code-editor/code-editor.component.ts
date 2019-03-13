import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, OnChanges, forwardRef } from '@angular/core';
import { js_beautify } from 'js-beautify';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';

export function createEditorValidator(code) {
  return (c: FormControl) => {
    return true;
    // let err = {
    //   rangeError: {
    //     given: c.value,
    //     max: maxValue || 10,
    //     min: minValue || 0
    //   }
    // };

    // return (c.value > +maxValue || c.value < +minValue) ? err : null;
  };
}

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CodeEditorComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CodeEditorComponent), multi: true }
  ],
})
export class CodeEditorComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input('code') _code = '';
  @Input() readOnly = false;

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private editor: ace.Ace.Editor;

  propagateChange: any = () => { };
  validateFn: any = () => { };
  onTouched: any = () => { };

  constructor() { }
  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
    this.propagateChange(val);
    this.onTouched();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.validateFn = createEditorValidator(this.code);
    this.propagateChange(this.code);
  }

  writeValue(value: any): void {
    if (value) {
      this.code = value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  initEditor() {
    const element = this.codeEditorElmRef.nativeElement;
    this.editor = ace.edit(element, {
      mode: 'ace/mode/javascript',
      minLines: 10,
      maxLines: 100,
      tabSize: 2,
      showPrintMargin: false,
      readOnly: this.readOnly,
    });

    this.editor.on('change', (obj) => {
      this.code = this.getCompressCode();
    });
  }

  getCompressCode() {
    return this.editor.getValue().replace(/[\s]+/g, ' ');
  }

  beautifyEditor() {
    this.editor.getSession().setValue(js_beautify(this.editor.getValue(), { indent_size: 2 }));
  }

  ngAfterViewInit(): void {
    this.initEditor();
    this.beautifyEditor();
  }

  onBeautify(event: Event) {

    this.beautifyEditor();
    // this.codeChange.emit(this.getCompressCode());
  }

}
