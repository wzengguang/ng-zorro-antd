// tslint:disable:no-any
import { Component } from '@angular/core';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }]
  }]
}];

@Component({
  selector: 'nz-demo-cascader-change-on-select',
  template: `
    <nz-cascader
      nzChangeOnSelect
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)">
    </nz-cascader>`,
  styles  : [
    `
    .ant-cascader-picker {
      width: 300px;
    }
    `
  ]
})
export class NzDemoCascaderChangeOnSelectComponent {
  /** init data */
  nzOptions = options;

  /** ngModel value */
  public values: any[] = null;

  public onChanges(values: any): void {
    console.log(values, this.values);
  }
}
