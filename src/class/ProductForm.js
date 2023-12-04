export default class ProductForm
{
    errors = []

    constructor()
    {
        this.form = document.querySelector("form");
        this.form_prod_name = this.form.querySelector('[name=product-name]')
        this.form_prod_price = this.form.querySelector('[name=product-price]')
        this.form_prod_year = this.form.querySelector('[name=product-year]')
        this.error_list = document.querySelector("#error-list");
    }

    check_name()
    {
        const prod_name_errors = this.validate_name('Product Name', this.form_prod_name.value)

        if (prod_name_errors.length > 0)
        {
            this.form_prod_name.classList.add('is-invalid')
            this.errors = [...this.errors, ...prod_name_errors]
        } else {
            this.form_prod_name.classList.remove('is-invalid')
        }
    }

    validate_name(who, text)
    {
        const errors = []

        if (text == "")
        {
            errors.push(`${who} must not be empty`)
        }

        return errors;
    }

    check_price()
    {
        const prod_price_errors = this.validate_price('Product Price', this.form_prod_price.value)

        if (prod_price_errors.length > 0)
        {
            this.form_prod_price.classList.add('is-invalid')
            this.errors = [...this.errors, ...prod_price_errors]
        } else {
            this.form_prod_price.classList.remove('is-invalid')
        }
    }

    validate_price(who, price)
    {
        const errors = []

        if (price == "")
        {
            errors.push(`${who} must not be empty`)
        }

        return errors;
    }

    check_year()
    {
        const prod_year_errors = this.validate_year('Product Year', this.form_prod_year.value)

        if (prod_year_errors.length > 0)
        {
            this.form_prod_year.classList.add('is-invalid')
            this.errors = [...this.errors, ...prod_year_errors]
        } else {
            this.form_prod_year.classList.remove('is-invalid')
        }
    }

    validate_year(who, year)
    {
        const errors = []

        year = parseInt(year)

        if (year == "")
        {
            errors.push(`${who} must not be empty`)
        }

        if (year < 1000)
        {
            errors.push(`${who} number is too low`)
        }

        return errors;
    }

    have_errors()
    {
        if (this.errors.length > 0)
        {
            return true
        }

        return false
    }

    display_errors()
    {
        this.error_list.classList.remove('d-none')

        const error_list_ul = this.error_list.querySelector('ul')

        error_list_ul.replaceChildren();

        for (const error of this.errors) {
            const li = document.createElement('li')
            li.textContent = error;
            error_list_ul.appendChild(li)
        }
    }

    get_data()
    {
        const data = { 
            name: this.form_prod_name.value, 
            price: this.form_prod_price.value, 
            year: this.form_prod_year.value,
        }

        this.error_list.classList.add('d-none')

        this.form_prod_name.value = ""
        this.form_prod_price.value = ""
        this.form_prod_year.value = ""

        return data;
    }

    clear_errors()
    {
        this.errors = []
    }
}