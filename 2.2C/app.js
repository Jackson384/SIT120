const app = Vue.createApp({
    data() {
        return {
            result: '0',
            currentInput: '',
            operatorClicked: false,
        };
    },
    computed: {
        buttons() {
            return [
                '7', '8', '9', '/',
                '4', '5', '6', '*',
                '1', '2', '3', '-',
                '0', '.', '=', '+',
            ];
        },
    },
    methods: {
        handleClick(button) {
            if (button === '=') {
                this.calculateResult();
            } else {
                this.addToInput(button);
            }
        },
        addToInput(value) {
            if (value === 'C') {
                this.clear();
            } else {
                if (this.result === '0' || this.operatorClicked) {
                    this.currentInput = value;
                    this.operatorClicked = false;
                } else {
                    this.currentInput += value;
                }
                this.result = this.currentInput;
            }
        },
        calculateResult() {
            try {
                this.result = eval(this.currentInput);
            } catch (error) {
                this.result = 'Error';
            }
            this.operatorClicked = true;
        },
        clear() {
            this.result = '0';
            this.currentInput = '';
            this.operatorClicked = false;
        },
    },
});

app.mount('#app');
