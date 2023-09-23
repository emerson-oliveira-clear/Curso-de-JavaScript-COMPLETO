
function Calculadora() {

    this.display = document.querySelector('.display')

    this.inicia = e =>
    {
        this.cliqueBotoes();
    }

    this.clearDisplay = e => {
        this.display.value = '';
    }

    this.deleteOne = e => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = e => {
        let conta = this.display.value;
        try {
            conta = eval(conta)
            if (!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = String(conta)
        } catch (e) {
            alert('Conta inválida')
            return
        }
    }

    this.cliqueBotoes = e =>  {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num'))this.btnParaDisplay(el);
            if (el.classList.contains('btn-clear'))this.clearDisplay();
            if (el.classList.contains('btn-del'))this.deleteOne();
            if (el.classList.contains('btn-eq'))this.realizaConta();
        })
    }

    this.btnParaDisplay = el =>{
        this.display.value += el.innerText
    }

}
/*
function criaCalculadora() {

    //--------objeto-----------------

    return {
        
        //------------- 1 param--------------

        display: document.querySelector('.display'),

        //------------- 2 param--------------

        inicia() {
            this.cliqueBotoes();
        }, 
        //------------- 3 param--------------

        clearDisplay() {
            this.display.value = ''
        },


        //------------- 4 param--------------

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        //------------- 5 param--------------

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(conta)

            } catch (e) {
                alert('Conta inválida')
                return
            }
        },

        //------------- 6 param--------------

        cliqueBotoes() {
            document.addEventListener('click', e => {
                //com arrow function o this se mantem o mesmo do "pai"
                //se porm um bind, aqui dentro entra como se fosse o this
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

        //------------- 7 param--------------

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    };
}
*/

const calculadora =  new Calculadora();
calculadora.inicia();