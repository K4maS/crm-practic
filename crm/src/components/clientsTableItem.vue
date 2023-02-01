<template>
    <tr class="table__row">
        <td class="table__content">
            <div class="table__content-block flex text-gray-main">
                {{ client.id }}
            </div>
        </td>
        <td class="table__content">
            <div class="table__content-block flex text-black-main">

                {{ fullName }}

            </div>
        </td>
        <td class="table__content">
            <div class="table__content-block flex text-black-main">

                {{ crateDate }}
                <span class="table-time text-gray-main">
                    {{ crateTime }}
                </span>

            </div>
        </td>
        <td class="table__content">
            <div class="table__content-block flex text-black-main">
                {{ updatedDate }}
                <span class="table-time text-gray-main">{{ updatedTime }}</span>
            </div>
        </td>
        <td class="table__content ">
            <div class="table__content-block flex">
                <!-- иконки с тултипами -->

                <clientsContactsList :clients-contacts="client.contacts" />

            </div>
        </td>
        <td class="table__content">
            <div class="table__actions table__content-block flex">
                <ul class="table__actions-list list-style flex">
                    <li class="table__action-item ">
                        <!-- table-change--onload -->
                        <button @click.prevent="clickChangeBtn"
                            class="table__change table__action-btn btn-reset text-black-main flex">
                            <svg class="svg-pencil" width="13" height="13" viewBox="0 0 13 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 10.5002V13.0002H2.5L9.87333 5.62687L7.37333 3.12687L0 10.5002ZM11.8067 3.69354C12.0667 3.43354 12.0667 3.01354 11.8067 2.75354L10.2467 1.19354C9.98667 0.933535 9.56667 0.933535 9.30667 1.19354L8.08667 2.41354L10.5867 4.91354L11.8067 3.69354Z" />
                            </svg>
                            <svg class="svg-loading" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_224_2771)">
                                    <path
                                        d="M3.00008 8.04008C3.00008 10.8236 5.2566 13.0801 8.04008 13.0801C10.8236 13.0801 13.0801 10.8236 13.0801 8.04008C13.0801 5.2566 10.8236 3.00008 8.04008 3.00008C7.38922 3.00008 6.7672 3.12342 6.196 3.34812"
                                        stroke="#9873FF" stroke-width="2" stroke-miterlimit="10"
                                        stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_224_2771">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                            Изменить
                        </button>
                    </li>
                    <li class="table__action-item ">
                        <button @click.prevent="clickRemoveBtn"
                            class="table__delete table__action-btn btn-reset text-black-main flex">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"
                                    fill="#F06A4D" />
                            </svg>

                            Удалить
                        </button>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <Teleport v-if="changeBtnIsClicked" to="#show-window"><clientsChangeWindow v-model:open="changeBtnIsClicked"  :id="client.id"/> </Teleport>
    <Teleport v-if="removeBtnIsClicked" to="#show-window">
        <clientsRemoveWindow v-model:open="removeBtnIsClicked" :id="client.id" />
    </Teleport>
</template>

<script>
import clientsContactsList from './clientsContactsList.vue';
import clientsChangeWindow from './clientsChangeWindow.vue';
import clientsRemoveWindow from './clientsRemoveWindow.vue';
import { Teleport } from 'vue';

export default {
    props: ['client'],
    data() {
        return {
            changeBtnIsClicked: false,
            removeBtnIsClicked: false,
        };
    },
    methods: {
        formatedDate(date) {
            let fullDate = new Date(date);
            console.log(fullDate)
            let DateArr = [String(fullDate.getDate()).length == 1 ? "0" + String(fullDate.getDate()) : String(fullDate.getDate()), String(fullDate.getMonth()).length == 1 ? "0" + String(fullDate.getMonth()) : String(fullDate.getMonth()), fullDate.getFullYear()];
            return DateArr.join('.');
        },
        formatedTime(date) {
            let fullDate = new Date(date);
            console.log(fullDate)
            let TimeArr = [String(fullDate.getHours()).length == 1 ? "0" + String(fullDate.getHours()) : String(fullDate.getHours()), String(fullDate.getMinutes()).length == 1 ? "0" + String(fullDate.getMinutes()) : String(fullDate.getMinutes())];
            return TimeArr.join(':');
        },
        clickChangeBtn() {
            console.log('Кнопака и нажата');
            this.changeBtnIsClicked = true;
        },
        clickRemoveBtn() {
            console.log('Кнопака у нажата');
            return this.removeBtnIsClicked = true;
        },
    },
    components: { clientsContactsList, clientsChangeWindow, clientsRemoveWindow, Teleport },

    computed: {
        fullName() {
            let fullNameArr = [this.client.surname, this.client.name, this.client.lastName]
            return fullNameArr.join(' ');
        },
        crateDate() {
            return this.formatedDate(this.client.createdAt);
        },
        crateTime() {
            return this.formatedTime(this.client.createdAt);
        },

        updatedDate() {
            return this.formatedDate(this.client.updatedAt);
        },
        updatedTime() {
            return this.formatedTime(this.client.updatedAt);
        },

    },

}
</script>