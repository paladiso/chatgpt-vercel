import type { JSXElement } from "solid-js"
import { Title } from "solid-start"

export default function (props: { children?: JSXElement }) {
  return <Title>AskOpenAI智问{props.children ? " | " + props.children : ""}</Title>
}
