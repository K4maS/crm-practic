import { createStore } from 'vuex';
import axios from 'axios';
import API_BASE_URL from '@/config';

export default createStore({

    // изначальные данные и данные у нас есть
    state: {
        clientsData: [],

    },
    // позволяют как то трансформировать данные и получать их из стора
    getters: {
        allClients(state) {
            return state.clientsData
        },
    },
    // в модули мы можем декомпозировать логигку vuex store
    modules: {
        // client,
    },

    // объект
    actions: {
        loadClients(context) {
            return axios.get(API_BASE_URL + '/api/clients')
                .then((response) => {
                    context.commit('updateClients'), response.data
                })
                .catch(console.log('Сервер не работает'));

        },

    },
    // функции, которые напрямую меняют стор
    mutations: {
        updateClients(state, clientsData) {
            state.clientsData = clientsData;
        }
    },





});
