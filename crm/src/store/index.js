import { createStore } from 'vuex';
import axios from 'axios';
import API_BASE_URL from '@/config';

export default createStore({
    data() {
        return {

        };
    },
    // в модули мы можем декомпозировать логигку vuex store
    modules: {
        // client,
    },

    // объект
    actions: {
        loadClients(context) {
            return axios.get(API_BASE_URL + '/api/clients/')
                .catch(console.log('Сервер не работает'))
                .then((response) => { context.commit('updateClients'), response.data });

        },
        addClient(context, data) {
            return axios.post(API_BASE_URL + '/api/clients/', {
                id: data.id,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
                name: data.name,
                surname: data.surname,
                lastName: data.lastName,
                contacts: data.contacts,
            })
                .then((response) => { console.log(response) })
                .catch(console.log('Сервер не работает'));

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

    },
    // позволяют как то трансформировать данные и получать их из стора
    getters: {
        allClients(state) {
            return state.clients;
        },
    },



});
