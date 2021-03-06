let signUp = {
  init: function () {
    $('#submit').on('click', event => {
      event.preventDefault();
      this.save();
    });
  },

  save: function () {
    let userData = {
      user_id: $('#user_id').val(),
      user_pw: $('#user_pw').val(),
      user_name: $('#user_name').val(),
      user_email: $('#user_email').val(),
      user_emailDomain: $('#user_emailDomain').val(),
      user_ph: $('#user_ph').val(),
      user_ph2: $('#user_ph2').val(),
      user_ph3: $('#user_ph3').val(),
      etp_name: $('#etp_name').val(),
      etp_num: $('#etp_num').val(),
      etp_ceo_name: $('#etp_ceo_name').val(),
      etp_ph: $('#etp_ph').val(),
      etp_ph2: $('#etp_ph2').val(),
      etp_ph3: $('#etp_ph3').val(),
      etp_fx: $('#etp_fx').val(),
      user_postcode: $('#user_postcode').val(),
      user_addr: $('#user_addr').val(),
      user_addr_details: $('#user_addr_details').val(),
      etp_home: $('#etp_home').val(),
      etp_contents: $('#etp_contents').val(),
      etp_year: $('#etp_year').val(),
      etp_member: parseInt($('#etp_member').val()),
      etp_sector: $('#etp_sector').val(),
      role: $('#role').val(), // ENTERPRISE
    };

    console.log(JSON.stringify(userData));

    if (!userData.user_id) {
      alert('아이디를 입력해주세요');
      $('#user_id').focus();
    } else if (!userData.user_pw) {
      alert('비밀번호를 입력해주세요');
      $('#user_pw').focus();
    } else if (!userData.user_name) {
      alert('담당자 이름을 입력해주세요');
      $('#user_name').focus();
    } else if (!(userData.user_email && userData.user_emailDomain)) {
      alert('이메일을 입력해주세요');
      $('#user_email').focus();
    } else if (!(userData.user_ph2 && userData.user_ph3)) {
      alert('휴대폰 번호를 입력해주세요');
      $('#user_ph2').focus();
    } else if (!userData.etp_name) {
      alert('기업 명을 입력해주세요');
      $('#etp_name').focus();
    } else if (!userData.etp_num) {
      alert('사업자등록번호를 입력해주세요');
      $('#etp_num').focus();
    } else if (!userData.etp_ceo_name) {
      alert('대표자 이름을 입력해주세요');
      $('#etp_ceo_name').focus();
    } else if (!(userData.etp_ph && userData.etp_ph2 && userData.etp_ph3)) {
      alert('기업 전화번호를 입력해주세요');
      $('#etp_ph').focus();
    } else if (!userData.etp_home) {
      alert('홈페이지 주소를 입력해주세요');
      $('#dtp_home').focus();
    } else if (!userData.user_postcode) {
      alert('주소를 입력해주세요');
      $('#user_postcode').focus();
    } else {
      $.ajax({
        type: 'post',
        url: '/sigUp/enterprise',
        data: JSON.stringify(userData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (result) {
          if (result == 1) {
            alert('회원가입 되었습니다. 기업 활동은 승인 시 가능합니다. 승인 진행상황은 마이페이지에서 확인 가능합니다');

            location.href = '/login';
          } else {
            alert('회원가입 실패했습니다');

            location.href = '/';
          }
        },
        error: function (error) {
          alert('회원가입 실패했습니다');
          console.log(error);
          location.href = '/';
        },
      });
    }
  },
};

signUp.init();
