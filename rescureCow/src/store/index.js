import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default function(iniState) {
    iniState = Object.assign({
        userInfo: '',
        count: 0,
        animalArr:[{
            top: 0,
            left: 0,
            positionX: 0, 
            positionY: 0,
            width: 100,
            height: 200,
            type: 'bigAnimal',
            name: '狮子',
            arrowSpan: ''
            }, {
                top: 0,
                left: 1,
                positionX: 100, 
                positionY: 0,
                width: 200,
                height: 200,
                type: 'boss',
                name: '牛牛',
                arrowSpan: ''
            }, {
                top: 0,
                left: 3,
                positionX: 300, 
                positionY: 0,
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '猎豹',
                arrowSpan: ''
            }, {
                top: 2,
                left: 0,
                positionX: 0, 
                positionY: 200,
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '老虎',
                arrowSpan: ''
            }, {
                top: 2,
                left: 1,
                positionX: 100, 
                positionY: 200,
                width: 200,
                height: 100,
                type: 'bigAnimal',
                name: '狗熊',
                arrowSpan: ''
            }, {
                top: 2,
                left: 3,
                positionX: 300, 
                positionY: 200,
                width: 100,
                height: 200,
                blocks: [12, 16],
                type: 'bigAnimal',
                name: '鳄鱼',
                arrowSpan: ''
            }, {
                top: 3,
                left: 1,
                positionX: 100, 
                positionY: 300,
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗1',
                arrowSpan: ''
            },{
                top: 3,
                left: 2,
                positionX: 200, 
                positionY: 300,
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗2',
                arrowSpan: ''
            },{
                top: 4,
                left: 0,
                positionX: 0, 
                positionY: 400,
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗3',
                arrowSpan: ''
            },{
                top: 4,
                left: 3,
                positionX: 300, 
                positionY: 400,
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗4',
                arrowSpan: ''
            }],
        thirdAnimalArr: [{
            top: 0,
            left: 0,
            positionX: 0, 
            positionY: 0,
            position: {
                left: 0,
                top: 0
            },
            width: 100,
            height: 200,
            type: 'bigAnimal',
            name: '狮子',
            arrowSpan: ''
            }, {
                top: 0,
                left: 1,
                positionX: 100, 
                positionY: 0,
                position: {
                    left: '100px',
                    top: 0
                },
                width: 200,
                height: 200,
                type: 'boss',
                name: '牛牛',
                arrowSpan: ''
            }, {
                top: 0,
                left: 3,
                positionX: 300, 
                positionY: 0,
                position: {
                    left: '300px',
                    top: 0
                },
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '猎豹',
                arrowSpan: ''
            }, {
                top: 2,
                left: 0,
                positionX: 0, 
                positionY: 200,
                position: {
                    left: 0,
                    top: '200px'
                },
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '老虎',
                arrowSpan: ''
            }, {
                top: 2,
                left: 1,
                positionX: 100, 
                positionY: 200,
                position: {
                    left: '100px',
                    top: '200px'
                },
                width: 200,
                height: 100,
                type: 'bigAnimal',
                name: '狗熊',
                arrowSpan: ''
            }, {
                top: 2,
                left: 3,
                positionX: 300, 
                positionY: 200,
                position: {
                    left: '300px',
                    top: '200px'
                },
                width: 100,
                height: 200,
                blocks: [12, 16],
                type: 'bigAnimal',
                name: '鳄鱼',
                arrowSpan: ''
            }, {
                top: 3,
                left: 1,
                positionX: 100, 
                positionY: 300,
                position: {
                    left: '100px',
                    top: '300px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗1',
                arrowSpan: ''
            },{
                top: 3,
                left: 2,
                positionX: 200, 
                positionY: 300,
                position: {
                    left: '200px',
                    top: '300px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗2',
                arrowSpan: ''
            },{
                top: 4,
                left: 0,
                positionX: 0, 
                positionY: 400,
                position: {
                    left: 0,
                    top: '400px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗3',
                arrowSpan: ''
            },{
                top: 4,
                left: 3,
                positionX: 300, 
                positionY: 400,
                position: {
                    left: '300px',
                    top: '400px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗4',
                arrowSpan: ''
            }
        ],
        secondAnimalArr: [{
            top: 3,
            left: 0,
            positionX: 0, 
            positionY: 300,
            position: {
                left: 0,
                top: '300px'
            },
            width: 100,
            height: 200,
            type: 'bigAnimal',
            name: '狮子',
            arrowSpan: ''
            }, {
                top: 2,
                left: 1,
                positionX: 100, 
                positionY: 200,
                position: {
                    left: '100px',
                    top: '200px'
                },
                width: 200,
                height: 200,
                type: 'boss',
                name: '牛牛',
                arrowSpan: ''
            }, {
                top: 0,
                left: 3,
                positionX: 300, 
                positionY: 0,
                 position: {
                    left: '300px',
                    top: 0
                },
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '猎豹',
                arrowSpan: ''
            }, {
                top: 1,
                left: 0,
                positionX: 0, 
                positionY: 100,
                position: {
                    left: 0,
                    top: '100px'
                },
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '老虎',
                arrowSpan: ''
            }, {
                top: 4,
                left: 2,
                positionX: 200, 
                positionY: 400,
                position: {
                    left: '200px',
                    top: '400px'
                },
                width: 200,
                height: 100,
                type: 'bigAnimal',
                name: '狗熊',
                arrowSpan: ''
            }, {
                top: 2,
                left: 3,
                positionX: 300, 
                positionY: 200,
                position: {
                    left: '300px',
                    top: '200px'
                },
                width: 100,
                height: 200,
                blocks: [12, 16],
                type: 'bigAnimal',
                name: '鳄鱼',
                arrowSpan: ''
            }, {
                top: 0,
                left: 0,
                positionX: 0, 
                positionY: 0,
                 position: {
                    left: 0,
                    top: 0
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗1',
                arrowSpan: ''
            },{
                top: 1,
                left: 1,
                positionX: 100, 
                positionY: 100,
                 position: {
                    left: '100px',
                    top: '100px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗2',
                arrowSpan: ''
            },{
                top: 4,
                left: 1,
                positionX: 100, 
                positionY: 400,
                position: {
                    left: '100px',
                    top: '400px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗3',
                arrowSpan: ''
            },{
                top: 1,
                left: 2,
                positionX: 200, 
                positionY: 100,
                position: {
                    left: '200px',
                    top: '100px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗4',
                arrowSpan: ''
        }],
        secondOccupancyMap:[
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ],
        firstOccupancyMap: [
            [1, 1, 1, 0],
            [1, 1, 1, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ],
        firstAnimalArr: [{
            top: 0,
            left: 0,
            positionX: 0, 
            positionY: 0,
            width: 100,
            height: 200,
            type: 'bigAnimal',
            name: '狮子',
            arrowSpan: ''
            }, {
                top: 2,
                left: 0,
                positionX: 0, 
                positionY: 200,
                position: {
                    left: 0,
                    top: '200px'
                },
                width: 200,
                height: 200,
                type: 'boss',
                name: '牛牛',
                arrowSpan: ''
            }, {
                top: 0,
                left: 2,
                positionX: 200, 
                positionY: 0,
                position: {
                    left: '200px',
                    top: 0
                },
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '猎豹',
                arrowSpan: ''
            }, {
                top: 0,
                left: 1,
                positionX: 100, 
                positionY: 0,
                position: {
                    left: '100px',
                    top: 0
                },
                width: 100,
                height: 200,
                type: 'bigAnimal',
                name: '老虎',
                arrowSpan: ''
            }, {
                top: 4,
                left: 2,
                positionX: 200, 
                positionY: 400,
                position: {
                    left: '200px',
                    top: '400px'
                },
                width: 200,
                height: 100,
                type: 'bigAnimal',
                name: '狗熊',
                arrowSpan: ''
            }, {
                top: 2,
                left: 3,
                positionX: 300, 
                positionY: 200,
                position: {
                    left: '300px',
                    top: '200px'
                },
                width: 100,
                height: 200,
                blocks: [12, 16],
                type: 'bigAnimal',
                name: '鳄鱼',
                arrowSpan: ''
            }, {
                top: 2,
                left: 2,
                positionX: 200, 
                positionY: 200,
                position: {
                    left: '200px',
                    top: '200px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗1',
                arrowSpan: ''
            },{
                top: 3,
                left: 2,
                positionX: 200, 
                positionY: 300,
                position: {
                    left: '200px',
                    top: '300px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗2',
                arrowSpan: ''
            },{
                top: 4,
                left: 0,
                positionX: 0, 
                positionY: 400,
                position: {
                    left: 0,
                    top: '400px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗3',
                arrowSpan: ''
            },{
                top: 4,
                left: 1,
                positionX: 100, 
                positionY: 400,
                position: {
                    left: '100px',
                    top: '400px'
                },
                width: 100,
                height: 100,
                type: 'smallAnimal',
                name: '狗4',
                arrowSpan: ''
            }
        ],
        thirdOccupancyMap:[
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1]
        ],
        firstAutoMoveRule: [
            [6, 'top'],
            [6, 'top'],
            [8, 'right'],
            [8, 'top'],
            [5, 'top'],
            [10, 'right'],
            [10, 'right'],
            [9, 'right'],
            [9, 'right'],
            [2, 'bottom'],
            [7, 'left'],
            [7, 'left'],
            [8, 'left'],
            [8, 'left'],
            [5, 'top'],
            [9, 'top'],
            [9, 'right'],
            [2, 'right']
        ],
        secondAutoMoveRule: [
            [8, 'top'],
            [10, 'left'],
            [3, 'left'],
            [6, 'top'],
            [6, 'top'],
            [2, 'right'],
            [10, 'bottom'],
            [10, 'bottom'],
            [8, 'bottom'],
            [7, 'right'],
            [4, 'top'],
            [1, 'top'],
            [9, 'left'],
            [10, 'bottom'],
            [2, 'left'],
            [6, 'bottom'],
            [6, 'bottom'],
            [3, 'right'],
            [7, 'right'],
            [8, 'right'],
            [4, 'right'],
            [1, 'top'],
            [1, 'top'],
            [2, 'left'],
            [8, 'bottom'],
            [8, 'bottom'],
            [7, 'bottom'],
            [7, 'bottom'],
            [3, 'left'],
            [6, 'top'],
            [6, 'top'],
            [8, 'right'],
            [8, 'top'],
            [5, 'top'],
            [10, 'right'],
            [10, 'right'],
            [9, 'right'],
            [9, 'right'],
            [2, 'bottom'],
            [7, 'left'],
            [7, 'left'],
            [8, 'left'],
            [8, 'left'],
            [5, 'top'],
            [9, 'top'],
            [9, 'right'],
            [2, 'right']
        ],
        thirdAutoMoveRule:[
            [10, 'left'],
            [6, 'bottom'],
            [5, 'right'],
            [9, 'right'],
            [4, 'bottom'],
            [7, 'top'],
            [7, 'left'],
            [9, 'top'],
            [9, 'top'],
            [4, 'right'],
            [7, 'bottom'],
            [7, 'bottom'],
            [9, 'left'],
            [9, 'bottom'],
            [5, 'left'],
            [5, 'left'],
            [8, 'top'],
            [8, 'right'],
            [10, 'top'],
            [10, 'top'],
            [4, 'right'],
            [9, 'right'],
            [9, 'bottom'],
            [5, 'bottom'],
            [10, 'left'],
            [10, 'left'],
            [8, 'left'],
            [8, 'left'],
            [4, 'top'],
            [6, 'top'],
            [9, 'right'],
            [9, 'right'],
            [7, 'right'],
            [7, 'right'],
            [5, 'bottom'],
            [8, 'bottom'],
            [8, 'left'],
            [4, 'left'],
            [6, 'left'],
            [3, 'bottom'],
            [3, 'bottom'],
            [2, 'right'],
            [1, 'right'],
            [10, 'top'],
            [10, 'top'],
            [8, 'top'],
            [8, 'top'],
            [4, 'left'],
            [1, 'bottom'],
            [1, 'bottom'],
            [2, 'left'],
            [3, 'top'],
            [3, 'top'],
            [6, 'right'],
            [7, 'top'],
            [7, 'top'],
            [9, 'left'],
            [9, 'top'],
            [5, 'right'],
            [5, 'right'],
            [4, 'bottom'],
            [1, 'bottom'],
            [7, 'left'],
            [7, 'left'],
            [2, 'bottom'],
            [10, 'right'],
            [10, 'right'],
            [8, 'top'],
            [8, 'right'],
            [7, 'top'],
            [7, 'top'],
            [4, 'top'],
            [4, 'top'],
            [1, 'left'],
            [9, 'left'],
            [9, 'bottom'],
            [2, 'bottom'],
            [10, 'bottom'],
            [10, 'left'],
            [3, 'left'],
            [6, 'top'],
            [6, 'top'],
            [2, 'right'],
            [10, 'bottom'],
            [10, 'bottom'],
            [8, 'bottom'],
            [7, 'right'],
            [4, 'top'],
            [1, 'top'],
            [9, 'left'],
            [10, 'bottom'],
            [2, 'left'],
            [6, 'bottom'],
            [6, 'bottom'],
            [3, 'right'],
            [7, 'right'],
            [8, 'right'],
            [4, 'right'],
            [1, 'top'],
            [1, 'top'],
            [2, 'left'],
            [8, 'bottom'],
            [8, 'bottom'],
            [7, 'bottom'],
            [7, 'bottom'],
            [3, 'left'],
            [6, 'top'],
            [6, 'top'],
            [8, 'right'],
            [8, 'top'],
            [5, 'top'],
            [10, 'right'],
            [10, 'right'],
            [9, 'right'],
            [9, 'right'],
            [2, 'bottom'],
            [7, 'left'],
            [7, 'left'],
            [8, 'left'],
            [8, 'left'],
            [5, 'top'],
            [9, 'top'],
            [9, 'right'],
            [2, 'right']
        ],
    }, iniState);

    let store = new Vuex.Store({
        state: iniState
    });

    return store;
}
