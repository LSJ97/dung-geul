let signUp = {
  init: function () {
    $("#submit").on("click", event => {
      event.preventDefault();
      // alert("saveStudent 실행");
      this.saveCounselor();
    });
  },

  saveCounselor: function () {
    let userData = {
      user_id: $('#user_id').val(),
      user_pw: $('#user_pw').val(),
      user_name: $('#user_name').val(),
      user_email: $('#user_email').val(),
      user_emailDomain: $('#user_emailDomain').val(),
      user_ph: $('#user_ph').val(),
      user_ph2: $('#user_ph2').val(),
      user_ph3: $('#user_ph3').val(),
      user_postcode: $('#postcode').val(),
      user_addr: $('#user_addr').val(),
      user_addr_details: $('#user_addr_details').val(),
      role: $('#role').val(),
    };

    // alert("userdate 전송 ! " + JSON.stringify(userData));
    console.log(JSON.stringify(userData));
    // alert(JSON.stringify(userData));

    if (!userData.user_id) {
      alert('아이디를 입력해주세요');
      $('#user_id').focus();
    } else if (!userData.user_pw) {
      alert('비밀번호를 입력해주세요');
      $('#user_pw').focus();
    } else if (!userData.user_name) {
      alert('이름을 입력해주세요');
      $('#user_name').focus();
    } else if (!(userData.user_email && userData.user_emailDomain)) {
      alert('이메일을 입력해주세요');
      $('#user_email').focus();
    } else if (!(userData.user_ph2 && userData.user_ph3)) {
      alert('휴대폰 번호를 입력해주세요');
      $('#user_ph2').focus();
    } else if (!userData.user_postcode) {
      alert('주소를 입력해주세요');
      $('#user_postcode').focus();
    } else {
       $.ajax({
      type: 'post',
      url: '/sigUp/counselor',
      data: JSON.stringify(userData),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (response) {
        if (response == 1) {
          alert('회원가입 되었습니다. 상담 활동은 승인 시 가능합니다. 승인 진행상황은 마이페이지에서 확인 가능합니다');

          location.href = '/login';
        } else {
          alert('회원가입 실패했습니다');

          location.href = '/';
        }
      },
      error: function (error) {
        alert('내부 오류, 회원가입 실패');
        console.log(error);
        location.href = '/';
      },
    });
    }
   
  },
};
signUp.init();
