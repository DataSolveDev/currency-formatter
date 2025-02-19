export default class Currency {
    constructor() {
        this.init()
    }

    init() {
        this.currencyFormatter();
    }

    formatter(options)
    {
        return new Intl.NumberFormat("hu-HU", options);
    };

    currencyFormatter()
    {
        let decimalInputs = document.querySelectorAll(".decimal");
        let inputs = document.querySelectorAll(".currency");

        let currencyFormatterOptions = {
            style: "currency",
            currency: "HUF",
            maximumFractionDigits: 0
        }, decimalFormatterOptions = {style: "decimal"};

        let currencyFormatter = this.formatter(currencyFormatterOptions),
            decimalFormatter = this.formatter(decimalFormatterOptions);

        for(let i = 0; i < inputs.length; i++)
        {
            inputs[i].addEventListener("input", function(e) {
                let value = e.target.value.replace(/\s+/g, '');
                if(isNaN(value)) return;
                e.target.value = decimalFormatter.format(value);
            });

            inputs[i].addEventListener('blur', function(e) {
                let value = e.target.value.replace(/\s+/g, '');
                if(isNaN(value)) return;
                e.target.value = currencyFormatter.format(value);
            });

            inputs[i].addEventListener('focus', function(e) {
                let value = e.target.value.replace(/\s+/g, '').replace('Ft', '');
                if(isNaN(value)) return;
                e.target.value = decimalFormatter.format(value);
            });
        }

        for(let i = 0; i < decimalInputs.length; i++)
        {
            decimalInputs[i].addEventListener("input", function(e) {
                let value = e.target.value.replace(/\s+/g, '');
                if(isNaN(value)) return;
                e.target.value = decimalFormatter.format(value);
            });
        }
    };
}
