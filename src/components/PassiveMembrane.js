class PassiveMembrane {

    constructor(V0=0, R=1, C=1){
        this.V0 = V0;
        this.R = R;
        this.C = C;
        this.V = [V0];
        this.Ic = [0];
        this.vMax = 0
    }

    getIc(dvMax, t_rel){
        return dvMax * Math.exp((-t_rel)/(this.R*this.C));
    }

    charge(Iinj, t_rel) {
        if (this.C > 0){
            this.Ic.push(this.getIc(Iinj*this.R, t_rel));
            this.V.push((Iinj*this.R)*(1 - Math.exp((-t_rel)/(this.R*this.C))));
        } else {
            this.Ic.push(0);
            this.V.push(Iinj*this.R)
        }
        if (Math.abs(this.V[this.V.length-1]) > this.vMax){
            this.vMax = this.V[this.V.length-1];
        }
    };

    discharge(t_rel, V0){
        this.Ic.push(this.getIc(-V0, t_rel));
        this.V.push(V0*Math.exp((-t_rel)/(this.R*this.C))); 
    };
     
}

export default PassiveMembrane;

