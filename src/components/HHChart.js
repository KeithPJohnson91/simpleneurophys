import React from "react";
import Plot from 'react-plotly.js'
import PlotlyDark from "./PlotlyDark";
import HHNeuron from './HHNeuron';
import colorChoices from "../colorChoices";

const HHChart = ({ Iinj, totalTime, stimDur }) => {
    var n = new HHNeuron()
    const dt = 0.005;
    const totalSteps = totalTime/dt;
    var t = 0;
    var time = [t];
    var Ii = 0
    var I = [Ii];
    const startPulse = .1 * totalTime;
    const endPulse = startPulse + stimDur;
    for(let i = 0; i < totalSteps; i++){
        if (t >  startPulse && t < endPulse){
            Ii = Iinj;
        } else{
            Ii = 0;
        }
        n.updateNeuronIClamp(Ii, dt, i);
        //n.updateNeuronIClamp(Ii, dt, i);
        I.push(Ii);
        t = dt+(i*dt)
        time.push(t);
        
    }
    n.time = time;
    n.I = I;

    const trace1 = { x:n.time, y:n.V, type:'scatter', mode:'lines', name:'V', line: { color: colorChoices['V']}}
    const trace2 = { x:n.time, y:n.I, type:'scatter', mode:'lines', name:'I<sub>injected</sub>', yaxis: 'y2', line: { color: colorChoices['Iinj']}}
    
    const trace3 = { x:n.time, y:n.Ina, type:'scatter', mode:'lines', name:'I<sub>Na</sub>', yaxis: 'y3', line: { color: colorChoices['Ina']}}
    const trace4 = { x:n.time, y:n.Ik, type:'scatter', mode:'lines', name:'I<sub>K</sub>', yaxis: 'y3', line: { color: colorChoices['Ik']}}
    const trace5 = { x:n.time, y:n.Il, type:'scatter', mode:'lines', name:'I<sub>leak</sub>', yaxis: 'y3',line: { color: colorChoices['Il']}}
    const trace6 = { x:n.time, y:n.Ic, type:'scatter', mode:'lines', name:'I<sub>cap</sub>', yaxis: 'y3',line: { color: colorChoices['Ic']}}

    
    const trace8 = { x:n.time, y:n.m, type:'scatter', mode:'lines', name:'m', yaxis: 'y4', line: { color: colorChoices['m']}}
    const trace9 = { x:n.time, y:n.n, type:'scatter', mode:'lines', name:'n', yaxis: 'y4', line: { color: colorChoices['n']}}
    const trace10 = { x:n.time, y:n.h, type:'scatter', mode:'lines', name:'h', yaxis: 'y4', line: { color: colorChoices['h']}}
    const trace11 = { x:n.time, y:n.gna.map(val => val/n.Gna), type:'scatter', mode:'lines', name:'m<sup>3</sup>h', yaxis: 'y4', line: { color: colorChoices['m3h']}}
    const trace12 = { x:n.time, y:n.gk.map(val => val/n.Gk), type:'scatter', mode:'lines', name:'n<sup>4</sup>', yaxis: 'y4', line: { color: colorChoices['n4']}}

    
    const trace13 = { x:n.time, y:n.gna, type:'scatter', mode:'lines', name:'G<sub>Na</sub>', yaxis: 'y5',line: { color: colorChoices['Gna']}}
    const trace14 = { x:n.time, y:n.gk, type:'scatter', mode:'lines', name:'G<sub>K</sub>', yaxis: 'y5',line: { color: colorChoices['Gk']}}
    const plotData = [trace1, trace2, trace3, trace4,trace5, trace6, trace8, trace9, trace10, trace11, trace12, trace13, trace14 ]

    return(
        <div>
            <Plot data = {plotData}
            layout = {
                {
                    width: 700, 
                    height: 800,  
                    template: PlotlyDark,
                    grid: {rows: 5, columns: 1},
                    hovermode:'x unified',
                    paper_bgcolor: colorChoices['plot_background'],
                    plot_bgcolor: colorChoices['plot_background'],

                    title:'Hodgkin & Huxley Model (Current)',
                    xaxis: {
                        title: 'time (ms)',
                        zeroline: false,
                        spikecolor: "white"
                    },
                    yaxis: {title: 'mV', range: [-129, 60], domain: [0.7, 1], tickvals: [-100, -50, 0, 50], zeroline: false},
                    yaxis2: {title: '??A/cm<sup>2</sup><sub>inj.</sub>', range: [-62, 100], tickvals: [-50, 0, 50], domain: [0.6, .69]},
                    yaxis3: {title: '??A/cm<sup>2</sup>', range: [-999, 999], tickvals: [-500, 0, 500], zeroline: false},
                    yaxis4: {title: 'prob.', range: [-.1, 1.1], tickvals: [0, 0.5, 1], zeroline: false},
                    yaxis5: {title: 'mS/cm??', range: [-5, 49], tickvals: [0, 20, 40], zeroline: false}
                }  
            } 
            config = {
                {
                    modeBarButtonsToAdd: ['hovercompare']
                }
            }  
            />
        </div>
        )
}

export default HHChart;

