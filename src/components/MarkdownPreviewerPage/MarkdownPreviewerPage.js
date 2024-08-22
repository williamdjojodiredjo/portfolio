import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewerPage.css';
import NavBar from '../NavBar/NavBar';
import image1 from '../Images/Image1.jpg';

// Configure marked to interpret carriage returns as <br> elements
marked.setOptions({
  gfm: true,
  breaks: true
});

const MarkdownPreviewerPage = () => {
  const [markdown, setMarkdown] = useState(`# Heading Element (H1)

## Subheading Element (H2)

This is a [link](https://williamdjojodiredjo.github.io/portfolio) to an example website.

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

  const [isEditorExpanded, setIsEditorExpanded] = useState(false);
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const toggleEditorExpand = () => {
    setIsEditorExpanded(!isEditorExpanded);
  };

  const togglePreviewExpand = () => {
    setIsPreviewExpanded(!isPreviewExpanded);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div>
      <NavBar />
      <div className="markdown-previewer">
        <div className={`editor-section ${isEditorExpanded ? 'expanded' : ''}`}>
          <div className="editor-header">
            <h2>Editor</h2>
            <button onClick={toggleEditorExpand}>
              {isEditorExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          <textarea
            id='editor' 
            value={markdown}
            onChange={handleChange}
            className={isEditorExpanded ? 'expanded' : ''}
          />
        </div>
        <div className={`preview-section ${isPreviewExpanded ? 'expanded' : ''}`}>
          <div className="preview-header">
            <h2>Previewer</h2>
            <button onClick={togglePreviewExpand}>
              {isPreviewExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          <div 
            id='preview'
            className={isPreviewExpanded ? 'expanded' : ''}
            dangerouslySetInnerHTML={getMarkdownText()}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewerPage;
