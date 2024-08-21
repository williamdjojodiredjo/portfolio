import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewerPage.css';
import NavBar from '../NavBar/NavBar';
import image1 from '../Images/Image1.jpg'

// Configure marked to interpret carriage returns as <br> elements
marked.setOptions({
  gfm: true,
  breaks: true
});

const MarkdownPreviewerPage = () => {
  const [markdown, setMarkdown] = useState(`# Heading Element (H1)

## Subheading Element (H2)

This is a [link](https://www.example.com) to an example website.

Here is some \`inline code\`.

\`\`\`
This is a code block.
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Alt text for image](${image1})

**This text is bolded.**
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div>
      <NavBar />
      <div className="markdown-previewer">
        <textarea
          id='editor' 
          value={markdown}
          onChange={handleChange}
        />
        <div 
          id='preview'
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewerPage;
