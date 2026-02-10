export const homePage = [
  {
    id: "hero",
    component: "SimpleCard",
    props: {
      title: "MythCraft",
      description: "This page is rendered by Mythos Forge",
      action: "cta.test",
    },
    children: [
      {
        id: "child",
        component: "SimpleBox",
        props: { text: "Nested works" },
      },
    ],
  },
  {
  component: "Stack",
  id: "button",
  children: [// no action
{ component: "SimpleButton", props: { label: "Static" } },

// with action
{ component: "SimpleButton", props: { label: "Click", action: "cta.test" } },

// card without behavior
{ component: "SimpleCard", props: { title: "Hello" } },]
},


,
];
