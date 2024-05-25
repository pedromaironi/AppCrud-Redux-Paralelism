export default class Orders {

    constructor(id, id_client, date, total, state, subtotal, taxes, payment_method) {
        this.id = id;
        this.id_client = id_client;
        this.date = date;
        this.total = total;
        this.state = state;
        this.subtotal = subtotal;
        this.taxes = taxes;
        this.payment_method = payment_method;
    }
 }