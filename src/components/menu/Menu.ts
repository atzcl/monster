'use strict'

import { Component, Prop, Vue } from 'vue-property-decorator'

import './menu.styl'
import * as Template from './Menu.html'

@Template
@Component
export default class Menu extends Vue {
    // 菜单数组
    @Prop({type: Array})
    menuArray: Array<Menu>

    // Loading
    @Prop({type: Boolean, default: false})
    isLoading
}