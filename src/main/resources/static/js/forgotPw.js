let find = {
    init: function () {
        console.log("로드 성공");
        $("#findPwBtn").on("click", () => {
            console.log("findPw() 실행");
            this.findPw(1);
        });
        $("#findPwBtn_phone").on("click", () => {
            console.log("findPw() 실행");
            this.findPw(2);
        });
    },

    findPw: function (num) {
        if (num == 1) {
            let userData = {
                user_email: $('#find_pw_email').val(),
                user_id: $('#find_pw_id').val()
            };

            console.log(JSON.stringify(userData));

            $.ajax({
                type: "post",
                url: "/forgot/pw",
                data: JSON.stringify(userData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (result) {

                    console.log(result);

                    if (result == 1) {
                        alert("임시 비밀번호 발급이 완료되었습니다.\n로그인 페이지로 이동합니다.");

                        location.href = "/mypage/member/read";
                    } else {
                        alert("회원정보 찾기에 실패했습니다.\n아이디와 이메일을 다시 확인해주세요.");
                    }

                }
            })
        }
        
        //휴대폰
        else if(num==2){
            let userData = {
                user_phone: $('#find_pw_phone').val()+"-"+$('#find_pw_phone2').val()+"-"+$('#find_pw_phone3').val(),
                user_id: $('#find_pw_ido').val()
            };

            console.log(JSON.stringify(userData));

            $.ajax({
                type: "post",
                url: "/forgot/pw",
                data: JSON.stringify(userData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (result) {

                    console.log(result);

                    if (result == 1) {
                        alert("임시 비밀번호 발급이 완료되었습니다.\n로그인 페이지로 이동합니다.");

                        location.href = "/login";
                    } else {
                        alert("회원정보 찾기에 실패했습니다.\n아이디와 휴대폰을 다시 확인해주세요.");
                    }

                }
            })
        }
    }
    
}

find.init();
