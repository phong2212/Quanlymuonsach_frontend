<script>
export default {
    props: {
        borrow: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Mã Độc giả:</strong>
            {{ borrow.maDocGia }}
        </div>
        <div class="p-1">
            <strong>Mã sách:</strong>
            {{ borrow.maSach }}
        </div>
        <div class="p-1">
            <strong>Ngày Mượn:</strong>
            {{ borrow.ngayMuon }}
        </div>
        <div class="p-1">
            <strong>Ngày Trả:</strong>
            {{ borrow.ngayTra }}
        </div>
    </div>
</template>
