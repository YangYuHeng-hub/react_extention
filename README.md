## 笔记

### 1.setState
    深入setState
    一、setState()更新状态的动作是异步的还是同步的？----要看setState的执行位置
        (1). 再有react所控制的回调中更新的动作是【异步】的：生命周期钩子，react事件监听回调
        (2). 在非react控制的异步回调中更新的动作是【同步】的：定时器回调、原生事件回调

    二、setState的两种写法：
        (1). 对象式写法：setState(stateChange, [callback])
            1.stateChange为状态改变对(该对象可以体现出状态的更新)
            2.callback是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用

        (2). 函数式写法：setState(updater, [callback])
            1.updater为返回stateChange对象的函数
            2.updater可以接收到state和props。
            3.callback是可选的回调函数，它在状态更新、界面也更新(render调用后)才被调用。
    总结：
        1.对象式的setState是函数式的setState的简写方式(语法糖)
        2.使用原则：
                (1).如果新状态不依赖于原状态 ===> 使用对象方式
                (2).如果新状态依赖于原状态 ===> 使用函数方式
                (3).如果需要在setState()执行后获得最新的状态数据，要在第二个callback函数中读取。

### 2.lazyLoad
    路由组件的lazyLoad
        1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
        const Login = lazy(()=>{return import('xxx/xxx/Login')})

        2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义的Loading界面
        <Suspense fallback={<加载组件/>}>
            <Routes>
                <Route path="/xxx" element={<Xxxx/>}>
            </Routes>
        </Suspense>

### 3.Hooks
    1.Hooks是什么？
        (1). Hook是React 16.8.0版本增加的新特性/新语法
        (2). 可以让你在函数组件中使用 state 以及其他 React 特性

    2.三个常用的Hooks
        (1). State Hook: React.useState()
        (2). Effect Hook: React.useEffect()
        (3). Ref Hook: React.useRef()

    3.State Hook
        (1). State Hook让函数组件也可以有state状态，并进行状态数据的读写
        (2). 语法：const [xxx, setXxx] = React.useState(initValue)
        (3). useState()说明：
                参数：第一次初始化指定的值在内部作为缓存
                返回值：包含2个元素的数组，第一个为内部当前状态值，第二个为更新状态值的函数
        (4). setXxx()2种写法：
                setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
                setXxx(value => newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
    
    4.Effect Hook
        (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
        (2). React中的副作用操作：
                发ajax请求数据获取
                设置订阅 / 启动定时器
        (3). 语法和说明：
                useEffect(()=>{
                    //在此可以执行任何带副作用操作
                    return ()=>{ //在组件卸载前执行
                        //在此做一些收尾工作，比如清除定时器/取消订阅等
                    }
                }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
        (4). 可以把 useEffect Hook 看做如下三个函数的组合
                componentDidMount()
                componentDidUpdate()
                componentWillUnmount()

    5.Ref Hook
        (1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
        (2). 语法：const refContainer = useRef()
        (3). 作用：保存标签对象，功能与React.createRef()一样

### 4.Fragment
    使用
        <Fragment></Fragment> 或 <></>
    作用
        避免无用的层级嵌套

### 5.Context
    理解
        一种组件间通信方式，常用于【祖组件】与【后代组件】间通信
    使用
        (1). 创建Context容器对象
                const XxxContext = React.createContext()

        (2). 渲染子组件时，外面包裹xxxContext.Provider，通过value属性给后代组件传递数据：
            <xxxContext.provider value={数据}>
                子组件
            </xxxContext.provider>

        (3). 后代组件读取数据
            //第一种方式：仅适用于类组件
                static contextType = xxxContext //声明接受context
                this.context //读取context中的value值

            //第二种方式：函数式组件和类组件都可以
                <xxxContext.Consumer>
                    {
                        value => { //value就是context中的value数据
                            return 要显示的内容
                        }
                    }
                </xxxContext.Consumer>
    备注
        在应用开发中一般不用context，一般都用它的封装react插件
    
### 6.组件通信方式总结
    组件间的关系：
        父子组件
        兄弟组件(非嵌套组件)
        祖孙组件(跨级组件)
    几种通信方式：
        1.props：
            最简单的方式
        2.消息订阅-发布：
            pub-sub、event等等
        3.集中式管理
            redux、dva等等
        4.context：
            生产者-消费者模式
    比较好的搭配方式：
        父子组件：props
        兄弟组件：消息订阅-发布、集中式管理
        祖孙组件(跨级组件)：消息订阅-发布、集中式管理、context(开发用得少，封装插件用的多)