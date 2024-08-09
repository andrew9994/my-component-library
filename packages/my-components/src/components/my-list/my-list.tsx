import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-list',
  styleUrl: 'my-list.css',
  shadow: true,
})
export class MyList {
  @Prop() items: string[];

  render() {
    return (
      <ul>
        {this.items.map((item) => <li>{item}</li>)}
      </ul>
    );
  }
}
