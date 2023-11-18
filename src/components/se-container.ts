import React from "react";
import { createComponent } from "@lit/react";
import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { TWStyles } from "../styles.ts";
@customElement("se-container")
export class SeContainer extends LitElement {
  static styles = [css``, TWStyles];

  render() {
    return html`<div class="container bg-slate-700 text-white">
      <slot></slot>
    </div>`;
  }
}

export const SeContainerReact = createComponent({
  tagName: "se-container",
  elementClass: SeContainer,
  react: React,
});
