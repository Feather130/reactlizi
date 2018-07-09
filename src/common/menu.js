// export const menuData = [
//   {
//     name: "dashboard",
//     icon: "dashboard",
//     path: "dashboard",
//     children: []
//   },
//   {
//     name: "表单页",
//     icon: "form",
//     path: "form",
//     children: [
//       {
//         name: "基础表单",
//         path: "basic-form"
//       },
//       {
//         name: "分步表单",
//         path: "step-form"
//       },
//       {
//         name: "高级表单",
//         authority: "admin",
//         path: "advanced-form"
//       }
//     ]
//   },
//   {
//     name: "列表页",
//     icon: "table",
//     path: "list",
//     children: [
//       {
//         name: "查询表格",
//         path: "table-list"
//       },
//       {
//         name: "标准列表",
//         path: "basic-list"
//       },
//       {
//         name: "卡片列表",
//         path: "card-list"
//       },
//       {
//         name: "搜索列表",
//         path: "search",
//         children: [
//           {
//             name: "搜索列表（文章）",
//             path: "articles"
//           },
//           {
//             name: "搜索列表（项目）",
//             path: "projects"
//           },
//           {
//             name: "搜索列表（应用）",
//             path: "applications"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: "详情页",
//     icon: "profile",
//     path: "profile",
//     children: [
//       {
//         name: "基础详情页",
//         path: "basic"
//       },
//       {
//         name: "高级详情页",
//         path: "advanced",
//         authority: "admin"
//       }
//     ]
//   },
//   {
//     name: "结果页",
//     icon: "check-circle-o",
//     path: "result",
//     children: [
//       {
//         name: "成功",
//         path: "success"
//       },
//       {
//         name: "失败",
//         path: "fail"
//       }
//     ]
//   },
//   {
//     name: "异常页",
//     icon: "warning",
//     path: "exception",
//     children: [
//       {
//         name: "403",
//         path: "403"
//       },
//       {
//         name: "404",
//         path: "404"
//       },
//       {
//         name: "500",
//         path: "500"
//       },
//       {
//         name: "触发异常",
//         path: "trigger",
//         hideInMenu: true
//       }
//     ]
//   },
//   {
//     name: "账户",
//     icon: "user",
//     path: "user",
//     authority: "guest",
//     children: [
//       {
//         name: "登录",
//         path: "login"
//       },
//       {
//         name: "注册",
//         path: "register"
//       },
//       {
//         name: "注册结果",
//         path: "register-result"
//       }
//     ]
//   }
// ];
export const menuData = [
  {
    name: '首页1',
    show: true,
    path: 'home1',
    icon: 'home'
  },
  {
    name: '首页2',
    show: true,
    path: 'home2',
    icon: 'switcher'
  },
  {
    name: '首页3',
    show: true,
    path: 'home3',
    icon: 'home'
  },
  {
    name: '首页4',
    show: true,
    path: 'home4',
    icon: 'home',
    children: [
      {
        name: '首页1-1',
        show: false,
        path: 'home1.1',
        icon: 'home'
      },
      {
        name: '首页1-2',
        show: true,
        path: 'home1.2',
        icon: 'home',
        children: [
          {
            name: '首页1-2-1',
            show: true,
            path: 'home1.2.1',
            icon: 'home',
            children: [
              {
                name: '首页1-2-1-1',
                show: true,
                path: 'home1.2.1.1',
                icon: 'home'
              },
              {
                name: '首页1-2-1-2',
                show: true,
                path: 'home1.2.1.2',
                icon: 'home',
                children: [
                  {
                    name: '首页1-2-1-2-1',
                    show: true,
                    path: 'home1.2.1.2.1',
                    icon: 'home',
                    children: [
                      {
                        name: '首页1-2-1-2-1-1',
                        show: true,
                        path: 'home1.2.1.2.1.1',
                        icon: 'home',
                        children: [
                          {
                            name: '首页1-2-1-2-1-1-1',
                            show: true,
                            path: 'home1.2.1.2.1.1.1',
                            icon: 'home'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '首页1-2-2',
            show: true,
            path: 'home1.2.2',
            icon: 'home'
          }
        ]
      }
    ]
  },
  {
    name: '首页5',
    show: true,
    path: 'home5',
    icon: 'home'
  },
  {
    name: '首页6',
    show: true,
    path: 'home6',
    icon: 'home'
  },
  {
    name: '首页7',
    show: true,
    path: 'home7',
    icon: 'home'
  },
  {
    name: '首页8',
    show: true,
    path: 'home8',
    icon: 'home'
  },
  {
    name: '首页9',
    show: true,
    path: 'home9',
    icon: 'home'
  },
  {
    name: '首页10',
    show: true,
    path: 'home10',
    icon: 'home'
  },
  {
    name: '首页11',
    show: true,
    path: 'home11',
    icon: 'home'
  },
  {
    name: '首页12',
    show: true,
    path: 'home12',
    icon: 'home'
  },

];
