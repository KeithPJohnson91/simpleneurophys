//const fs = require('fs');

class HHNeuron{
    constructor(V0=0, Gk=36, Gna=120, Gl=0.3, Ek = -12, Ena=120, El=4, Cm=1, Vrest=0, VrestDisplay=-65){
        this.Gk=Gk;
        this.Gna=Gna;
        this.Gl=Gl;
        this.Ek = Ek;
        this.Ena=Ena;
        this.El=El;
        this.Cm=Cm;
        this.Vrest=Vrest;
        this.n = [];
        this.m = [];
        this.h = [];
        this.n.push(this.an(0)/(this.an(0)+this.bn(0)));
        this.m.push(this.am(0)/(this.am(0)+this.bm(0)));
        this.h.push(this.ah(0)/(this.ah(0)+this.bh(0)));
        this.VrestDisplay = VrestDisplay
        this.V = [VrestDisplay];
        this.Vlast = V0;
        this.gna = [];
        this.gk = [];
        this.gna.push(this.updateGna(this.m[0], this.h[0]));
        this.gk.push(this.updateGk(this.n[0]));
        this.Ic = [];
        this.Ik = [];
        this.Ina = [];
        this.Il = [];
        this.Iall = [];
        this.Ic.push(0);
        this.Ina.push(this.updateIion(this.gna[0], this.Vlast, this.Ena));
        this.Ik.push(this.updateIion(this.gk[0], this.Vlast, this.Ek));
        this.Il.push(this.updateIion(this.Gl, this.Vlast, this.El));
        this.Iall.push(this.updateIall(0, this.Ina[0], this.Ik[0], this.Il[0]));
    }
    an(V){ return 0.01 * ( (10-V) / (Math.exp((10-V)/10)-1)); };
    bn(V){ return (0.125*Math.exp(-V/80));};
    am(V){ return (0.1*( (25-V) / (Math.exp((25-V)/10)-1))); };
    bm(V){ return (4*Math.exp(-V/18)); };
    ah(V){ return (0.07*Math.exp(-V/20)); };
    bh(V){ return (1/(Math.exp((30-V)/10)+1)); };
    updateGna(m, h){ return this.Gna * Math.pow(m,3) * h; };
    updateGk(n){ return this.Gk * Math.pow(n,4); };
    updateIion(gIon, V, Eion){ return gIon * (V-Eion); };
    updateIall(Ic=0, Ina=0, Ik=0, Il=0){ return Ic+Ina+Ik+Il; }
    updateIc(Iinj, Ik, Ina, Il){ return Iinj - Ik - Ina - Il; };
    updateV(V,Ic,dt){ return V + dt*Ic; };
    updateGate(gateVar, av, bv, dt){ return gateVar + dt*(av*(1-gateVar) - bv*gateVar); }; //n[i] + dt*(ann *(1-n[i]) - bnn * n[i]);
    updateNeuronIClamp(Iinj, dt, idx){
        this.gna[idx+1] = this.updateGna(this.m[idx], this.h[idx]);
        this.gk[idx+1] = this.updateGk(this.n[idx]);
        this.Ina[idx+1] = this.updateIion(this.gna[idx], this.Vlast, this.Ena);
        this.Ik[idx+1] = this.updateIion(this.gk[idx], this.Vlast, this.Ek);
        this.Il[idx+1] = this.updateIion(this.Gl, this.Vlast, this.El);
        this.Ic[idx+1] =  this.updateIc(Iinj, this.Ik[idx], this.Ina[idx], this.Il[idx]);
        this.n[idx+1] = this.updateGate(this.n[idx], this.an(this.Vlast), this.bn(this.Vlast), dt);
        this.m[idx+1] = this.updateGate(this.m[idx], this.am(this.Vlast), this.bm(this.Vlast), dt);
        this.h[idx+1] = this.updateGate(this.h[idx], this.ah(this.Vlast), this.bh(this.Vlast), dt);
        this.Vlast = this.updateV(this.Vlast, this.Ic[idx], dt);
        this.V[idx+1] = this.Vlast + this.VrestDisplay;
    }
    updateNeuronVClamp(V, dt, idx){
        this.gna[idx+1] = this.updateGna(this.m[idx], this.h[idx]);
        this.gk[idx+1] = this.updateGk(this.n[idx]);
        this.Ina[idx+1] = this.updateIion(this.gna[idx], V, this.Ena);
        this.Ik[idx+1] = this.updateIion(this.gk[idx], V, this.Ek);
        this.Il[idx+1] = this.updateIion(this.Gl, V, this.El);
        this.Iall[idx+1] =  this.Iall.push(this.updateIall(0, this.Ina[idx], this.Ik[idx], this.Il[idx])) //looks wrong
        this.n[idx+1] = this.updateGate(this.n[idx], this.an(V), this.bn(V), dt);
        this.m[idx+1] = this.updateGate(this.m[idx], this.am(V), this.bm(V), dt);
        this.h[idx+1] = this.updateGate(this.h[idx], this.ah(V), this.bh(V), dt);
        this.V[idx+1] = V + this.VrestDisplay;
    }
}

export default HHNeuron;
/*
class IClamp{
    constructor(totalTime=0, dt = 0.05, totalLength=null) {
        this.Iinj = [];
        this.dt = dt;
        this.totatlTime = 0;
        this.time = [];
        this.length = this.length();
    }

    length(){ return this.time.length; }

    addI(amplitude, on=0, off=0, onIdx=null, offIdx=null){

    }

}

class VClamp{
    constructor() {
        
    }
}

n = new HHNeuron()
const Iinj = 10;
const dt = 0.005;
time = [0];
for(let i = 0; i < 50000; i++){
    n.updateNeuronIClamp(Iinj, dt, i);
    time.push(dt+(i*dt));
}

n.time = time;

fs.writeFileSync('./data.json', JSON.stringify(n, null, 2) , 'utf-8');
*/
