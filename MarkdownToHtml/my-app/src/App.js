import "./App.css";
import React, { useState } from "react";
import marked from "marked";

function App() {
  const [text, setText] = useState("");

  function inputChange(event) {
    setText(event.target.value);
  }

  function createMark() {
    return { __html: marked(text) };
  }

  const headingOne = () => {
    setText(`# ${text} `);
  };
  const headingTwo = () => {
    setText(`## ${text} `);
  };
  const bold = () => {
    setText(`**${text}**`);
  };
  const italic = () => {
    setText(`*${text}*`);
  };
  const line = () => {
    setText(`${text}---\n`);
  };

  return (
    <div className="App flex flex-col items-center p-8 bg-gradient-to-r from-gray-500 via-red-500 to-gray-500 min-h-screen">
      <header className="mb-6">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Markdown to HTML Converter
        </h1>
      </header>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <textarea
          value={text}
          onChange={inputChange}
          placeholder="Markdown..."
          className="w-full p-4 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-red-900"
          rows="10"
        />
        <div className="flex space-x-3 mb-4 justify-center">
          <button
            onClick={headingOne}
            className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-blue-800 transform transition duration-300"
          >
            Heading 1
          </button>
          <button
            onClick={headingTwo}
            className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-indigo-800 transform transition duration-300"
          >
            Heading 2
          </button>
          <button
            onClick={bold}
            className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-green-800 transform transition duration-300"
          >
            Bold
          </button>
          <button
            onClick={italic}
            className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-yellow-800 transform transition duration-300"
          >
            Italic
          </button>
          <button
            onClick={line}
            className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 transform transition duration-300"
          >
            Horizontal Line
          </button>
        </div>
        <div
          className="p-10 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800"
          dangerouslySetInnerHTML={createMark()}
        ></div>
      </div>
    </div>
  );
}

export default App;
