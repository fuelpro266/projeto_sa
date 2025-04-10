import './App.css';
import LineChartModel from "./Pagina/Graficos-Estilos/Line_Modelo";
import AreaChartModel from "./Pagina/Graficos-Estilos/Area_Modelo";
import BarChartModel from "./Pagina/Graficos-Estilos/Bar_Modelo";
import PieChartModel from "./Pagina/Graficos-Estilos/Pie_Modelo";

import Top_Nav from "./Pagina/Layout/Top_Nav";
import { useState, useEffect } from 'react';
import Footer_fun from "./Pagina/Layout/Footer";
import Avisos from './Pagina/aviso/aviso';
function App() {
  const [dados, setDados] = useState({});
  const [agua, setAgua] = useState([]);
  const [agua_n, setAguaN] = useState([]);
  const [oleo, setOleo] = useState([]);
  const [oleo_n, setOleo_n] = useState([]);
  const [oleo_p, setOleo_p] = useState([]);
  const [acelerador, setAcelerador] = useState([]);
  const [velocidade, setVelocidade] = useState([]);
  const [rpmMotor, setRpmMotor] = useState([]);
  const [Tb, setTB] = useState([]);
  const [motor, setMotor] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Chamando a cada 5 segundos");
      fetch("https://8ce6d78d-e58a-4bec-9296-18cdf3509714-00-1m4lisu2dizfq.riker.replit.dev/")
        .then((res) => res.json())
        .then(data => {
          if (data?.sensores?.temperaturaAgua !== undefined) {
            setDados(data.sensores);
            verificarArr_agua(data.sensores);
            verificarArr_agua_n(data.sensores);
            verificarArr_oleo(data.sensores);
            verificarArr_oleo_n(data.sensores);
            pressaoOleo_f(data.sensores);
            Acelerador_f(data.sensores);
            velocidade_f(data.sensores);
            tensaoBateria(data.sensores);
            RpmMotor(data.sensores);
          }
        })
        .catch(error => console.error("Erro ao buscar dados:", error));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);




  const verificarArr_agua = (dadosSensor) => {
    setAgua((prevAgua) => {
      const novoArray = [...prevAgua];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const temperatura = Number(dadosSensor.temperaturaAgua);
      
      if (!isNaN(temperatura)) {
        novoArray.push({
          name: temperatura,
          temperaturaAgua: temperatura
        });
      }

      return novoArray;
    });
  };

  const verificarArr_agua_n = (dadosSensor) => {
    setAguaN((prevAgua) => {
      const novoArray = [...prevAgua];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const nivel = Number(dadosSensor.nivelAgua);
      if (!isNaN(nivel)) {
        novoArray.push({
          name: nivel, 
          nivelAgua: nivel
        });
      }

      return novoArray;
    });
  };





  const verificarArr_oleo = (dadosSensor) => {
    setOleo((prevOleo) => {
      const novoArray = [...prevOleo];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const oleo = Number(dadosSensor.temperaturaOleo);
      if (!isNaN(oleo)) {
        novoArray.push({
          name: oleo,
          temperaturaOleo: oleo
        });
      }

      return novoArray;
    });
  };





  const verificarArr_oleo_n = (dadosSensor) => {
    setOleo_n((prevOleo_n) => {
      const novoArray = [...prevOleo_n];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const oleo = Number(dadosSensor.nivelOleo);
      if (!isNaN(oleo)) {
        novoArray.push({
          name: oleo,
          nivelOleo: oleo
        });
      }

      return novoArray;
    });
  };




  const pressaoOleo_f = (dadosSensor) => {
    setOleo_p((prevOleo) => {
      const novoArray = [...prevOleo];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const pressao = Number(dadosSensor.pressaoOleo);
      if (!isNaN(pressao)) {
        novoArray.push({
          name: pressao,
          pressaoOleo: pressao
        });
      }

      return novoArray;
    });
  };

  const Acelerador_f = (dadosSensor) => {
    setAcelerador((prevAce) => {
      const novoArray = [...prevAce];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const ace = Number(dadosSensor.acelerador);
      if (!isNaN(ace)) {
        novoArray.push({
          name: ace,
          acelerador: ace
        });
      }

      return novoArray;
    });
  };


  const velocidade_f = (dadosSensor) => {
    setVelocidade((prevVelo) => {
      const novoArray = [...prevVelo];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const Velo = Number(dadosSensor.velocidade);
      if (!isNaN(Velo)) {
        novoArray.push({
          name: Velo,
          velocidade: Velo
        });
      }

      return novoArray;
    });
  };

  const RpmMotor = (dadosSensor) => {
    setRpmMotor((prevRpm) => {
      const novoArray = [...prevRpm];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const rpm = Number(dadosSensor.pressaoOleo);
      if (!isNaN(rpm)) {
        novoArray.push({
          name: rpm,
          rpmMotor: rpm
        });
      }

      return novoArray;
    });
  };

  const tensaoBateria = (dadosSensor) => {
    setTB((prevtb) => {
      const novoArray = [...prevtb];
      if (novoArray.length >= 4) {
        novoArray.shift();
      }
      const tb = Number(dadosSensor.tensaoBateria);
      if (!isNaN(tb)) {
        novoArray.push({
          name: tb,
          rpmMotor: tb
        });
      }

      return novoArray;
    });
  };
  
  return (
    <div className="div-Container">
      <Top_Nav />
      <Avisos/>
      <div className="coluna">
        <div className="card-data">
          <label className='dads'>Temperatura Água</label>
          <LineChartModel
            data={agua}
            dataKeyX="name"
            dataKeysY={["temperaturaAgua"]}
            colors={["#1e90ff"]}
            
          />
          <label>Temperatura Atual: {agua.length > 0 ? agua[agua.length - 1].temperaturaAgua + " ºC" : "Carregando..."}</label>
        </div>

        
        <div className="card-data">
        <label className='dads'>Nível Água</label>
          <AreaChartModel
            data={agua_n}
            dataKeyX="name"
            dataKeysY={["nivelAgua"]}
            colors={["#87cefa"]}
          />
          <label>Nivel Atual: {agua_n.length > 0 ? agua_n[agua_n.length - 1].nivelAgua + " L" : "Carregando..."}</label>
        </div>

        
        <div className="card-data">
          <label className='dads'>Pressão Óleo</label>
          <LineChartModel
            data={oleo_p}
            dataKeyX="name"
            dataKeysY={["pressaoOleo"]}
            colors={["#ffa500"]}
            
          />
          <label>Pressão Atual: {oleo_p.length > 0 ? oleo_p[oleo_p.length - 1].pressaoOleo + " KPA" : "Carregando..."}</label>
        </div>
      </div>



      <div className="coluna">
        <div className="card-data">
          <label className='dads'>Acelerador</label>
          <LineChartModel
            data={acelerador}
            dataKeyX="name"
            dataKeysY={["acelerador"]}
            colors={["#32cd32"]}
            
          />
          <label>Aceleração Atual: {acelerador.length > 0 ? acelerador[acelerador.length - 1].acelerador + " KM" : "Carregando..."}</label>
        </div>

        
        <div className="card-data">
        <label className='dads'>Velocidade</label>
          <AreaChartModel
            data={velocidade}
            dataKeyX="name"
            dataKeysY={["velocidade"]}
            colors={["#ff4500"]}
          />
          <label>Velocidade Atual: {velocidade.length > 0 ? velocidade[velocidade.length - 1].velocidade + " KM" : "Carregando..."}</label>
        </div>
        <div className="card-data">
          <label className='dads'>RPM Motor</label>
          <LineChartModel
            data={rpmMotor}
            dataKeyX="name"
            dataKeysY={["rpmMotor"]}
            colors={["#8a2be2"]}
            
          />
          <label>Rpm Atual: {rpmMotor.length > 0 ? rpmMotor[rpmMotor.length - 1].rpmMotor + " KM" : "Carregando..."}</label>
        </div>
      </div>




      <div className="coluna">
        <div className="card-data">
          <BarChartModel
            data={oleo}
            dataKeyX="name"
            dataKeysY={["temperaturaOleo"]}
            colors={["#8b4513"]}
          />
          <label>Temperatura Atual: {oleo.length > 0 ? oleo[oleo.length - 1].temperaturaOleo + " ºC" : "Carregando..."}</label>
        </div>

        <div className="card-data">
          <LineChartModel
            data={oleo_n}
            dataKeyX="name"
            dataKeysY={["nivelOleo"]}
            colors={["#d2691e"]}
          />
          <label>Nivel Atual: {oleo_n.length > 0 ? oleo_n[oleo_n.length - 1].nivelOleo + " L" : "Carregando..."}</label>
        </div>
        <div className="card-data">
        <LineChartModel
            data={Tb}
            dataKeyX="name"
            dataKeysY={["tensaoBateria"]}
            colors={["#ffd700"]}
          />
          <label>Tensão Atual: {Tb.length > 0 ? Tb[Tb.length - 1].tensaoBateria + " V" : "Carregando..."}</label>
        </div>
      </div>

      <Footer_fun />
    </div>
  );
}

export default App;
