const App = {
    data() {
        return {
            list0: [0,0,0],
            list1: [0,0,0],
            list2: [0,0,0],
        }
    },
    methods: {
        turn(idx,li) {
            if(li[idx] !== 1 && li[idx] !== -1) {
                li[idx] = 1
                //1.1
                if(this.list0[0] + this.list0[1] + this.list0[2] < -1) {
                    for (i = 0; i < 3; i++) {
                        if(this.list0[0] == 0) {
                            this.list0[0] = -1
                        }
                        else if(this.list0[1] == 0) {
                            this.ist0[1] = -1
                        }
                        else {
                            this.list0[2] = -1
                        }
                    }
                }
                else if(this.list1[0] + this.list1[1] + this.list1[2] < -1) {
                    for (i = 0; i < 3; i++) {
                        if(this.list1[0] == 0) {
                            this.list1[0] = -1
                        }
                        else if(this.list1[1] == 0) {
                            this.ist1[1] = -1
                        }
                        else {
                            this.list1[2] = -1
                        }
                    }
                }
                else if(this.list2[0] + this.list2[1] + this.list2[2] < -1) {
                    for (i = 0; i < 3; i++) {
                        if(this.list2[0] == 0) {
                            this.list2[0] = -1
                        }
                        else if(this.list2[1] == 0) {
                            this.ist2[1] = -1
                        }
                        else {
                            this.list2[2] = -1
                        }
                    }
                }
                //1.2
                else if(this.list0[0] + this.list1[0] + this.list2[0] < -1) {
                    if(this.list0[0] == 0) {
                        this.list0[0] = -1
                    }
                    else if(this.list1[0] == 0) {
                        this.list1[0] = -1
                    }
                    else {
                        this.list2[0] = -1
                    }
                }
                else if(this.list0[1] + this.list1[1] + this.list2[1] < -1) {
                    if(this.list0[1] == 0) {
                        this.list0[1] = -1
                    }
                    else if(this.list1[1] == 0) {
                        this.list1[1] = -1
                    }
                    else {
                        this.list2[1] = -1
                    }
                }
                else if(this.list0[2] + this.list1[2] + this.list2[2] < -1) {
                    if(this.list0[2] == 0) {
                        this.list0[2] = -1
                    }
                    else if(this.list1[2] == 0) {
                        this.list1[2] = -1
                    }
                    else {
                        this.list2[2] = -1
                    }
                }
                //1.3                
                else if(this.list0[0] + this.list1[1] + this.list2[2] < -1) {
                    if(this.list0[0] == -1) {
                        this.list2[2] = -1
                    }
                    else {
                        this.list0[0] = -1
                    }
                }
                //1.4
                else if(this.list0[2] + this.list1[1] + this.list2[0] < -1) {
                    if(this.list0[2] == -1) {
                        this.list2[0] = -1
                    }
                    else {
                        this.list0[2] = -1
                    }
                }
                //2.1
                else if(li[0] + li[1] + li[2] > 1) {
                    for (i = 0; i < 3; i++) {
                        if(li[i] == 0) {
                            li[i] = -1
                        }
                    }
                }
                //2.2
                else if(this.list0[idx] + this.list1[idx] + this.list2[idx] > 1) {
                    if(this.list0[idx] == 0) {
                        this.list0[idx] = -1
                    }
                    else if(this.list1[idx] == 0) {
                        this.list1[idx] = -1
                    }
                    else {
                        this.list2[idx] = -1
                    }
                }
                //2.3                
                else if(this.list0[0] + this.list1[1] + this.list2[2] > 1) {
                    if(this.list0[0] == 1) {
                        this.list2[2] = -1
                    }
                    else {
                        this.list0[0] = -1
                    }
                }
                //2.4
                else if(this.list0[2] + this.list1[1] + this.list2[0] > 1) {
                    if(this.list0[2] == 1) {
                        this.list2[0] = -1
                    }
                    else {
                        this.list0[2] = -1
                    }
                }
                //2.5
                else if(this.list0[1] == 1 && this.list1[2] == 1 && this.list0[2] == 0) {
                    this.list0[2] = -1
                }
                else if(this.list1[2] == 1 && this.list2[1] == 1 && this.list2[2] == 0) {
                    this.list2[2] = - 1
                }
                else if(this.list2[1] == 1 && this.list1[0] == 1 && this.list2[0] == 0) {
                    this.list2[0] = - 1
                }
                else if(this.list1[0] == 1 && this.list0[1] == 1 && this.list0[0] == 0) {
                    this.list0[0] = - 1
                }
                //3
                else {
                    if(this.list1[1] == 0) {
                        this.list1[1] = -1
                    }
                    else if(this.list0[0] <= 0 && this.list0[1] <=0 && this.list0[2] <=0) {
                        if(this.list0[0] == 0) {
                            this.list0[0] = - 1
                        }
                        else if(this.list0[1] == 0) {
                            this.list0[1] = - 1
                        }
                        else {
                            this.list0[2] = -1
                        }
                    }
                    else if(this.list1[0] <= 0 && this.list1[1] <=0 && this.list1[2] <=0) {
                        if(this.list1[0] == 0) {
                            this.list1[0] = - 1
                        }
                        else if(this.list1[1] == 0) {
                            this.list1[1] = - 1
                        }
                        else {
                            this.list1[2] = -1
                        }
                    }
                    else if(this.list2[0] <= 0 && this.list2[1] <=0 && this.list2[2] <=0) {
                        if(this.list2[0] == 0) {
                            this.list2[0] = - 1
                        }
                        else if(this.list2[1] == 0) {
                            this.list2[1] = - 1
                        }
                        else {
                            this.list2[2] = -1
                        }
                    }
                    else if (this.list0.includes(0)) {
                        if(this.list0[0] == 0) {
                            this.list0[0] = - 1
                        }
                        else if(this.list0[1] == 0) {
                            this.list0[1] = - 1
                        }
                        else {
                            this.list0[2] = -1
                        }
                    }
                    else if (this.list1.includes(0)) {
                        if(this.list1[0] == 0) {
                            this.list1[0] = - 1
                        }
                        else if(this.list1[1] == 0) {
                            this.list1[1] = - 1
                        }
                        else {
                            this.list1[2] = -1
                        }
                    }
                    else if (this.list2.includes(0)) {
                        if(this.list2[0] == 0) {
                            this.list2[0] = - 1
                        }
                        else if(this.list2[1] == 0) {
                            this.list2[1] = - 1
                        }
                        else {
                            this.list2[2] = -1
                        }
                    }
                    else {
                        console.log('fin')
                    }
                }
            }
            else {
                return false
            }
        },
        reset() {
            this.list0 =[0,0,0]
            this.list1 =[0,0,0]
            this.list2 =[0,0,0]
        }
    }
}
Vue.createApp(App).mount(".main")