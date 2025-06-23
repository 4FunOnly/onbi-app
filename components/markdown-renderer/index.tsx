'use client';

import React from 'react';
import './markdown.style.css';
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

const components: Components = {
  h2({ node, children, ...props }) {
    return (
      <h2 {...props} className="group scroll-mt-20">
        {children}
        <a
          href={`#${(node?.properties as any).id}`}
          className="opacity-0 group-hover:opacity-100 ml-2 text-gray-400"
        >
          🔗
        </a>
      </h2>
    );
  },
  ol({ children }) {
    return (
      <ol className="ml-5" style={{ listStyle: 'decimal' }}>
        {children}
      </ol>
    );
  },
  table({ children }) {
    return (
      <div className="overflow-auto">
        <table className="table-auto border-collapse border border-gray-200">
          {children}
        </table>
      </div>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    );
  },
  img({ src, alt, title }) {
    return (
      <figure className="text-center my-4">
        <img src={src} alt={alt} title={title} className="mx-auto" />
        {alt && (
          <figcaption className="text-xs text-gray-500 mt-1">{alt}</figcaption>
        )}
      </figure>
    );
  },
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behaviour: 'wrap' }],
          rehypeHighlight,
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
