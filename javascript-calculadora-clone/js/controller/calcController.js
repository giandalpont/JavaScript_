class  CalcController{
    constructor(){

        this._displayCalc = 0;
        this._dataAtual;
        this.initialize();
    }
    initialize(){
        // Select element display
        let displayCalcEl = document.querySelector("#display")
        let dataEl = document.querySelector("#data")
        let timeEl = document. querySelector("#hora")

        displayCalcEl.innerHTML = "112"
        dataEl.innerHTML = '16/02/2019'
        timeEl.innerHTML = '00:00'
    }
    get displayCalc(){
        return this._displayCalc;
    }
    get dataAtual(){
        return this._dataAtual;
    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    set dataAtual(valor){
        this._dataAtual = valor;
    }
}