import SingleQuestion from "./SingleQuestion";
import data from "./data";
function App() {
  return (
    <div className="section-center">
      <h2 className="title">Frequently asked questions</h2>
      <div className="faq">
        {data.map((item, index) => {
          return <SingleQuestion key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
