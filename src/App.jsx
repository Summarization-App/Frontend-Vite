import FileDropZone from "./File_Dropzone";
import "./App.css";
import TextBox from "./TextBox";

function App() {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold summarization_heading">
          Summarization App
        </h1>
        <h2 className="text-xl font-bold summarization_heading">
          Please provide the valid file and don't forget to provide the relevant
          prompt
        </h2>
      </div>
      <div className="container mx-auto">
        <FileDropZone />
      </div>
      <TextBox />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className="text-xl font-bold summarization_heading">Summary</h2>
    </div>
  );
}

export default App;
