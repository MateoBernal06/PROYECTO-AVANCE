
import './estilos/style.css';
import Menu from './componentes/menu';
import Informacion from './componentes/informacion';
import Cooperativas from './componentes/cooperativas';
import Pie from './componentes/pie';


function Pantalla_inicio() {
  return (
    <div className="App">  
      <Menu/>
      <Informacion/>
      <Cooperativas/>
      <Pie/>
    </div>
  );
}

export default Pantalla_inicio;
