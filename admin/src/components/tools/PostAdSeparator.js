class PostAdSeparator {
  static get isReadOnlySupported() {
    return true;
  }

  static get contentless() {
    return true;
  }

  static get toolbox() {
    return {
      title: "Design Now post separator",
      icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"/></g></svg>',
    };
  }

  render() {
    const el = document.createElement("div");

    el.innerText = "Design Now ad block";
    el.style.textAlign = "center";
    el.style.opacity = 0.75;

    return el;
  }

  save() {
    return {};
  }
}

export default PostAdSeparator;
