//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
    addRemark();//向地图中添加文字标注
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(121.113231,39.515497);//定义一个中心点坐标
    map.centerAndZoom(point,5);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
    map.setCurrentCity("武汉市"); //设置当前城市
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{title:"去过的地方",content:"2019-12-09",point:"120.046188|30.448975",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
    ,{title:"去过的地方",content:"2013-08-14",point:"126.374858|45.961597",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
];
//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var marker = new BMap.Marker(point,"image/flag.png");//引用图标标记去过的地方

        var label = new BMap.Label(json.title+" " +json.content,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});//用于鼠标移上去显示文字

        label.setStyle({
            color: "#fff",
            border: "0",
            padding: "0",
            display: "none", //默认不显示标签的内容
            background: "rgba(66,117,202,0.9)",
            fontSize: "12px",
            height: "20px",
            lineHeight: "20px",
            fontFamily: "微软雅黑"
        });
        marker.setLabel(label);

        marker.addEventListener("mouseover",function(e){
            var label = this.getLabel();
            label.setStyle({display:"block"});
        });
        marker.addEventListener("mouseout",function(e){
            var label = this.getLabel()
            label.setStyle({display:"none"});
        });

        map.addOverlay(marker); //将标记添加到地图中
    }
}

//文字标注数组
var lbPoints = [{point:"103.856567|30.894267",content:"2019五一期间旅行"}
];
//向地图中添加文字标注函数
function addRemark(){
    for(var i=0;i<lbPoints.length;i++){
        var json = lbPoints[i];
        var p1 = json.point.split("|")[0];
        var p2 = json.point.split("|")[1];
        var label = new BMap.Label("<div style='padding:2px;'>"+json.content+"</div>",{point:new BMap.Point(p1,p2),offset:new BMap.Size(3,-6)});
        map.addOverlay(label);
        label.setStyle({borderColor:"#999"});
    }
}

initMap();//创建和初始化地图