/**
 * 测试页面路由
 */
import TestIndex from '@/views/test/index'
import TestSubPage1 from '@/views/test/test-sub-page'
import TestSubPage2 from '@/views/test/test-sub-page2'
import TestSubPage11 from '@/views/test/test-sub-page12'
import TestSubPage12 from '@/views/test/test-sub-page22'
export default {
    path: '/test',
    name: 'TestIndex',
    component: TestIndex,
    redirect: '/test/test-sub-page1',
    meta: {
        name: '测试页面'
    },
    children: [
        {
            path: 'test-sub-page1',
            name: 'TestSubPage1',
            component: TestSubPage1,
            meta: {
                name: '模板管理1',
                parents: 'TestIndex',
                icon: 'el-icon-document-copy'

            },
            children: [
                {
                    path: 'test-sub-page11',
                    name: 'TestSubPage11',
                    component: TestSubPage11,
                    meta: {
                        name: '模板管理11',
                        parents: 'TestSubPage1',
                        icon: 'el-icon-document-copy'
                    }
                },
                {
                    path: 'test-sub-page12',
                    name: 'TestSubPage12',
                    component: TestSubPage12,
                    meta: {
                        name: '模板管理12',
                        parents: 'TestSubPage1',
                        icon: 'el-icon-document-copy'
                    }
                }
            ]
        },
        {
            path: 'test-sub-page2',
            name: 'TestSubPage2',
            component: TestSubPage2,
            meta: {
                name: '模板管理2',
                parents: 'TestIndex',
                icon: 'el-icon-document-copy'
            }
        }
    ]
}
