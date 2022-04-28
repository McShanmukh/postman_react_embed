import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdown = `[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/10262939-7b7f4f0b-39e1-4761-956a-d7175a3e1aa5?action=collection%2Ffork&collection-url=entityId%3D10262939-7b7f4f0b-39e1-4761-956a-d7175a3e1aa5%26entityType%3Dcollection%26workspaceId%3D38e9835a-3c03-4ce7-874a-bfb598a55575)`

ReactDom.render(
  <ReactMarkdown
    children={markdown}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />,
  document.body
)