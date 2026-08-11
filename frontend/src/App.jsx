import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FeaturesCard from "./components/FeaturesCard";
import AssistantCard from "./components/AssistantCard";

function App() {
  return (
    <div className="container">

      <Sidebar />

      <main className="main-content">

        <Header />

        <section className="cards">

          <FeaturesCard />

          <AssistantCard />

        </section>

      </main>

    </div>
  );
}

export default App;