<template>
    <div class="container">
        <div class="game-info">
            <h3>解救牛牛</h3>
            <div>当前关数:第{{currentLevel}}关</div>
            <div>
                <h4>游戏规则：</h4>
                <p>牛牛现在被包围了，通过移动各个动物，让牛牛逃脱到底部中间区域即可过关！！！</p>
            </div>
        </div>
        <div :class="['gameBox', 'clearfix', 'currentLevel'+currentLevel]" @mouseleave="removeArrowSpan">
            <div v-for="(item, i) in animalArr" :class="['animal', item.type]" :style="item.position" :id="'id'+(i+1)" @mouseenter="showArrowSpan(item)" @mouseleave="clearArrowSpan(item)"> 
                {{item.name}}
                <div class="arrowDirect" v-show="item.arrowSpan && item.arrowSpan.length">
                    <span class="left" v-if="~item.arrowSpan.indexOf('canLeft')" @click="move((i+1),'left')">←</span>
                    <span class="right" v-if="~item.arrowSpan.indexOf('canRight')" @click="move((i+1),'right')">→</span>
                    <span class="top" v-if="~item.arrowSpan.indexOf('canTop')" @click="move((i+1),'top')">↑</span>
                    <span class="bottom" v-if="~item.arrowSpan.indexOf('canBottom')" @click="move((i+1),'bottom')">↓</span>
                </div>
            </div>
        </div>
        <el-row>
            <el-button type="danger" @click="restart">重新开始</el-button>
            <el-button type="success" @click="autoMoveStart()">自动运行</el-button>
            <el-button type="primary">已走{{count}}步</el-button>
        </el-row>
        <el-dialog title="恭喜过关" :visible.sync="dialogVisible" width="30%">
          <span>{{congratulations}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="closeDialog()">取 消</el-button>
            <el-button type="primary" @click="goNextLevel()">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
import $ from 'jquery'
import _ from 'lodash' 
import Vue from 'vue';
import { mapState } from 'vuex';
import { Button } from 'element-ui';
export default {
    data () {
        return {
            count: 0,
            currentLevel: 1,
            animalArr:[{
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
                    positionX: 0, 
                    positionY: 200,
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
                    positionX: 0, 
                    positionY: 0,
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
            occupancyMap:[
                [1, 1, 1, 0],
                [1, 1, 1, 0],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1]
            ],
            autoMoveStatus: false,
            congratulations: '大吉大利，顺利过关！是否继续挑战？',
            dialogVisible: false
        }
    },
    created: function() {
    }, 
    computed: mapState({
        originCount: state => state.count,
        firstAnimalArr: state => state.firstAnimalArr,
        secondAnimalArr: state => state.secondAnimalArr,
        thirdAnimalArr: state => state.thirdAnimalArr,
        firstOccupancyMap: state => state.firstOccupancyMap,
        secondOccupancyMap: state => state.secondOccupancyMap,
        thirdOccupancyMap: state => state.thirdOccupancyMap,
        originOccupancyMap: state => state.occupancyMap,
        firstAutoMoveRule: state => state.firstAutoMoveRule,
        secondAutoMoveRule: state => state.secondAutoMoveRule,
        thirdAutoMoveRule: state => state.thirdAutoMoveRule
    }),
    methods: {
        showArrowSpan(item) {
            this.addArrowSpan(item);
        },
        clearArrowSpan(item) {
            item.arrowSpan = [];
        },
        removeArrowSpan() {
        },
        addArrowSpan(item) {
            console.log(item);
            let {width, height, top, left} = item;
            console.log(top);
            console.log(left);
            let arrowDirect = [];
            //清除所有已存在的指示div可移动方向的span
            for (let i = 0; i < this.animalArr.length; i++) {
                this.animalArr[i].arrowSpan = '';
            }
            //根据移动div的大小是否可以移动
            if (width == 100 && height == 100) {
                if (this.occupancyMap[top][left + 1] === 0) {
                    arrowDirect.push('canRight');
                }
                if (this.occupancyMap[top][left - 1] === 0) {
                    arrowDirect.push('canLeft');
                }
                if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] === 0) {
                    arrowDirect.push('canTop');
                }
                if (this.occupancyMap[top + 1] && this.occupancyMap[top + 1][left] === 0) {
                    arrowDirect.push('canBottom');
                }
            } else if (width == 100 && height == 200) {
                if (this.occupancyMap[top][left + 1] == 0 && this.occupancyMap[top + 1][left + 1] === 0) {
                    arrowDirect.push('canRight');
                }
                if (this.occupancyMap[top][left - 1] == 0 && this.occupancyMap[top + 1][left - 1] === 0) {
                    arrowDirect.push('canLeft');
                }
                if (this.occupancyMap[top -1] && this.occupancyMap[top -1][left] === 0) {
                    arrowDirect.push('canTop');
                }
                if (this.occupancyMap[top + 2] && this.occupancyMap[top + 2][left] === 0) {
                    arrowDirect.push('canBottom');
                }
            } else if (width == 200 && height == 100) {
                if (this.occupancyMap[top] && this.occupancyMap[top][left - 1] === 0) {
                    arrowDirect.push('canLeft');
                }
                if (this.occupancyMap[top] && this.occupancyMap[top][left + 2] === 0) {
                    arrowDirect.push('canRight');
                }
                if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] === 0 && this.occupancyMap[top - 1][left + 1] === 0) {
                    arrowDirect.push('canTop');
                }
                if (this.occupancyMap[top + 1] && this.occupancyMap[top + 1][left] === 0 && this.occupancyMap[top + 1][left + 1] === 0) {
                    arrowDirect.push('canBottom');
                }
            } else if (width == 200 && height == 200) {
                if (this.occupancyMap[top] && this.occupancyMap[top][left + 2] === 0 && this.occupancyMap[top + 1] && this.occupancyMap[top + 1][left + 2] === 0) {
                    arrowDirect.push('canRight');
                }
                if (this.occupancyMap[top] && this.occupancyMap[top][left - 1] === 0 && this.occupancyMap[top + 1] && this.occupancyMap[top + 1][left -1] === 0) {
                    arrowDirect.push('canLeft');
                }
                if (this.occupancyMap[top + 2] && this.occupancyMap[top + 2][left] === 0 && this.occupancyMap[top + 2][left + 1] === 0) {
                    arrowDirect.push('canBottom');
                }
                if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] === 0 && this.occupancyMap[top - 1][left + 1] === 0) {
                    arrowDirect.push('canTop');
                }
            }
            item.arrowSpan = arrowDirect;
            console.log('arrowDirect', arrowDirect)
        },
        move(id, direct, autoMove) {
            console.log('direct', direct)
            let self = this;
            let $this = $('#id' + id);
            let target = this.animalArr[id - 1];
            console.log('target', target)
            let {width, height, top, left} = target
            console.log(top, left);
            function targetMove(num, orient) {
                self.count += 1;
                if (orient == 'left' || orient == 'right') {
                    self.animalArr[id - 1].left = num;
                    $this.css('left', num * 100);
                } else {
                    self.animalArr[id - 1].top = num;
                    $this.css('top', num * 100);
                }
                //检测是否已经通关
                if (id == 2 && self.animalArr[1].top == 3 && self.animalArr[1].left == 1) {
                    self.dialogVisible = true;
                    if (self.currentLevel == 3) {
                        self.congratulations = '能坚持到这里说明你是一个不愿轻易放弃的牛人！加油！';
                    }
                }
            }
            if (direct == 'right') {
                if (width == 100 && height == 100) {
                    if (this.occupancyMap[top][left + 1] === 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top][left + 1] = 1;
                        targetMove(left + 1, 'right');
                    }
                } else if (width == 100 && height == 200) {
                    if (this.occupancyMap[top][left + 1] == 0 && this.occupancyMap[top + 1][left + 1] == 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top + 1][left] = 0;
                        this.occupancyMap[top][left + 1] = 1;
                        this.occupancyMap[top + 1][left + 1] = 1;
                        targetMove(left + 1, 'right');
                    }
                } else if (width == 200 && height == 200) {
                    if (this.occupancyMap[top][left + 2] == 0 && this.occupancyMap[top + 1][left + 2] == 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top + 1][left] = 0;
                        this.occupancyMap[top][left + 2] = 1;
                        this.occupancyMap[top + 1][left + 2] = 1;
                        targetMove(left + 1, 'right');
                    }
                } else if (width == 200 && height == 100) {
                    if (this.occupancyMap[top][left + 2] == 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top][left + 2] = 1;
                        targetMove(left + 1, 'right');
                    }
                }
                //移动完之后需要重新判断可移动的方向
                this.addArrowSpan(target);
            }
            if (direct == 'left') {
                if (width == 100 && height == 100) {
                    console.log(6666);
                    if (this.occupancyMap[top][left - 1] == 0) {
                        console.log(7777);
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top][left - 1] = 1;
                        targetMove(left - 1, 'left');
                    }
                } else if (width == 100 && height == 200) {
                    if (this.occupancyMap[top][left - 1] == 0 && this.occupancyMap[top + 1][left - 1] == 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top + 1][left] = 0;
                        this.occupancyMap[top][left - 1] = 1;
                        this.occupancyMap[top + 1][left - 1] = 1;
                        targetMove(left - 1, 'left');
                    }

                } else if (width == 200 && height == 200) {
                    if (this.occupancyMap[top][left - 1] == 0 && this.occupancyMap[top + 1][left - 1] == 0) {
                        this.occupancyMap[top][left + 1] = 0;
                        this.occupancyMap[top + 1][left + 1] = 0;
                        this.occupancyMap[top][left - 1] = 1;
                        this.occupancyMap[top + 1][left - 1] = 1;
                        targetMove(left - 1, 'left');
                    }
                } else if (width == 200 && height == 100) {
                    if (this.occupancyMap[top][left - 1] == 0) {
                        this.occupancyMap[top][left + 1] = 0;
                        this.occupancyMap[top][left - 1] = 1;
                        targetMove(left - 1, 'left');
                    }
                }
                //移动完之后需要重新判断可移动的方向
                this.addArrowSpan(target);
            }
            if (direct == 'top') {
                if (width == 100 && height == 100) {
                    if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] == 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top - 1][left] = 1;
                        targetMove(top - 1, 'top');
                    }
                } else if (width == 100 && height == 200) {
                    if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] == 0) {
                        this.occupancyMap[top + 1][left] = 0;
                        this.occupancyMap[top - 1][left] = 1;
                        targetMove(top - 1, 'top');
                    }

                } else if (width == 200 && height == 200) {
                    if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] === 0 && this.occupancyMap[top - 1][left + 1] === 0) {
                        this.occupancyMap[top + 1][left] = 0;
                        this.occupancyMap[top + 1][left + 1] = 0;
                        this.occupancyMap[top - 1][left] = 1;
                        this.occupancyMap[top - 1][left + 1] = 1;
                        targetMove(top - 1, 'top');
                    }
                } else if (width == 200 && height == 100) {
                    if (this.occupancyMap[top - 1] && this.occupancyMap[top - 1][left] === 0 && this.occupancyMap[top - 1][left + 1] === 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top][left + 1] = 0;
                        this.occupancyMap[top - 1][left] = 1;
                        this.occupancyMap[top - 1][left + 1] = 1;
                        targetMove(top - 1, 'top');
                    }
                }
                //移动完之后需要重新判断可移动的方向
                this.addArrowSpan(target)
            }
            if (direct == 'bottom') {
                if (width == 100 && height == 100) {
                    if (this.occupancyMap[top + 1] && this.occupancyMap[top + 1][left] === 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top + 1][left] = 1;
                        targetMove(top + 1, 'bottom');
                    }
                } else if (width == 100 && height == 200) {
                    if (this.occupancyMap[top + 2][left] === 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top + 2][left] = 1;
                        targetMove(top + 1, 'bottom');
                    }

                } else if (width == 200 && height == 200) {
                    if (this.occupancyMap[top + 2][left] === 0 && this.occupancyMap[top + 2][left + 1] === 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top][left + 1] = 0;
                        this.occupancyMap[top + 2][left] = 1;
                        this.occupancyMap[top + 2][left + 1] = 1;
                        targetMove(top + 1, 'bottom');
                    }
                } else if (width == 200 && height == 100) {
                    if (this.occupancyMap[top + 1][left] === 0 && this.occupancyMap[top + 1][left + 1] === 0) {
                        this.occupancyMap[top][left] = 0;
                        this.occupancyMap[top][left + 1] = 0;
                        this.occupancyMap[top + 1][left] = 1;
                        this.occupancyMap[top + 1][left + 1] = 1;
                        targetMove(top + 1, 'bottom')
                    }
                }
                //移动完之后需要重新判断可移动的方向
                this.addArrowSpan(target);
            }
        },
        restart() {
            clearTimeout(this.timeOut);
            this.timeOut = '';
            if (this.currentLevel == 1) {
                this.occupancyMap = _.merge([], this.firstOccupancyMap);
                this.animalArr = _.merge([], this.firstAnimalArr);
            } else if (this.currentLevel == 2) {
                this.occupancyMap = _.merge([], this.secondOccupancyMap);
                this.animalArr = _.merge([], this.secondAnimalArr);
            } else if (this.currentLevel == 3) {
                this.occupancyMap = _.merge([], this.thirdOccupancyMap);
                this.animalArr = _.merge([], this.thirdAnimalArr);
            }
            this.count = this.originCount;
            this.autoMoveStatus = false;
            for (let i = 1; i < this.animalArr.length + 1; i++) {
                $("#id" + i).css({
                    left: this.animalArr[i - 1].positionX,
                    top: this.animalArr[i - 1].positionY
                })
                this.animalArr[i - 1].arrowSpan = '';
            }
        },
        autoMoveStart() {
            clearTimeout(this.timeOut);
            this.count = 0;
            this.restart();
            let rule = [];
            let self = this;
            switch(this.currentLevel) {
                case 1:
                    rule = self.firstAutoMoveRule;
                    console.log('rule');
                break;
                case 2:
                    rule = self.secondAutoMoveRule;
                break;
                case 3:
                    rule = self.thirdAutoMoveRule;
                break;
                default:
                    rule = self.firstAutoMoveRule;
            }
            console.log(self.firstAutoMoveRule)
            if (!this.autoMoveStatus) {
                this.autoMoveStatus = true;
                this.autoMove(rule);
            } else {
                return;
            }
        },
        autoMove(rule, index = 0) {
            let self = this;
            console.log(rule);
            let operation = rule[index];
            console.log('operation', operation)
            if (operation) {
                self.move(...operation);
                index += 1;
                self.timeOut = setTimeout(function(){
                    self.autoMove(rule, index);
                }, 1000)
            } else {
                //自动运行完成
                this.animalArr[1].arrowSpan = '';
                self.autoMoveStatus = false;
            }
        },
        goNextLevel() {
            this.currentLevel < 3 ? this.currentLevel += 1 : this.currentLevel = 1;
            this.dialogVisible = false;
            this.restart();
        },
        closeDialog() {
            this.dialogVisible = false;
            this.autoMoveStatus = false;
        }
    }
}
</script>
<style lang="scss">
    .container {
        position: relative;
        margin: 0 auto;
        margin-top: 20px;
        width: 406px;
    }
    .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix {
        *zoom: 1;
    }
    .gameBox {
        width: 400px;
        height: 500px;
        border: 3px solid red;
        background: #fff;
        position: relative;
        margin-bottom: 20px;
        padding: 1px;
        .animal {
            position: absolute;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 200px;
            cursor: pointer;
            transition: top 0.2s, left 0.2s; 
            .arrowDirect {
                width: 0;
                height: 0;
                span {
                    display: inline-block;
                    position: absolute;
                    background: red;
                }
                .left {
                    width: 30px;
                    height: 100%;
                    border-top-left-radius: 70px;
                    border-bottom-left-radius: 70px;
                    top: 0;
                    left: -30px;
                }
                .right {
                    width: 30px;
                    height: 100%;
                    border-top-right-radius: 70px;
                    border-bottom-right-radius: 70px;
                    top: 0;
                    right: -30px;
                }
                .top {
                    width: 100%;
                    height: 30px;
                    border-top-left-radius: 70px;
                    border-top-right-radius: 70px;
                    top: -30px;
                    line-height: 30px;
                    left: 0;
                }
                .bottom {
                    width: 100%;
                    height: 30px;
                    border-bottom-left-radius: 70px;
                    border-bottom-right-radius: 70px;
                    bottom: -30px;
                    right: 0;
                    line-height: 30px;
                }
            }
        }
        .bigAnimal {
            width: 100px;
            height: 200px;
            background: #2dbb55;
        }
        .boss {
            width: 200px;
            height: 200px;
            background: #f80;
        }
        .smallAnimal {
            width: 100px;
            height: 100px;
            line-height: 100px;
            background: #009ad6;
            span {
                line-height: 100px;
            }
        }
        
        #id5 {
            width: 200px;
            height: 100px;
            line-height: 100px;
        }
    }
    .el-row {
        display: flex;
        .el-button {
            flex: 1;
        }
    }
</style>