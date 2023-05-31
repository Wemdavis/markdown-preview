import marked from 'marked';
import React from 'react';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      preview: marked(`
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image alt text](https://via.placeholder.com/150)
**Bold text**
      `),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      input: `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image alt text](https://via.placeholder.com/150)
**Bold text**
      `,
    });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      preview: marked(event.target.value),
    });
  }

  render() {
    return (
      <div>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.preview }}></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;