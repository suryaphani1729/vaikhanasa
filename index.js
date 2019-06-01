import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Prabha',
      data: [
    {
      title:'వైఖానస ఆగమం | వైఖానసులు అంటే ఎవరు?',
      imgUrl:'',
      desc:'వైఖానస ఆగమం: శ్రీ లక్ష్మీ వల్లభారంభాం విఖనో ముని మధ్యమామ్ |<br>అస్మదాచార్య పర్యంతాం వన్దే గురు పరంపరామ్ ||',
      author:'వైఖానసులు'
    },
    {
      title:'Title2',
      imgUrl:'',
      desc:'నారాయణః పితా యస్య మాతా చాపి హరిప్రియా |భ్రుగ్వాది మునయః శిష్యా తస్మై శ్రీ విఖనసే నమః ||ఆనందితాచార్య మనన్య భాజనం &nbsp;సుత్ర్యైక నిష్టం కరణ త్రాయేణా |అనారతం శ్రీపతి పాద పద్మయో: నమామి వైఖానస మాది వైష్ణవం ||శ్రీమద్రామానుజాచార్యుల వారు వైఖానుసుల యొక్క విశిష్టతను కీర్తిస్తూ తెలిపిన శ్లోకం ఇది. ఏ సుత్రమైతే నిందించటానికి శక్యము కానిదో, ఎవరైతే దైవిక, శ్రౌత, శారీరక కర్మలను ఒకే సూత్రము ద్వారా నిత్యమూ శ్రీపతి ఐన శ్రీమహావిష్ణువు యొక్క పాద పద్మములను ఆరాదించినారో వారే వైష్ణవ సంప్రదాయానికి నాంది పలికింది. వారే ఆది వైష్ణవులు.వారే వైఖానసులు.',
      author:'వైఖానసులు'
    },
    {
      title:'Title3',
      imgUrl:'',
      desc:'Some sample data going here,Some sample data going here, Some sample data going here, Some sample data going here,      Some sample data going here, Some sample data going here,Some sample data going here,Some sample data going here,Some sample data going here,Some sample data going here,Some sample data going here,Some sample data going here,Some sample data going here,Some sample data going here,',
      author:'author3'
    }

      ]
    };
  }

  render() {
    return (
      <div className="container">
      <br/>
        {
          this.state.data.map((item,index)=>{

          return(
<div className="card shadow-lg p-3 mb-5 bg-white rounded" key={index}>
        <div className="row no-gutters" >
            <div className="col-auto">
                <img src="//placehold.it/100" className="img-fluid" alt="" />
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.desc}...</p>
                    <a href="#" className="btn btn-secondary">Read More</a>
                </div>
            </div>
        </div>
        <div className="card-footer w-100 text-muted">
            Author: {item.author}
        </div>
    </div>

          )


          })
        }

     
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

  if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
console.log("ok");

          navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('Service Worker registration successful', registration.scope);
          }, function(err) {
            console.log('Service Worker registration failed', err);
          }).catch(function(err) {
            console.log(err);
          });
        });
      } else {
        console.log('Service Worker is not supported by browser.');
      }
         
