import "./App.css";
import Audiolibro from "./components/Audiolibro";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <h1>Casos de<br /><span className="text-cc_blue dantina">consejería en línea</span><br /><span className="text-2xl">un enfoque centrado en</span><br /><span className="text-cc_blue">soluciones</span></h1>
        <div className="text-center">
          <h2>¿Qué prefieres?</h2>
        </div>
        <div className="md:flex md:flex-row">
          <div className="md:w-3/5 md:p-4">
            <h3 className="bg-cc_blue md:bg-cc_gold">Libro</h3>
            <img src="public/images/consejeria-cover.png" alt="" />
            <p>
              <a
                href="http://www.librosoa.unam.mx/handle/123456789/3639"
                target="_blank"
                rel="noreferrer"
                className="bg-cc_gold hover:bg-cc_blue text-gray-50 text-xl p-4 inline-block my-6 mb-20 rounded-md"
              >
                Descarga libro electrónico
              </a>
            </p>
          </div>
          <div className="md:w-2/5 md:p-4">
            <h3 className="bg-cc_gold md:bg-cc_blue">Audiolibro</h3>
            <div id="audioplayer">
              <Audiolibro />
            </div>            
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
