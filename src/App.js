import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TodoListPage from './components/TodoListPage/TodoListPage';
import RandomQuoteMachinePage from './components/RandomQuoteMachinePage/RandomQuoteMachinePage';
import MarkdownPreviewerPage from './components/MarkdownPreviewerPage/MarkdownPreviewerPage';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/random-quote-machine" element={<RandomQuoteMachinePage />} />
        <Route path='/markdown-previewer' element={<MarkdownPreviewerPage />} />
      </Routes>
    </Router>
  ); 
}

export default App;
