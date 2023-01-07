import React from "react";
import Plot from 'react-plotly.js'
import PlotlyDark from "./PlotlyDark";
import HHNeuron from './HHNeuron';
import colorChoices from "../colorChoices";

const HHChartV = ({ Vhold, totalTime, stimDur }) => {
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
            Ii = Vhold;
        } else{
            Ii = 0;
        }
        n.updateNeuronVClamp(Ii, dt, i);
        I.push(Ii);
        t = dt+(i*dt)
        time.push(t);
    }
    n.time = time;
    n.I = I;

    const trace1 = { x:n.time, y:n.V, type:'scatter', mode:'lines', name:'V', line: { color: colorChoices['V']}}

    const trace3 = { x:n.time, y:n.Ina, type:'scatter', mode:'lines', name:'I<sub>Na</sub>', yaxis: 'y2', line: { color: colorChoices['Ina']}}
    const trace4 = { x:n.time, y:n.Ik, type:'scatter', mode:'lines', name:'I<sub>K</sub>', yaxis: 'y2', line: { color: colorChoices['Ik']}}
    const trace5 = { x:n.time, y:n.Il, type:'scatter', mode:'lines', name:'I<sub>leak</sub>', yaxis: 'y2',line: { color: colorChoices['Il']}}
    const trace6 = { x:n.time, y:n.Ic, type:'scatter', mode:'lines', name:'I<sub>cap</sub>', yaxis: 'y2',line: { color: colorChoices['Ic']}}

    
    const trace8 = { x:n.time, y:n.m, type:'scatter', mode:'lines', name:'m', yaxis: 'y3', line: { color: colorChoices['m']}}
    const trace9 = { x:n.time, y:n.n, type:'scatter', mode:'lines', name:'n', yaxis: 'y3', line: { color: colorChoices['n']}}
    const trace10 = { x:n.time, y:n.h, type:'scatter', mode:'lines', name:'h', yaxis: 'y3', line: { color: colorChoices['h']}}
    const trace11 = { x:n.time, y:n.gna.map(val => val/n.Gna), type:'scatter', mode:'lines', name:'m<sup>3</sup>h', yaxis: 'y3', line: { color: colorChoices['m3h']}}
    const trace12 = { x:n.time, y:n.gk.map(val => val/n.Gk), type:'scatter', mode:'lines', name:'n<sup>4</sup>', yaxis: 'y3', line: { color: colorChoices['n4']}}

    
    const trace13 = { x:n.time, y:n.gna, type:'scatter', mode:'lines', name:'G<sub>Na</sub>', yaxis: 'y4',line: { color: colorChoices['Gna']}}
    const trace14 = { x:n.time, y:n.gk, type:'scatter', mode:'lines', name:'G<sub>K</sub>', yaxis: 'y4',line: { color: colorChoices['Gk']}}
    const plotData = [trace1, trace3, trace4,trace5, trace6, trace8, trace9, trace10, trace11, trace12, trace13, trace14 ]

    return(
        <div>
            <Plot data = {plotData}
            layout = {
                {
                    width: 700, 
                    height: 800,  
                    template: PlotlyDark,
                    grid: {rows: 4, columns: 1},
                    hovermode:'x unified',
                    paper_bgcolor: colorChoices['plot_background'],
                    plot_bgcolor: colorChoices['plot_background'],

                    title:'Hodgkin & Huxley Model (Voltage)',
                    xaxis: {
                        title: 'time (ms)',
                        zeroline: false,
                        spikecolor: "white"
                    },
                    yaxis: {title: 'mV', range: [-129, 5], domain: [0.85, 1], tickvals: [-100, -50, 0, 50], zeroline: false},
                    yaxis2: {title: 'mA', range: [-999, 999], tickvals: [-500, 0, 500], domain: [0.5, 0.85], zeroline: false},
                    yaxis3: {title: 'prob.', range: [-.1, 1.1], tickvals: [0, 0.5, 1], zeroline: false},
                    yaxis4: {title: 'mS', range: [-5, 49], tickvals: [0, 20, 40], zeroline: false}
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

export default HHChartV;
