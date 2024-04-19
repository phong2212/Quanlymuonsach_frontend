<script>
export default {
    props: {
        borrows: { type: Array, default: [] },
        books: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        getBookName(bookId) {
            const book = this.books.find(book => book._id === bookId);
            return book ? book.tenSach : "Tên sách không tồn tại";
        }
    }
};
</script>
<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(borrow, index) in borrows" :key="borrow._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ borrow._id }}
            <!-- getBookName(borrow.maSach) -->
        </li>
    </ul>
</template>