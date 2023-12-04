export default class Product
{
    constructor({ name, price, year })
    {
        this.name = name;
        this.price = price;
        this.year = year;

        this.product_item_template = document.querySelector("#product-item-template");
        this.products_list = document.querySelector("#products-list");
    }

    display()
    {
        const product_item = this.product_item_template.content.firstElementChild.cloneNode(true);
        product_item.querySelector('[value=product-name]').textContent = this.name
        product_item.querySelector('[value=product-price]').textContent = this.price
        product_item.querySelector('[value=product-year]').textContent = this.year
    
        this.products_list.appendChild(product_item);
    }
}
