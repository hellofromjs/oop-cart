import ProductForm from "./class/ProductForm";
import Product from "./class/Product";

const product_form = new ProductForm();

document.querySelector("button[value=create-product-btn]").addEventListener('click', e => {
    e.preventDefault()

    product_form.check_name()
    product_form.check_price()
    product_form.check_year()


    if (product_form.have_errors())
    {
        product_form.display_errors();
    } else {
        const product_data = product_form.get_data();

        const product = new Product(product_data)
        product.display()
    }

    product_form.clear_errors()
})
