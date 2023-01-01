import React from "react";
import Plot from 'react-plotly.js'
import PlotlyDark from "./PlotlyDark";
import PassiveMembrane from './PassiveMembrane';
import colorChoices from "../colorChoices";
import { sizeHeight } from "@mui/system";


const PassiveMembraneChart = ({ V0, R,C,Iinj }) => {
    var mem = new PassiveMembrane(V0=V0,R=R, C=C)
    const preTime = 10;
    const totalTime = 150;
    const dt = 0.005;
    const preSteps = preTime/dt;
    const totalSteps = totalTime/dt;
    var t = -preTime;
    var time = [t];
    var Ii = 0
    var I = [Ii];
    const startPulse =  0;
    const endPulse = 0.7 * totalTime;
    for(let i = -preSteps; i < totalSteps; i++){
        if (i < 0){
            Ii = 0;
            I.push(Ii);
            t = dt+(i*dt)
            time.push(t);
            mem.charge(0,0, endPulse); //careful this needs to be fixed
        }
        else if (t >=  startPulse && t < endPulse){
            Ii = Iinj;
            I.push(Ii);
            t = dt+(i*dt)
            time.push(t);
            //mem.updateV(Iinj,t, endPulse); //careful this needs to be fixed
            mem.charge(Iinj,t); 
        } else{
            Ii = 0;
            I.push(Ii);
            t = dt+(i*dt)
            time.push(t);
            mem.discharge(t-endPulse, mem.vMax); //careful this needs to be fixed
        }
        
        
    }

    const trace1 = { x:time, y:mem.V, type:'scatter', mode:'lines', name:'V', line: { color: colorChoices['V']}}
    const trace2 = { x:time, y:mem.Ic, type:'scatter', mode:'lines', name:'I<sub>C</sub>',  yaxis: 'y2', line: { color: colorChoices['Ic']}, opacity:0.5}
    const trace3 = { x:time, y:mem.V, type:'scatter', mode:'lines', name:'I<sub>R</sub>',  yaxis: 'y2', line: { color: colorChoices['Ir'], width:4, dash:'dot'}, opacity:0.5}
    const trace4 = { x:[time[0], time[time.length -1]], y:[Iinj*R, Iinj*R], type:'scatter', mode:'lines', name:'V<sub>max</sub>=I<sub>max</sub>R', line: { color: '#ff2a6d', dash:'dot'}, opacity:0.5}

    const trace5 = { x:time, y:I, type:'scatter', mode:'lines', name:'I<sub>injected</sub>', yaxis: 'y3', line: { color: colorChoices['Iinj']}}

    const plotData = [trace1, trace2, trace3, trace4, trace5]

    return(
        <div>
            <Plot data = {plotData}
            layout = {
                {
                    width: 700, 
                    height: 600,  
                    template: PlotlyDark,
                    grid: {rows: 5, columns: 1},
                    hovermode:'x unified',
                    paper_bgcolor: colorChoices['plot_background'],
                    plot_bgcolor: colorChoices['plot_background'],

                    title:'Passive Membrane',
                    xaxis: {
                        title: 'time (ms)',
                        zeroline: false,
                        spikecolor: "white"
                    },
                    yaxis: {title: 'mV', range: [-75, 100], domain: [0.3, 1], tickvals: [-50, 0, 50, 100], zeroline: false},
                    yaxis2: {
                        title: 'mA',
                        tickfont: {color: colorChoices['Ic']},
                        titlefont: {color: colorChoices['Ir']},
                        overlaying: 'y',
                        side: 'right', 
                        tickvals: [-50, 0, 50, 100],
                        range: [-75, 100]
                      },
                    yaxis3: {title: 'mA<sub>inj.</sub>', range: [-30, 100], tickvals: [-50, 0, 50], domain: [0, .3]},
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

export default PassiveMembraneChart;

