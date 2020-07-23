// IMPORT THE PLUGIN
import MarkdownIt from 'markdown-it';

// CREATE THE FUNCTION
const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  // We are here creating an instance of the class MarkdownIt
  // If this were Ruby, it would be like that: 
  // markdown = MardownIt.new
  const markdown = new MarkdownIt();
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

// EXPORT THE FUNCTION
export { initMarkdown };
