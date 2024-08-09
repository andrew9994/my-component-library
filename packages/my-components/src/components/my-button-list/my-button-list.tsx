import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'my-button-list',
  styleUrl: 'my-button-list.css',
  shadow: true,
})
export class MyButtonList {

  @State() items: string[] = [];

  render() {
    return (
      <Host>
        <my-button onClick={() => this.fetchItems()}>Fetch Star Wars people</my-button>
        <my-list items={this.items}></my-list>
      </Host>
    );
  }

  public fetchItems = () => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => {
        this.items = data.results.map(result => result.name);
      });
  }
}
