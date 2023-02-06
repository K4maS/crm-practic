<template>
    <table class="clients__table  table">
        <clientsTableHeader />

        <!-- Table item here -->
        
        <clientsTableItem :client="client" v-for="client in sortedData" :key="client.id" />


    </table>
</template>

<script>
import clientsTableHeader from './clientsTableHeader.vue';
import clientsTableItem from './clientsTableItem.vue';
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            sortedData: [],
            // order: true,
        }
    },

    computed: {
        ...mapGetters([
            'allClients',
            'getFilteredClients',
            'getSortedById',
            'getSortedByFullName',
            'getSortedByAddDate',
            'getSortedByChaneDate',

            'getOrderId',
            'getOrderFullName',
            'getOrderAddDate',
            'getOrderChaneDate',
        ]),


    },
    methods: {
        getSortingData() {

            if (this.getSortedById) {
                if (this.getOrderId) {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.id > b.id ? 1 : -1)
                }
                else {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.id > b.id ? -1 : 1)
                }
            }
            else if (this.getSortedByFullName) {

                if (this.getOrderFullName) {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.fullName > b.fullName ? 1 : -1)
                }
                else {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.fullName > b.fullName ? -1 : 1)
                }
            }
            else if (this.getSortedByAddDate) {
                if (this.getOrderAddDate) {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
                }
                else {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
                }
            }
            else if (this.getSortedByChaneDate) {
                if (this.getOrderChaneDate) {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
                }
                else {
                    this.sortedData = this.getFilteredClients.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
                }
            }
        },
    },
    props: [
        'loadingData',
        'loadingDataError'
    ],

    created() {
        this.getSortingData();
    },

    watch: {
        getFilteredClients() {
            this.getSortingData();
        },
        getSortedById() {
            this.getSortingData();
        },
        getSortedByFullName() {
            this.getSortingData();
        },
        etSortedByAddDate() {
            this.getSortingData();
        },
        getSortedByChaneDate() {
            this.getSortingData();
        },


        getOrderId() {
            this.getSortingData();
        },
        getOrderFullName() {
            this.getSortingData();
        },
        getOrderAddDate() {
            this.getSortingData();
        },
        getOrderChaneDate() {
            this.getSortingData();
        },
    },

    components: {
        clientsTableItem,
        clientsTableHeader
    },

}
</script>