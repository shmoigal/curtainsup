import navigation from "./navigation.json" with { type: "json" };

// Maps each URL to its navigation node so pages can list their children.
const lookup = {};
const walk = (items) => {
  for (const item of items) {
    lookup[item.url] ??= item;
    if (item.children) walk(item.children);
  }
};
walk(navigation);

export default lookup;
