import { createStore } from 'vuex';
import axios from 'axios';
import API_BASE_URL from '@/config';

export default createStore({

    state: {
        clientsData: [],
        currentClientData: [],
        filteredClients: [],

        sortedById: true,
        sortedByFullName: false,
        sortedByAddDate: false,
        sortedByChaneDate: false,

        orderId: false,
        orderFullName: false,
        orderAddDate: false,
        orderChaneDate: false,

        loadingProcess: false,
        loadingError: false,

        errorsArr: [],

        searchValue: '',

        currentId: '',

    },

    getters: {
        getCurrentId(state) {
            return state.currentId;
        },
        allClients(state) {
            return state.clientsData;
        },
        getFilteredClients(state) {
            return state.filteredClients;
        },
        currentClient(state) {
            return state.currentClientData;
        },
        loadingProcess(state) {
            return state.loadingProcess
        },

        loadingError(state) {
            return state.loadingError
        },
        errors(state) {
            return state.errorsArr
        },

        getSortedById(state) {
            return state.sortedById;
        },
        getSortedByFullName(state) {
            return state.sortedByFullName;
        },
        getSortedByAddDate(state) {
            return state.sortedByAddDate;
        },
        getSortedByChaneDate(state) {
            return state.sortedByChaneDate;
        },

        getOrderId(state) {
            return state.orderId;
        },
        getOrderFullName(state) {
            return state.orderFullName;
        },
        getOrderAddDate(state) {
            return state.orderAddDate;
        },
        getOrderChaneDate(state) {
            return state.orderChaneDate;
        },



    },

    modules: {

    },

    actions: {
        loadClients(ctx) {

            ctx.commit('updateProcessChanging', true);
            ctx.commit('updateProcessError', false);
            return axios.get(API_BASE_URL + '/api/clients')
                .then((response) => {
                    console.log('Loading Data');
                    ctx.commit('updateClients', response.data);
                },)
                .catch((response) => {
                    ctx.commit('updateProcessError', true);
                    ctx.commit('updateError', response)
                })
                .then(ctx.commit('updateProcessChanging', false))




        },

        getClient(ctx, id) {
            ctx.commit('updateProcessChanging', true);
            ctx.commit('updateProcessError', false);
            return axios.get(API_BASE_URL + '/api/clients/' + id)
                .then((response) => { ctx.commit('updateCurrentClient', response.data); },)
                .catch((response) => {
                    ctx.commit('updateProcessError', true);
                    ctx.commit('updateError', response)
                })
                .then(ctx.commit('updateProcessChanging', false))
        },

        addClients(ctx, { name, surname, lastName, contacts }) {
            ctx.commit('updateProcessChanging', true);
            ctx.commit('updateProcessError', false);
            return axios.post(API_BASE_URL + '/api/clients/', {
                name,
                surname,
                lastName,
                contacts,
            })
                .then(() => { this.dispatch('loadClients') },)
                .catch((response) => {
                    ctx.commit('updateProcessError', true);
                    ctx.commit('updateError', response.response.data.errors)
                })
                .then(ctx.commit('updateProcessChanging', false))
        },

        changeClients(ctx, { id, name, surname, lastName, contacts }) {
            ctx.commit('updateProcessChanging', true);
            ctx.commit('updateProcessError', false);
            return axios.patch(API_BASE_URL + '/api/clients/' + id, {
                name,
                surname,
                lastName,
                contacts,
            })
                .then(() => { this.dispatch('loadClients') },)
                .catch((response) => {
                    ctx.commit('updateProcessError', true);
                    ctx.commit('updateError', response.response.data.errors)
                })
                .then(ctx.commit('updateProcessChanging', false))
        },

        removeClients(ctx, id) {
            ctx.commit('updateProcessChanging', true);
            ctx.commit('updateProcessError', false);
            setTimeout(() => {

                return axios.delete(API_BASE_URL + '/api/clients/' + id)
                    .then(() => { this.dispatch('loadClients') },)
                    .catch((response) => {
                        ctx.commit('updateProcessError', true);
                        ctx.commit('updateError', response.response.data.errors)
                    })
                    .then(ctx.commit('updateProcessChanging', false));

            }, 30);

        },

    },

    mutations: {
        updateClients(state, clientsData) {

            clientsData.forEach(element => {
                element.fullName = element.name + ' ' + element.surname + ' ' + element.lastName
            });

            state.clientsData = clientsData;

            if (state.searchValue == '') {
                state.filteredClients = clientsData;
            } else { this.commit('updateFilteredClientsInLoading', clientsData); }

            console.log('mutation: ', state.clientsData);
            console.log('mutation filtered: ', state.filteredClients);
        },
        updateCurrentClient(state, currentClientData) {
            console.log('mutation CC: ', currentClientData);
            state.currentClientData = currentClientData;
        },


        updateProcessChanging(state, bool) {
            console.log('mutation changing: ', bool);
            state.loadingProcess = bool;
        },

        updateProcessError(state, bool) {
            console.log('mutation changingError: ', bool);
            state.loadingError = bool;
        },

        updateError(state, errorsArr) {
            console.log('mutation Err: ', errorsArr);
            state.errorsArr = errorsArr;
        },
        updateSearchValue(state, value) {
            console.log('Search value: ', value)
            state.searchValue = value;
        },

        updateFilteredClients(state, value) {
            let valueUpper = value.toUpperCase();
            console.log('Search value: ', value);
            state.filteredClients = state.clientsData.filter((array) => array.fullName.toUpperCase().includes(valueUpper));
            console.log('filtered data: ', state.filteredClients);
        },

        updateFilteredClientsInLoading(state, clientsData) {
            let valueUpper = state.searchValue.toUpperCase();
            console.log('Search value: ', state.searchValue);
            state.filteredClients = clientsData.filter((array) => array.fullName.toUpperCase().includes(valueUpper));
            console.log('filtered data: ', state.filteredClients);
        },


        updateSortedById(state) {
            state.sortedById = true;
            state.sortedByFullName = false;
            state.sortedByAddDate = false;
            state.sortedByChaneDate = false;

            state.orderId = !state.orderId;
        },
        updateSortedByFullName(state) {
            state.sortedById = false;
            state.sortedByFullName = true;
            state.sortedByAddDate = false;
            state.sortedByChaneDate = false;

            state.orderFullName = !state.orderFullName;
        },
        updateSortedByAddDate(state) {
            state.sortedById = false;
            state.sortedByFullName = false;
            state.sortedByAddDate = true;
            state.sortedByChaneDate = false;

            state.orderAddDate = !state.orderAddDate;
        },
        updateSortedByChaneDate(state) {
            state.sortedById = false;
            state.sortedByFullName = false;
            state.sortedByAddDate = false;
            state.sortedByChaneDate = true;

            state.orderChaneDate = !state.orderChaneDate;
        },

        updateCurrentId(state, currentId) {
            state.currentId = currentId;
        },

    },






});
