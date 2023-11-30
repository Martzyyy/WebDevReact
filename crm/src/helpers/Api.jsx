const SERVER_PREFIX = `http://localhost:3001`;

const Api = {
    addCustomer(customer) {
        return fetch(`${SERVER_PREFIX}/customers`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer),
            method: "POST",
        });
    },
    editCustomer(id, customer) {
        return fetch(`${SERVER_PREFIX}/customers/${id}`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer),
            method: "PUT",
        });
    },
    deleteCustomer(id) {
        return fetch(`${SERVER_PREFIX}/customers/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: "DELETE",
        });
    },
    getAllCustomers() {
        return fetch(`${SERVER_PREFIX}/customers`, {
            headers: { "Content-Type": "application/json" },
            method: "GET",
        });
    },
    getCustomer(id) {
        return fetch(`${SERVER_PREFIX}/customers/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: "GET",
        });
    },
};

export default Api;
