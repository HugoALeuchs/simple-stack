import SpecificationSection from "./Components/SpecificationSection/SpecificationSection";
import UsesSection from "./Components/UsesSection/UsesSection";

function App() {
  return (
    <div className="App">
      <SpecificationSection padding="10rem 0 0" />
      <UsesSection />
      <SpecificationSection padding="25rem 0 0" />
    </div>
  );
}

export default App;
