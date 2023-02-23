export default [
    {
        code: "100",
        icon: "el-icon-home-filled",
        name: "menus.home",
        route: "/home",
    },
    {
        code: "200",
        icon: "el-icon-menu",
        name: "menus.planManage",
        children: [
            {
                code: "201",
                icon: "el-icon-calendar",
                name: "menus.planList",
                route: "/plan/list",
            }, {
                code: "202",
                icon: "el-icon-collection-tag",
                name: "menus.planExecuteRecord",
                route: "/plan/instance/list",
            },
        ]
    },
    {
        code: "300",
        icon: "el-icon-mostly-cloudy",
        name: "menus.workerList",
        route: "/worker/list"
    },
    {
        code: "999",
        icon: "el-icon-mostly-cloudy",
        name: "menus.dagDemo",
        route: "/test/dagDemo"
    },
] as Array<MenuConfig>
