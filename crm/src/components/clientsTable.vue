<template>
    <table class="clients__table clients__table-header table">

        <tr class="table__header-row">
            <th class="table__header ">
                <div class="table__header-block flex">
                    <button class="table__filter-btn table__filter-btn-id btn-reset flex">
                        <span class="table__filter table__header-id">ID</span>
                        <svg class="table__header-arrow table__header-arrow-up table__header-arrow-id" width="8"
                            height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" />
                        </svg>
                    </button>
                </div>

            </th>
            <th class="table__header">
                <div class="table__header-block flex">
                    <span class="table__header-text flex text-gray-main">Фамилия Имя Отчество</span>
                    <button class="table__filter-btn table__filter-btn-alphabet btn-reset flex">
                        <svg class="table__header-arrow table__header-arrow table__header-arrow-alph" width="8"
                            height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" />
                        </svg>

                        <span class="table__filter">А-Я</span>
                    </button>
                </div>
            </th>
            <th class="table__header text-gray-main">
                <div class="table__header-block flex">
                    <span class="table__header-text flex">Дата и время создания
                        <button class="table__filter-btn table__filter-btn-date btn-reset flex">
                            <svg class="table__header-arrow " width="8" height="8" viewBox="0 0 8 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" />
                            </svg>
                        </button>
                    </span>
                </div>
            </th>
            <th class="table__header text-gray-main">
                <div class="table__header-block flex">
                    <span class="table__header-text">Последнее изменение
                        <button class="table__filter-btn table__filter-btn-last-change btn-reset flex">
                            <svg class="table__header-arrow " width="8" height="8" viewBox="0 0 8 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" />
                            </svg>
                        </button> </span>

                </div>
            </th>

            <th class="table__header text-gray-main">
                <div class="table__header-block flex">
                    <span class="table__header-text flex">Контакты</span>
                </div>
            </th>
            <th class="table__header text-gray-main">
                <div class="table__header-block flex">
                    <span class="table__header-text flex">Действия</span>
                </div>

            </th>
        </tr>

        <!-- Table item here -->
        <clientsTableItem :client="client" v-for="client in clientsInfo" :key="client.id" />


    </table>
</template>

<script>

import clientsTableItem from './clientsTableItem.vue';
import { mapGetters } from 'vuex';

export default {



    computed: {
        // ...mapState({ clients: 'сlients' }),
        ...mapGetters({ clientsObj: 'allClients' }),

        clients() {
           return  this.clientsObj
        },
    },

    props: [
        // 'clientsInfo',
        'loadingData',
        'loadingDataError'
    ],

    components: {
        clientsTableItem,
    },
}
</script>