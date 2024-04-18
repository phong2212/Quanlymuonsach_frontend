<template>
    <div class="page">
        <h4>Đăng nhập</h4>
        <LoginForm :staff="newStaff" @submit:staff="createStaff" />
        <div class="toast" :class="{ 'show': message !== '' }" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    {{ message }}
                </div>
                <button type="button" class="btn text-white" data-dismiss="toast" aria-label="Close"
                    @click="clearMessage">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import StaffService from "@/services/staff.service";

export default {
    components: {
        LoginForm,
    },
    data() {
        return {
            newStaff: {},
            message: "",
        };
    },
    methods: {
        async createStaff(data) {
            try {
                await StaffService.create(data);
                this.message = "Lưu sách thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        clearMessage() {
            this.message = '';
        }
    },
};
</script>

<style>
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 300px;
    background-color: green;
    color: #fff;
}
</style>
