//게시판관리 전용 js파일

function board(){
    parameter="/admin/admin_board";
}

function board_guide(){
    switch (guide_val) {
        case "미구현" : parameter="/admin/admin_board";
            break;
    }
}

//삭제,승인,거절시 ajax로 데이터 전달

let num; //글번호를 담음
function board_list() {
    num = $('.list:eq(' + ListNum + ') .list_body:eq(' + checked + ') .number').text();                        //글번호값을 읽어옴
    dataList.push(num);
}

function board_list_send(){

    // if(ListId == "main2_user"){
    //     A_url="/allow/member/read?result=" + p;
    // }
    // else if(ListId == "main2_corp" &&p=="no"){
    //     A_url="/allow/etp/delete?result=" + p;
    // }
    // else if(ListId == "main2_corp" && p == "ok"){
    //     A_url="/allow/etp/read?result=" + p;
    // }


    $.ajax({
        url: '',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(dataList),
        success : function (result){
            alert("회원정보 변경 성공");
            submit_param();
        },
        error : function (err) {
            alert("err : " + err);
        }
    })
}

function board_search(i){
    alert("board");
    if(search_val!=""){                                                 //input값이 있다면 파라미터를 설정

        // switch (i) {
        //     case 0: //권한은 타입이 기본적으로 type=UNIV로 설정되어있음 그래서 문자열함수로 기존파라미터에서 변경
        //         parameter = parameter.replace("&type=UNIV", "");
        //         search_val = "&type=" + search_val;
        //         break;
        //     case 1:
        //         search_val = "&name=" + search_val;
        //         break;
        //     case 2:
        //         search_val = "&id=" + search_val;
        //         break;
        //     case 3:
        //         search_val = "&startDate=" + search_val;
        //         break;
        //     case 4:
        //         search_val = "&endDate=" + search_val;
        //         break;
        // }
    }

    if(search_parameter==undefined){
        search_parameter=search_val;
    }
    else {
        search_parameter = search_parameter + search_val;
    }

}

function detail_on_board(board_num){
    detail_state=1;

    if(board_num!=undefined){
        $('#detail_board_read').css({"visibility":"visible","opacity":"1"});
        $('#wrap,#admin_header').css("opacity","0.4");
        //값 넣는 코드
    }
    else if(board_num==undefined){
        $('#detail_board_register').css({"visibility":"visible","opacity":"1"});
        $('#wrap,#admin_header').css("opacity","0.4");
    }

    //값 초기화 코드
}