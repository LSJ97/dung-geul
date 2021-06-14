//회원관리 전용 js파일

function userManage(){
    parameter="/admin/admin_userManage?page1=1&page2=1&type=UNIV";
}

function userManage_guide(){
    switch (guide_val) {
        case "회원관리" : parameter="/admin/admin_userManage?page1=1&page2=1&type=UNIV";
            break;
        case "기업관리" : parameter="/admin/admin_userManage?page1=1&page2=1&type=ENTERPRISE";
            break;
        case "가입현황" : parameter="/admin/admin_userManage?page1=1&page2=1&type=UNIV";
    }
}

let detail_per;         //어떤 권한의 사용자인지 확인하는 변수 0=학생 1=교직원 2=상담사 3=기업
function detail_on_userManage(id,roll){
    detail_state=1;

    // TODO.. id랑 type 값 넣어서 요청
    $.ajax({
        url: "/allow/detail/read?user_id="+id+"&type="+roll,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify('id: '+id),
    })

    switch (roll) {
        case 'STUDENT': detail_per="detail_student";
            break;
        case 'STAFF': detail_per="detail_staff";
            break;
        case 'COUNSELOR': detail_per="detail_counselor";
            break;
        case '' : detail_per="detail_enterprise";
            break;
    }
    $('#'+detail_per).css({"visibility":"visible","opacity":"1"});
    $('#wrap,#admin_header').css("opacity","0.4");
}


//삭제,승인,거절시 ajax로 데이터 전달

let userid; //userid값을 하나하나 담음
let userShape; //기업형태
let alertShape;  //기업형태를 입력하였는지에 대한 참조변수

    function userManage_list() {
        userid = $('.list:eq(' + ListNum + ') .list_body:eq(' + checked + ') .username').text();                        //아이디값을 읽어옴

        if (ListId == "main2_user" || p=="no") {                                                             //일반회원이거나 기업형태가 필요없는 기업리스트의 삭제는 바로 값을 담음
            dataList.push(userid);
        } else if (ListId == "main2_corp" && p=="ok") {                                                      //기업회원중 기업인증할때만 shape가 필요 LISTNUM 2는 기업회원 리스트 3은 기업회원 인증리스트
            userShape = $('.shapeSelect:eq(' + checked + ')').val();                                            //기업형태를 읽어옴
            if (userShape == "") {                                                                              //기업형태를 선택하지 않았다면 알림,리스트에 추가하지않음
                if (alertShape == 0) {
                    alert("기업형태를 선택해주세요");                                                               //알림을 띄워주지않았다면 띄워주고 띄워줬다면 더 띄우지 않음
                    alertShape = 1;
                }
            } else {                                                                                            //기업형태를 선택하였다면 리스트에 추가
                let obj=new Object();
                obj.user_id=userid;
                obj.shape=userShape;
                dataList.push(obj);                             //전달할 배열에 값 삽입
            }
        }
}

function userManage_list_send(){

        if(ListId == "main2_user") {
            $.ajax({
                url: "/allow/member/read?result=" + p,
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(dataList),
            })
        }
        else if(ListId == "main2_corp" &&p=="no"){
            $.ajax({
                url: "/allow/etp/delete?result=" + p,
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(dataList),
            })
        }
        else if(ListId == "main2_corp" && p == "ok"){
            $.ajax({
                url: "/allow/etp/read?result=" + p,
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(dataList),
            })
        }
    submit_param();
}

function userManage_search(i){

        if(search_val!=""){                                                 //input값이 있다면 파라미터를 설정

            if(select_search=="main2_search") {
                switch (i) {
                    case 0: //권한은 타입이 기본적으로 type=UNIV로 설정되어있음 그래서 문자열함수로 기존파라미터에서 변경
                        parameter = parameter.replace("&type=UNIV", "");
                        search_val = "&type=" + search_val;
                        break;
                    case 1:
                        search_val = "&name=" + search_val;
                        break;
                    case 2:
                        search_val = "&id=" + search_val;
                        break;
                    case 3:
                        search_val = "&startDate=" + search_val;
                        break;
                    case 4:
                        search_val = "&endDate=" + search_val;
                        break;
                }
            }
            else if(select_search=="main2_corp_search"){
                switch (i) {
                    case 0: //권한은 타입이 기본적으로 type=UNIV로 설정되어있음 그래서 문자열함수로 기존파라미터에서 변경
                        search_val = "&name=" + search_val;
                        break;
                    case 1:
                        search_val = "&id=" + search_val;
                        break;
                    case 2:
                        search_val = "&shape=" + search_val;
                        break;
                    case 3:
                        search_val = "&startDate=" + search_val;
                        break;
                    case 4:
                        search_val = "&endDate=" + search_val;
                        break;
                }
            }

            if(search_parameter==undefined){
                search_parameter=search_val;
            }
            else {
                search_parameter = search_parameter + search_val;
            }
        }
}

let datea=[];
let ran;
$(document).ready(function() {
    for (i = 0; i < 12; i++) {
        ran = Math.floor(Math.random() * 200) + 1;
        datea.push(ran);
    }
    Highcharts.chart('container', {

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1 to 2'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },

        series: [{
            name: '2020',
            data: [datea[0],datea[1],datea[2],datea[3],datea[4],datea[5],datea[6],datea[7],datea[8],datea[9],datea[10],datea[11],datea[12],]
        }, {
            name: '2021',
            data: [122, 23, 55, 233, 22, 88, 112, 12,22,33,44,55]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
})