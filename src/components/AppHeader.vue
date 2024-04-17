<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Quản lý</a>
        <div class="mr-auto navbar-nav d-flex">
            <li class="nav-item">
                <router-link :to="{ name: 'book' }" class="nav-link">
                    Sách
                    <i class="fas fa-book"></i>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'nxb' }" class="nav-link">
                    Nhà xuất bản
                    <i class="fas fa-building"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>
