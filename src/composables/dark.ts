import {useDark, useToggle} from '@vueuse/core'

//从模块导出函数，便于其他文件使用
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
