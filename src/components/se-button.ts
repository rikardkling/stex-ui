import React from "react";
import { createComponent } from "@lit/react";
import { html, css, LitElement } from "lit";
import { customElement, eventOptions, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { TWStyles } from "../styles.ts";

@customElement("se-button")
export class SeButton extends LitElement {
  static styles = [css``, TWStyles];

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
    return html`<button
      class=${classMap({
        button: true,
        "bg-orange-500": this.variant === "default",
        "bg-blue-500": this.variant === "primary",
        "bg-green-500": this.variant === "success",
        "bg-slate-500": this.variant === "neutral",
        "bg-yellow-500": this.variant === "warning",
        "bg-red-500": this.variant === "danger",
        "p-4": this.size === "small",
        "p-6": this.size === "medium",
        "p-8": this.size === "large",
      })}
      @click=${this.onClickHandler}
    >
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
