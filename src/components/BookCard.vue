<script>
import NxbService from "@/services/nxb.service";

export default {
    props: {
        book: { type: Object, required: true },
    },
    data() {
        return {
            nxbName: ""
        };
    },
    async mounted() {
        try {
            const nxb = await NxbService.get(this.book.maNxb);
            this.nxbName = nxb.tenNxb;
        } catch (error) {
            console.log(error);
            this.nxbName = "N/A";
        }
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ book.tenSach }}
        </div>
        <div class="p-1">
            <strong>Đơn giá:</strong>
            {{ book.donGia }}
        </div>
        <div class="p-1">
            <strong>Năm xuất bản:</strong>
            {{ book.namXuatBan }}
        </div>
        <div class="p-1">
            <strong>Số quyển:</strong>
            {{ book.soQuyen }}
        </div>
        <div class="p-1">
            <strong>Nhà xuất bản:</strong>
            {{ nxbName }}
        </div>
        <div class="p-1">
            <strong>Nguồn gốc:</strong>
            {{ book.nguonGoc }}
        </div>
    </div>
</template>
