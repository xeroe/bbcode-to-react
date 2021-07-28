// https://github.com/vishnevskiy/bbcodejs/blob/master/src/coffee/tags.coffee
import React from "react";
import Tag from "../tag";

export default class SizeTag extends Tag {
  toHTML() {
    const size = this.params.size / 100;

    if (isNaN(size)) {
      return this.getContent();
    }
    return [
      `<span style="font-size:${size}em;line-height: ${size}em;">`,
      this.getContent(),
      "</span>",
    ];
  }

  toReact() {
    const size = this.params.size / 100;

    if (isNaN(size)) {
      return this.getComponents();
    }

    return (
      <span style={{ fontSize: `${size}em`, lineHeight: `${size}em` }}>
        {this.getComponents()}
      </span>
    );
  }
}
