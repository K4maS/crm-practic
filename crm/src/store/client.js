import url from '@/config';

export default {
    // объект
    actions: {
        loadClients(context) {
            return axios.get(url + ' api/clients')
                .catch(console.log('Сервер не работает'))
                .then((response) => { context.commit('updateClients'), response.data });

        },
        addClient(context, data) {
            return axios.post(url + ' api/clients', {
                data
            })
                .catch(console.log('Сервер не работает'))
                .then((response) => { context.commit('updateClients'), response.data });

        },

    },
    // функции, которые напрямую меняют стор
    mutations: {
        updateClients(state, clients) {
            state.clients = clients;
        }
    },
    // изначальные данные и данные у нас есть
    state: {
        clients: null,
        patch: {
            id: '1234567890',
            createdAt: '2021-02-03T13:07:29.554Z',
            updatedAt: '2021-02-03T13:07:29.554Z',
            name: 'Василий',
            surname: 'Пупкин',
            lastName: 'Васильевич',
            contacts: [
                {
                    type: 'Телефон',
                    value: '+71234567890'
                },
                {
                    type: 'Email',
                    value: 'abc@xyz.com'
                },
                {
                    type: 'Facebook',
                    value: 'https://facebook.com/vasiliy-pupkin-the-best'
                },
            ],
        },
    },
    // позволяют как то трансформировать данные и получать их из стора
    getters: {
        allClients(state) {
            return state.clients;
        },
    },
}