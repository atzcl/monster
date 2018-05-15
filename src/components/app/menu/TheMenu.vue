<template>
    <el-menu
        class="zcl-menu"
        :default-active="$route.path"
        :unique-opened="true"
        :router="true"
        :collapse="isCollapse"
    >
        <!-- logo -->
        <div class="zcl-logo z-cursor" @click="$router.push({ name: 'cms' })">
            <div class="zcl-logo_text">Z</div>
        </div>

        <!-- 菜单 -->
        <el-submenu :index="index + ''"
        v-for="(menu, index) in menuArray"
        :key="index"
        >
            <!-- 一级菜单 -->
            <template slot="title">
                <z-icon :name="menu.icon" :style="menu.icon_style" />
                <span slot="title">{{ menu.name }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item
            :index="item.route"
            v-for="(item, k) in menu.children"
            :key="k">{{ item.name }}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script lang="ts">
  import vm from './';
  export default vm;
</script>

<style lang="stylus" scoped>
.el-menu--collapse {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}

.el-menu {
    // border: none;
    flex: 0 0 64px;
}

.zcl-logo {
    width: 100%;
    height: 54px;
    display flex
    justify-content center
    align-items center

    .zcl-logo_text {
        width: 38px;
        height: 38px;
        line-height: 38px;
        border-radius 100%
        font-size: 26px;
        color #fff
        background-color #3b77e3
        display flex
        justify-content center
        align-items center
        box-shadow: 3px 2px 7px 1px rgba(0,21,41,0.15)
    }
}

.zcl-menu:not(.el-menu--collapse) {
    flex: 0 0 160px;
    width: 160px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    z-index: 10;
    background-color: #fff;
    border-right 1px solid #ebebeb

    .el-submenu__title {
        i {
            margin-right 6px
        }

        span {
            position relative
            top -1px
        }
    }
}

.zcl-menu {
    .el-menu {
        // 选中样式
        .is-active {
            color: #108ee9;
            background-color: #ecf5ff;

            &:after {
                opacity: 1 !important;
                transform: scaleY(1) !important;
                transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
            }
        }

        li {
            color: rgba(0, 0, 0, 0.65);
            transition: all 0.36s ease;
        }
    }

    // 单项样式
    .el-menu-item {
        &:hover {
            padding-left: 50px !important;
            color: #108ee9;
            background-color: #ecf5ff;

            &:after {
                opacity: 1;
                transform: scaleY(1);
                transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
        }

        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            border-right: 5px solid #108ee9;
            transform: scaleY(0.0001);
            opacity: 0;
            transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
            box-shadow: 1px 0 12px 0 #6190E8;
        }
    }
}
</style>
