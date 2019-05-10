/***生成状态选择****/ 
var state = [
    {
        label:'未知状态',
        value:'0',
        color:'#fa9a31',
        className:'f_yellow'
    },
    {
        label:'已退出',
        value:'1',
        color:'#bbc4d3',
        className:'f_gray'
    },
    {
        label:'准备好',
        value:'2',
        color:'#6cdcf7',
        className:'f_lightBlue'
    },
    {
        label:'未准备好',
        value:'3',
        color:'#f6ca48',
        className:'f_orange'
    },
    {
        label:'接听电话',
        value:'4',
        color:'#90d59f',
        className:'f_green'
    },
    {
        label:'拔出电话',
        value:'5',
        color:'#4084e6',
        className:'f_blue'
    },
    {
        label:'示忙',
        value:'6',
        color:'#f57a7b',
        className:'f_red'
    },
    {
        label:'其他',
        value:'7',
        color:'',
        className:''
    }
]
var stateHtml =''
for (var i = 0; i< state.length; i++) {
    stateHtml += '<input class="easyui-checkbox" checked name="fruit" value="'+state[i].value+'" labelPosition="after" label="'+ state[i].label +'">'
    $("#ff label:eq("+ i +")").css('color',state[i].color)
    $("#fs label:eq("+ i +")").css('color',state[i].color)
}
$("#ff").html(stateHtml)
$("#fs").html(stateHtml)
$(function(){
    /***********节点树************* */
       // 节点数据
    var treeData = [{
        "id":1,
        "text":"座席监控系统",
        "checked":false,
        "children":[{
            "id":11,
            "text":"我的监控组",
            "state":"closed",
            "checked":false,
            "children":[{
                "id":111,
                "text":"10000号梅南06号",
                "checked":true
            },{
                "id":112,
                "text":"Wife",
                "checked":false
            },{
                "id":113,
                "text":"Company",
                "checked":false
            }]
        },{
            "id":12,
            "text":"Program Files",
            "checked":false,
            "children":[{
                "id":121,
                "text":"Intel",
                "checked":false
            },{
                "id":122,
                "text":"Java",
                "checked":false,
                "attributes":{
                    "p1":"Custom Attribute1",
                    "p2":"Custom Attribute2"
                }
            },{
                "id":123,
                "text":"Microsoft Office",
                "checked":false
            },{
                "id":124,
                "text":"Games",
                "checked":true
            }]
            },{
                "id":13,
                "text":"index.html",
                "checked":false
            },{
                "id":14,
                "text":"about.html",
                "checked":false
            },{
                "id":15,
                "text":"welcome.html",
                "checked":false
            }]
}]
    autoTree(treeData)
    function autoTree (treeData) {
        var nodes = $('#tt').tree({ // 左侧节点树的内容
            checkbox: true,
            data: treeData, // 节点数据
            // onClick: function(node){ // 点击节点树行
            //     getMenuName(treeData, node.id) // 改变选中状态
            //     allTeeeChecked() // 获取所选节点信息
            // },
            onCheck: function(node){ // 点击节点树选择框
                allTeeeChecked() // 获取所选节点信息
            }
        })
        $('#tt').tree('expandAll') // 展开所有节点树
    }
    function allTeeeChecked () { // 获取所选节点信息
        var nodes = $('#tt').tree('getChecked');
            var s = [];
            var n = [];
			for(var i=0; i<nodes.length; i++){
                s.push(nodes[i].text)
                n.push(nodes[i].id)
                // if (s != '') s += ',';
                // if (n != '') n += ',';
                // s += nodes[i].text;
                // n += nodes[i].id;
            }
            console.log(s,n)
    }
    function getMenuName(obj, id){ // 点击节点树行复选框选中
        var nodes = $('#tt').tree('getChecked');
        for(var i=0,len=obj.length;i<len;i++){
          if (obj[i].id == id) {
            obj[i].checked = !obj[i].checked
          }
          if(obj[i].children != null && obj[i].children.length>0){
            getMenuName(obj[i].children, id)
          }
        }
        autoTree(obj)
    }
    /***********显示方式联级菜单************* */
    $('#cc').combo({ // 显示方式联级菜单
        editable:false,
        value: '表格' // 默认表格
    });

    $('#sp').appendTo($('#cc').combo('panel'));
    $('#sp p').click(function(){  // 显示方式联级菜单事件
        $(this).addClass('selected').siblings().removeClass('selected')
        var v = $(this).attr('value');
        var s = $(this).text();
        $('#cc').combo('setValue', v).combo('setText', s).combo('hidePanel');
        console.log('联级菜单', v, s)
        // 显示图表还是表格
        $("#tabCon>div:eq("+ v +")").css('display','block').siblings().css('display','none')
       
    });
    /***********状态选择事件************* */
    // 改变状态的字体颜色
    for (var i = 0; i< state.length; i++) {
        $("#ff label:eq("+ i +")").css('color',state[i].color)
        $("#fs label:eq("+ i +")").css('color',state[i].color)
    }
    function stateFun(){
        var staticArr = new Array()
        $("input[name='fruit']:checked").each(function(i){
            staticArr[i] = $(this).val();
        });
        var staticVals = staticArr.join(",");
        console.log('状态选择', staticArr, staticVals)
    }               
    $("#ff").click(function(){  // 状态选择事件
        stateFun()
    })
    $("#fs").click(function(){  // 状态选择事件
        stateFun()
    })

    /*********表格数据展示*******/
    $('#dg').datagrid({
        data: [
            {num:'value11', telnum:'value12',name: '冯晓鹏', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'},
            {num:'value11', telnum:'value12',name: '冯晓鹏1', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'},{num:'value11', telnum:'value12',name: '冯晓鹏', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'},
            {num:'value11', telnum:'value12',name: '冯晓鹏2', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'},
            {num:'value11', telnum:'value12',name: '冯晓鹏3', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'},
            {num:'value11', telnum:'value12',name: '冯晓鹏4', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'}
        ],
        columns:[[
            {field:'num',title:'分机号',width:100},
            {field:'telnum',title:'工号',width:150},
            {field:'name',title:'姓名',width:80},
            {field:'photo',title:'号码',width:120},
            {field:'state',title:'状态',width:80},
            {field:'time',title:'持续时间',width:180,align:'right'},
            {field:'dNum',title:'队列号',width:80},
            {field:'potion',title:'位置',width:200}
        ]]
    });
    /******分页*******/
    $('#pp').pagination({
        // 1、list：页面尺寸列表。 2、sep：页面按钮分割。 3、first：第一个按钮。
        // 4、prev：前一个按钮。 5、next：后一个按钮。 6、last：最后一个按钮。
        // 7、efresh：刷新按钮。 8、manual：允许输入域页码的手动页码输入框。9、links：页码链接。
        layout:['first','prev','links','next','last'],
        total:2000,
        pageSize:10,
        onSelectPage: function (pageNumber, pageSize) {
            console.log('pageNumber:'+pageNumber+',pageSize:'+pageSize);
        }
    });

   /******图表内容******/
   var tuData = [
        {num:'value11', telnum:'value12',name: '冯晓鹏', photo: '1345322',state:'0',time:'2019-02-03',dNum:'23',potion:'济南'},
        {num:'value11', telnum:'value12',name: '冯晓鹏1', photo: '1345322',state:'1',time:'2019-02-03',dNum:'23',potion:'济南'},{num:'value11', telnum:'value12',name: '冯晓鹏', photo: '1345322',state:'拨出号码',time:'2019-02-03',dNum:'23',potion:'济南'},
        {num:'value11', telnum:'value12',name: '冯晓鹏2', photo: '1345322',state:'2',time:'2019-02-03',dNum:'23',potion:'济南'},
        {num:'value11', telnum:'value12',name: '冯晓鹏3', photo: '1345322',state:'3',time:'2019-02-03',dNum:'23',potion:'济南'},
        {num:'value11', telnum:'value12',name: '冯晓鹏4', photo: '1345322',state:'4',time:'2019-02-03',dNum:'23',potion:'济南'}
    ]
    var chartHtml='';
    for(var k = 0; k< tuData.length; k++) {
        chartHtml +='<li>'+
        '<div class="chartTitle">'+
            '<p class="chartNum fl">'+ tuData[k].num +'</p>';
           for(var m = 0; m < state.length; m++ ){
               if (tuData[k].state == state[m].value) {
                   chartHtml +='<p class="fr '+ state[m].className +'">'+ state[m].label +'</p>';
               }
           }
        chartHtml +='</div>'+
        '<p class="chartCon">'+
            '<span class="chartNum fl">分机</span>'+
            '<span class="fr chartState">'+ tuData[k].telnum +'</span>'+
        '</p>'+
        '<p class="chartCon">'+
        '<span class="chartNum fl">姓名</span>'+
        '<span class="fr chartState">'+ tuData[k].name +'</span>'+
        '</p>'+
        '<p class="chartCon">'+
            '<span class="chartNum fl">号码</span>'+
            '<span class="fr chartState">'+ tuData[k].photo +'</span>'+
        '</p>'+
        '<p class="chartCon">'+
            '<span class="chartNum fl">续时</span>'+
            '<span class="fr chartState">'+ tuData[k].time +'</span>'+
        '</p>'+
        '<p class="chartCon">'+
            '<span class="chartNum fl">队列</span>'+
            '<span class="fr chartState">'+ tuData[k].dNum +'</span>'+
        '</p>'+
        '<p class="chartCon">'+
        '<span class="chartNum fl">位置</span>'+
        '<span class="fr chartState">'+ tuData[k].potion +'</span>'+
    '</p>'+
    '</li>'
    }
    $(".chart").html(chartHtml)




    // app.title = '坐标轴刻度与标签对齐';
    var f_broadband= echarts.init(document.getElementById('echarts'));
    
    var colorList = [
        '#fa9a31',
        '#bbc4d3',
        '#6cdcf7',
        '#f6ca48',
        '#90d59f',
        '#4084e6',
        '#f57a7b',
        '#aeaeae'
    ];
    var dataName= ['未知状态','已退出','准备好','未准备好','接听电话','拔出电话','示忙', '其他']
    var option = {
        color:colorList,
        legend: {
            // orient: 'vertical',
            y: 'center',
            right: '2%',
            itemWidth: 12,
            itemHeight: 12,
            data : dataName,
            textStyle:{    //图例文字的样式
                fontSize:14
            }
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter:  function (params) {
                return params.name +":"+ params.value
            }
        },
        toolbox: {
            show : true,
            feature : {
                mark : {
                    show: true
                },

            }
        },
        grid: {
            left: '2%',
            right: '10%',
            bottom: '3%',
            height:'90%',
            width:'80%',
            containLabel: true
        },
        xAxis : [
            {
                data :  dataName,
                type : 'category',
                axisLine: {
                    // show:false,
                    lineStyle: {
                        // opacity: 0,
                        type: 'solid',
                        color: '#aeaeae',
                        width:'1'//坐标线的宽度
                    }
                },
                axisLabel:  {
                    interval: 0,
                    // rotate:40,
                    // show: false,
                    splitNumber: 15,
                    textStyle: {
                        //fontFamily: "微软雅黑",
                        fontSize: 10,
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        opacity: 0
                    }
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                    lineStyle: {
                        opacity: 0
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:'',
                splitLine: {  //分割线
                    show: true,
                    // color:"#fff",
                    lineStyle: {
                        color: '#aeaeae'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        // type: 'solid',
                        color: '#aeaeae',
                        // width:'1'//坐标线的宽度
                    }
                },
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    splitNumber: 30,
                    // color:"#fff",
                    textStyle: {
                        //fontFamily: "微软雅黑",
                        fontSize: 12,
                    }
                },

            },

        ],
        series : [
            {
                name:'',
                type:'bar',
                barWidth : 30,//柱图宽度
                data:[2800, 1700, 1200, 1000, 900, 600, 400, 500],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorLists = colorList
                            return colorLists[params.dataIndex]
                        },
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{c}%'
                        },
                        barBorderRadius:[ 20, 20, 0 , 0]
                    },
                   
                }
            }
        ]
    }
    f_broadband.setOption(option);


})
