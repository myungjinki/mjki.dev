import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import React from "react"

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote {...props} />
}
