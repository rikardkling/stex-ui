import React from "react";
import { createComponent } from "@lit/react";
import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("se-container")
export class SeContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
    }

    .container {
      padding: 25px;
      background: pink;
    }
  `;

  render() {
    return html`<div class="container"><slot></slot></div>`;
  }
}

export const SeContainerReact = createComponent({
  tagName: "se-container",
  elementClass: SeContainer,
  react: React,
});
