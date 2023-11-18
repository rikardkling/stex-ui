import React from "react";
import { createComponent } from "@lit/react";
import { html, css, LitElement } from "lit";
import { customElement, eventOptions, property } from "lit/decorators.js";

@customElement("se-button")
export class SeButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--se-button-text-color, #000);
    }

    .button {
      padding: 25px;
      background: blue;
      color: red;
    }
  `;

  /** The button's theme variant. */
  @property({ reflect: true }) variant:
    | "default"
    | "primary"
    | "success"
    | "neutral"
    | "warning"
    | "danger"
    | "text" = "default";

  /** The button's size. */
  @property({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  @eventOptions({ passive: true })
  private onClickHandler() {
    console.log("clicked");
  }

  render() {
    return html`<button @click=${this.onClickHandler} class="button">
      <slot></slot>
    </button>`;
  }
}

export const SeButtonReact = createComponent({
  tagName: "se-button",
  elementClass: SeButton,
  react: React,
  events: {
    onClick: "click",
  },
});
