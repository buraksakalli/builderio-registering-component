import { Builder, BuilderComponent } from "@builder.io/react";

export const Heading = (props: any) => <h1>{props.title}</h1>;

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [{ name: "title", type: "text" }],
});
