// 1. 기본양식과 추가양식 구분할것

// 2. 오른쪽 추가양식메뉴누르면 양식에 추가되는 기능 테스트

// 3. 같은양식에 내용추가할 수 있는 버튼추가하여 테스트

// $('#addDoc').on('click', function (e) {
//   $('.add_doctor').clone().appendTo('.docList');
// });

/* document.getElementById('addDoc').addEventListener(
  'click',
  function (e) {
    var target = document.querySelector('.add_doctor').cloneNode(true);
    document.querySelector('.docList').innerHTML += target.innerHTML;
  },
  true
); */

// aside

$('#btn1').click(function () {
  if ($('#schoolPlus').hasClass('fa-plus-circle') === true) {
    $('#schoolPlus').removeClass('fa-plus-circle');
    $('#schoolPlus').addClass('fa-minus-circle');
    $('#schoolPlus').css('color', '#a4acc7');
    $('#schoolFieldset_main').css('display', 'block');
    $('#schoolFieldset_main').prop('disabled', false);
  } else {
    $('#schoolPlus').removeClass('fa-minus-circle');
    $('#schoolPlus').addClass('fa-plus-circle');
    $('#schoolPlus').css('color', '#1E90FF');
    $('#schoolFieldset_main').css('display', 'none');
    $('#schoolFieldset_main').prop('disabled', true);
  }
});

$('#btn2').click(function () {
  if ($('#hobbyPlus').hasClass('fa-plus-circle') === true) {
    $('#hobbyPlus').removeClass('fa-plus-circle');
    $('#hobbyPlus').addClass('fa-minus-circle');
    $('#hobbyPlus').css('color', '#a4acc7');
    $('#hobbyFieldset_main').css('display', 'block');
    $('#hobbyFieldset_main').prop('disabled', false);
  } else {
    $('#hobbyPlus').removeClass('fa-minus-circle');
    $('#hobbyPlus').addClass('fa-plus-circle');
    $('#hobbyPlus').css('color', '#1E90FF');
    $('#hobbyFieldset_main').css('display', 'none');
    $('#hobbyFieldset_main').prop('disabled', true);
  }
});

$('#btn3').click(function () {
  if ($('#awardPlus').hasClass('fa-plus-circle') === true) {
    $('#awardPlus').removeClass('fa-plus-circle');
    $('#awardPlus').addClass('fa-minus-circle');
    $('#awardPlus').css('color', '#a4acc7');
    $('#awardFieldset_main').css('display', 'block');
    $('#awardFieldset_main').prop('disabled', false);
  } else {
    $('#awardPlus').removeClass('fa-minus-circle');
    $('#awardPlus').addClass('fa-plus-circle');
    $('#awardPlus').css('color', '#1E90FF');
    $('#awardFieldset_main').css('display', 'none');
    $('#awardFieldset_main').prop('disabled', true);
  }
});

$('#btn4').click(function () {
  if ($('#milPlus').hasClass('fa-plus-circle') === true) {
    $('#milPlus').removeClass('fa-plus-circle');
    $('#milPlus').addClass('fa-minus-circle');
    $('#milPlus').css('color', '#a4acc7');
    $('#miliFieldset_main').css('display', 'block');
    $('#miliFieldset_main').prop('disabled', false);
  } else {
    $('#milPlus').removeClass('fa-minus-circle');
    $('#milPlus').addClass('fa-plus-circle');
    $('#milPlus').css('color', '#1E90FF');
    $('#miliFieldset_main').css('display', 'none');
    $('#miliFieldset_main').prop('disabled', true);
  }
});

$('#btn5').click(function () {
  if ($('#familPlus').hasClass('fa-plus-circle') === true) {
    $('#familPlus').removeClass('fa-plus-circle');
    $('#familPlus').addClass('fa-minus-circle');
    $('#familPlus').css('color', '#a4acc7');
    $('#famFieldset_main').css('display', 'block');
    $('#famFieldset_main').prop('disabled', false);
  } else {
    $('#familPlus').removeClass('fa-minus-circle');
    $('#familPlus').addClass('fa-plus-circle');
    $('#familPlus').css('color', '#1E90FF');
    $('#famFieldset_main').css('display', 'none');
    $('#famFieldset_main').prop('disabled', true);
  }
});

$('#btn6').click(function () {
  if ($('#certificatePlus').hasClass('fa-plus-circle') === true) {
    $('#certificatePlus').removeClass('fa-plus-circle');
    $('#certificatePlus').addClass('fa-minus-circle');
    $('#certificatePlus').css('color', '#a4acc7');
    $('#licFieldset_main').css('display', 'block');
    $('#licFieldset_main').prop('disabled', false);
  } else {
    $('#certificatePlus').removeClass('fa-minus-circle');
    $('#certificatePlus').addClass('fa-plus-circle');
    $('#certificatePlus').css('color', '#1E90FF');
    $('#licFieldset_main').css('display', 'none');
    $('#licFieldset_main').prop('disabled', true);
  }
});

$('#btn7').click(function () {
  if ($('#languagePlus').hasClass('fa-plus-circle') === true) {
    $('#languagePlus').removeClass('fa-plus-circle');
    $('#languagePlus').addClass('fa-minus-circle');
    $('#languagePlus').css('color', '#a4acc7');
    $('#flFieldset_main').css('display', 'block');
    $('#flFieldset_main').prop('disabled', false);
  } else {
    $('#languagePlus').removeClass('fa-minus-circle');
    $('#languagePlus').addClass('fa-plus-circle');
    $('#languagePlus').css('color', '#1E90FF');
    $('#flFieldset_main').css('display', 'none');
    $('#flFieldset_main').prop('disabled', true);
  }
});

/* function addmenu() {
  let btn1 = document.querySelector('#btn1').innerHTML;
  if (btn1 == '+') {
    document.querySelector('#sectest2').style = 'display:block';
    document.querySelector('#btn2').innerHTML = '-';
    btn2 = document.querySelector('#btn2').innerHTML;
  } else if (btn2 == '-') {
    document.querySelector('#sectest2').style = 'display:none';
    document.querySelector('#btn2').innerHTML = '+';
    btn2 = document.querySelector('#btn2').innerHTML;
  }
}

function addmenu2() {
  let btn2 = document.querySelector('#btn2').innerHTML;
  if (btn2 == '+') {
    document.querySelector('#sectest2').style = 'display:block';
    document.querySelector('#btn2').innerHTML = '-';
    btn2 = document.querySelector('#btn2').innerHTML;
  } else if (btn2 == '-') {
    document.querySelector('#sectest2').style = 'display:none';
    document.querySelector('#btn2').innerHTML = '+';
    btn2 = document.querySelector('#btn2').innerHTML;
  }
} */

// 엔터 submit 막기 이벤트
document.addEventListener(
  'keydown',
  function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  },
  true
);

// aside end

// 학력 추가버튼

let l;
$(document).ready(function () {
  let i = 0;
  let l = 1;
  let test = 0;
  let caNumber;

  $('.delete').hide();
  //when the Add Field button is clicked
  $('#add').click(function (e) {
    l++;

    $('.line').before(
      '<div id="items" class="form-group school-test items">          <div class="info">           <div class="common_div width-140">            <label class="absolute-label" for="">학교구분 <span>*</span></label>            <span class="custom-dropdown big">             <select class="SchoolTypeSelect common_select schoolSelected1" name="education[][schoolType]">              <option class="gray" value="">               <p>학교구분</p>              </option>              <option value="고등학교">고등학교</option>              <option value="전문대">전문대(2,3년)</option>              <option value="대학교">대학교(4년)</option>              <option value="대학원">대학원</option>             </select>            </span>           </div>           <div class="common_div width-261">            <label class="absolute-label" for="">학교이름 <span>*</span> </label>            <input class="common_input edc_school" name="education[][edc_school]" type="text" autocomplete="off" />           </div>           <div class="school_fieldset hignschool_field displayNone">            <div class="container1">             <div class="common_div width-140">              <label class="absolute-label" for="">졸업년도 <span>*</span> </label>              <input class="common_input highschool_edc_date" name="education[][highschool_edc_date]" type="number"             maxlength="4" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">졸업상태 <span>*</span></label>              <!-- <input class="common_input" name="edc_graduated" autocomplete="off" /> -->              <select class="common_select schoolSelected1 highschool_edc_graduated" name="education[][highschool_edc_graduated]">               <option class="gray" value="">졸업상태</option>               <option value="졸업">졸업</option>               <option value="졸업예정">졸업예정</option>               <option value="재학중">재학중</option>              </select>             </div>            </div>           </div>            <div class="college_field displayNone">            <div class="container2">             <div class="common_div width-200">              <label class="absolute-label" for="">입학년월 <span>*</span> </label>              <input class="date_input college_edc_date_start" name="education[][college_edc_date_start]" type="month"               autocomplete="off" />             </div>             <div class="common_div width-200">              <label class="absolute-label" for="">졸업년월 <span>*</span></label>              <input class="common_input college_edc_date_end" name="education[][college_edc_date_end]" type="month"               autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">졸업상태 <span>*</span></label>              <select class="common_select schoolSelected1 college_edc_graduated" name="education[][college_edc_graduated]">               <option class="gray" value="">졸업상태</option>               <option value="졸업">졸업</option>               <option value="졸업예정">졸업예정</option>               <option value="재학중">재학중</option>               <option value="중퇴">중퇴</option>               <option value="수료">수료</option>               <option value="휴학">휴학</option>              </select>             </div>            </div>            <div class="container2-1">             <div class="common_div width-300" style="width:409px;">              <label class="absolute-label" for="">전공 <span>*</span></label>              <input class="common_input college_edc_dept" name="education[][college_edc_dept]" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">학점 </label>              <input class="common_input" type="text" onKeyup="score()" maxlength="3"               name="education[][college_edc_gpa]" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">총점 </label>              <select class="common_select schoolSelected1" name="education[][college_edc_ps]">               <option class="gray" value="">총점</option>               <option value="4.5">4.5</option>               <option value="4.3">4.3</option>-               <option value="4.0">4.0</option>               <option value="100">100</option>              </select>             </div>            </div>           </div>           <div class="university_field displayNone" >            <div class="container3">             <div class="common_div width-200">              <label class="absolute-label" for="">입학년월 <span>*</span> </label>              <input class="date_input university_edc_date_start" name="education[][university_edc_date_start]" type="month"               autocomplete="off" />             </div>             <div class="common_div width-200">              <label class="absolute-label" for="">졸업년월 <span>*</span></label>              <input class="common_input university_edc_date_end" name="education[][university_edc_date_end]" type="month"               autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">졸업상태 <span>*</span></label>              <select class="common_select schoolSelected1 university_edc_graduated" name="education[][university_edc_graduated]">               <option class="gray" value="">졸업상태</option>               <option value="졸업">졸업</option>               <option value="졸업예정">졸업예정</option>               <option value="재학중">재학중</option>               <option value="중퇴">중퇴</option>               <option value="수료">수료</option>               <option value="휴학">휴학</option>              </select>             </div>            </div>            <div class="container3-1">             <div class="common_div width-300" style="width: 409px">              <label class="absolute-label" for="">전공 <span>*</span></label>              <input class="common_input university_edc_dept" name="education[][university_edc_dept]" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">학점 </label>              <input class="common_input university_edc_gpa" type="text" onKeyup="score()" maxlength="3"               name="education[][university_edc_gpa]" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">총점 </label>              <select class="common_select schoolSelected1 university_edc_ps" name="education[][university_edc_ps]">               <option class="gray" value="">총점</option>               <option value="4.5">4.5</option>               <option value="4.3">4.3</option>               <option value="4.0">4.0</option>               <option value="100">100</option>              </select>             </div>            </div>           </div>           <div class="graduate_field displayNone">            <div class="container4">             <div class="common_div width-104">              <label class="absolute-label" for="">학위 <span>*</span></label>              <select class="common_select schoolSelected1 graduate-edc_graduated" name="education[][graduate-edc_graduated]">               <option class="gray" value="">학위</option>               <option value="석사">석사</option>               <option value="박사">박사</option>               <option value="석박사">석박사</option>              </select>             </div>             <div class="common_div width-200">              <label class="absolute-label" for="">입학년월 <span>*</span> </label>              <input class="common_input graduate_edc_date_start" name="education[][graduate_edc_date_start]" type="month"               autocomplete="off" />             </div>             <div class="common_div width-200">              <label class="absolute-label" for="">졸업년월 <span>*</span></label>              <input class="common_input graduate_edc_date_end" name="education[][graduate_edc_date_end]" type="month"               autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">졸업상태 <span>*</span></label>              <select class="common_select schoolSelected1 graduate_edc_graduated" name="education[][graduate_edc_graduated]">               <option class="gray" value="">졸업상태</option>               <option value="졸업">졸업</option>               <option value="졸업예정">졸업예정</option>               <option value="재학중">재학중</option>               <option value="중퇴">중퇴</option>               <option value="수료">수료</option>               <option value="휴학">휴학</option>              </select>             </div>            </div>            <div class="container4-1">             <div class="common_div width-300" style="width: 374px">              <label class="absolute-label" for="">전공 <span>*</span></label>              <input class="common_input graduate_edc_dept" name="education[][graduate_edc_dept]" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">학점 </label>              <input class="common_input" type="text" onKeyup="score()" maxlength="3"               name="education[][graduate_edc_gpa]" autocomplete="off" />             </div>             <div class="common_div width-140">              <label class="absolute-label" for="">총점 </label>              <select class="common_select schoolSelected1" name="education[][graduate_edc_ps]">               <option class="gray" value="">총점</option>               <option value="4.5">4.5</option>               <option value="4.3">4.3</option>               <option value="4.0">4.0</option>               <option value="100">100</option>              </select>             </div>             <br />             <div class="common_div width-670">              <label class="absolute-label" for="">논문 url</label>              <input type="url" name="education[][graduate_edc_paper]" class="common_input"               autocomplete="off" />             </div>            </div>           </div>          </div>         </div> '
    );
    console.log(l);
    i++;
    if (i > 0) {
      $('.delete').fadeIn('1500');
    }
    if (i > 3) {
      $('#add').hide();
    }
    test--;
  });
  $('body').on('click', '.delete', function (e) {
    $('.items').last().remove();
    l--;
    i--;
    if (i == 0) {
      $('.delete').hide();
    }
    if (0 <= i < 4) {
      $('add').show();
    }

    test++;

    if (test == -3) {
      $('#add').show();
    }
  });
});

let s = 1;

//  추가버튼 END

// 숫자 4자리 제한 정규식

function award_year() {
  this.value = this.value.replace(/[^0-9]/g, '');
}

// 정규식 END

// 수상내역 추가버튼
$(document).ready(function () {
  let award_number = 0;
  let award_name = 1;
  let award_test = 0;
  let caNumber;

  //when the Add Field button is clicked
  $('#add_award').click(function (e) {
    award_name++;
    $('.line_award').before(
      '<div class="item_award">                   <div class="info">                     <div class="common_div width-350">                       <label class="absolute-label" for="">수상명 <span>*</span></label>                       <input class="common_input awards_des" name="awards[][awards_des]" />                     </div>                     <div class="common_div width-300">                       <label class="absolute-label" for="">수여기관 <span>*</span></label>                       <input class="common_input awards_agency" type="text" name="awards[][awards_agency]" />                     </div>                     <div class="common_div width-104">                       <label class="absolute-label" for="">수상연도 <span>*</span></label>                       <input class="common_input awards_date" type="text" onKeyup="award_year()" maxlength="4"                         name="awards[][awards_date]" />                     </div>                     <div class="common_div width-771 awardContents_div">                       <label class="absolute-label">수여내용 </label>                       <textarea class="award_contents" name="awards[][award_contents]" focus="test12()" cols="30"                         rows="10"></textarea>                     </div>                   </div>                 </div> '
    );
    award_number++;
    if (award_number > 0) {
      $('#delete_award').fadeIn('1500');
    }
    if (award_number > 3) {
      $('#add_award').hide();
    }
    award_test--;
  });
  $('body').on('click', '#delete_award', function (e) {
    $('.item_award').last().remove();
    award_name--;
    award_number--;

    award_test++;

    if (award_test == -3) {
      $('#add_award').show();
    }
  });
});

// 수상내역 추가버튼 END

// 가족관계 추가버튼
$(document).ready(function () {
  let family_number = 0;
  let family_name = 1;
  let family_test = 0;
  let caNumber;

  //when the Add Field button is clicked
  $('#add_family').click(function (e) {
    family_name++;
    $('.line_family').before(
      '<div  class="item_family">                                      <div  class="info">                                          <div  class="common_div  ">                                              <label  class="absolute-label"  for="">가족관계  <span>*</span></label>                                              <select  class="common_select  fam_relation"  name="family[][fam_relation]">                                                  <option  class="gray"  value="">가족관계</option>                                                    <option  value="부부">부부</option>                                                    <option  value="부">부</option>                                                    <option  value="모">모</option>                                                    <option  value="자녀">자녀</option>                                                    <option  value="형제">형제</option>                                                    <option  value="자매">자매</option>                                              </select>                                          </div>                                          <div  class="common_div  width-180">                                              <label  class="absolute-label"  for="">이름  <span>*</span></label>                                              <input  class="common_input  fam_name"  type="text"  name="family[][fam_name]"  />                                          </div>                                          <div  class="common_div  width-104">                                              <label  class="absolute-label"  for="">나이  <span>*</span></label>                                              <input  style="padding-left:30px;"  class="age_input  fam_age"  type="text"  onKeyup="award_year()"                                                  maxlength="2"  name="family[][fam_age]"  />                                              <span  style="font-size:  12px">살</span>                                          </div>                                          <div  class="common_div  width-180">                                              <label  class="absolute-label"  for="">생년월일  </label>                                              <input  class="common_input  date"  type="date"  name="family[][fam_birth]"  />                                          </div>                                          <div  class="common_div  width-180">                                              <label  class="absolute-label"  for="">지역  </label>                                              <input  class="common_input"  type="text"  name="family[][fam_living]"  />                                          </div>                                      </div>                                  </div>  '
    );
    family_number++;
    if (family_number > 0) {
      $('#delete_family').fadeIn('1500');
    }
    if (family_number > 3) {
      $('#add_family').hide();
    }
    family_test--;
  });
  $('body').on('click', '#delete_family', function (e) {
    $('.item_family').last().remove();
    family_name--;
    family_number--;

    family_test++;

    if (family_test == -3) {
      $('#add_family').show();
    }
  });
});
// 가족관계 추가버튼 END

// 경력사항 추가버튼

$(document).ready(function () {
  let carrer_number = 0;
  let carrer_name = 1;
  let carrer_test = 0;
  let caNumber;

  //when the Add Field button is clicked
  $('#add_carrer').click(function (e) {
    carrer_name++;
    $('.line_carrer').before(
      '<div  class="item_career">                                      <input  type="hidden"  name="career[][id]">                                      <div  class="info">                                          <div  class="common_div  width-350">                                              <label  class="absolute-label"  for="">회사명  <span>*</span></label>                                              <input  class="common_input  etp_name"  name="career[][cr_etp_name]"  />                                          </div>                                            <div  class="common_div  width-200">                                              <label  class="absolute-label"  for="">입사일자  <span>*</span>  </label>                                              <input  class="common_input  employment"  type="date"  name="career[][cr_employment]"  />                                          </div>                                          <div  class="common_div  width-200">                                              <label  class="absolute-label"  for="">퇴사일자  <span>*</span>  </label>                                              <input  class="common_input  resignation"  type="date"  name="career[][cr_resignation]"  />                                          </div>                                          <br  />                                          <div  class="common_div  width-200">                                              <label  class="absolute-label"  for="">직위  <span>*</span>  </label>                                              <input  class="common_input  position"  type="text"  name="career[][cr_position]"  />                                          </div>                                          <div  class="common_div  width-350">                                              <label  class="absolute-label"  for="">퇴사사유  </label>                                              <input  class="common_input  resign"  type="text"  name="career[][reason_resign]"  />                                          </div>                                          <div  class="common_div  width-200">                                              <label  class="absolute-label"  for="">연봉 </label>                                              <input  class="money_input2  salary"  value=""  type="number"  name="career[][salary]"                                                  autocomplete="off"  />                                              <span  style="font-size:  12px">만원</span>                                          </div>                                          <div  class="common_div  width-767">                                              <label  class="absolute-label  cr_task">담당업무  </label>                                              <input  class="common_input"  name="career[][cr_task]"></input>                                          </div>                                          <div  class="common_div  width-767">                                              <label  class="absolute-label  cr_task2">담당업무2  </label>                                              <input  class="common_input"  name="career[][cr_task2]"></input>                                          </div>                                        </div>                                  </div>  '
    );
    carrer_number++;
    if (carrer_number > 0) {
      $('#delete_carrer').fadeIn('1500');
    }
    if (carrer_number > 3) {
      $('#add_carrer').hide();
    }
    carrer_test--;
    console.log(2);
  });
  $('body').on('click', '#delete_carrer', function (e) {
    $('.item_career').last().remove();
    console.log(1);
    carrer_name--;
    carrer_number--;

    carrer_test++;

    if (carrer_test == -3) {
      $('#add_carrer').show();
    }
  });
});

// 경력사항 추가버튼 END

/* 자격증 추가버튼 */

$(document).ready(function () {
  let lic_number = 0;
  let lic_name = 1;
  let lic_test = 0;
  let caNumber;

  //when the Add Field button is clicked
  $('#add_lic').click(function (e) {
    lic_name++;
    $('.line_lic').before(
      '<div class="item_lic">          <div class="info">           <!-- body overlay -->                     <div class="common_div width-140">            <label class="absolute-label" for="">자격종류 <span>*</span></label>            <span class="custom-dropdown big">             <select class="common_select licType lic_type" name="certificate[][lic_type]">              <option class="gray" value="">               <p>자격선택</p>              </option>              <option value="(국가)">국가자격증</option>              <option value="(민간)">민간자격증</option>             </select>            </span>           </div>           <div class="common_div width-350">            <label class="absolute-label" for="">자격증 명 <span>*</span></label>            <input class="common_input licName lic_name" type="text" name="certificate[][lic_name]" />           </div>           <div class="common_div width-280">            <label class="absolute-label" for="">자격번호 <span>*</span></label>            <input class="common_input licNum lic_num" type="text" name="certificate[][lic_num]" />           </div>           <button type="button" class="btn btn-sm btn-primary popup-trigger"            style="margin-left:10px; vertical-align: top;">자격증 불러오기</button>           <div class="common_div width-410">            <label class="absolute-label" for="">발급기관 <span>*</span></label>            <input class="common_input licAgency lic_agency" type="text" name="certificate[][lic_agency]" />           </div>                               <div class="common_div width-180">            <label class="absolute-label" for="">취득일 <span>*</span></label>            <input class="common_input licDate lic_date" type="date" name="certificate[][lic_date]" />           </div>           <div class="common_div width-180">            <label class="absolute-label" for="">만료일 </label>            <input class="common_input licDue" type="date" name="certificate[][lic_due_date]" />           </div>                               </div>         </div> '
    );
    lic_number++;
    if (lic_number > 0) {
      $('#delete_lic').fadeIn('1500');
    }
    if (lic_number > 3) {
      $('#add_lic').hide();
    }
    lic_test--;
    console.log(2);
  });
  $('body').on('click', '#delete_lic', function (e) {
    $('.item_lic').last().remove();
    console.log(1);
    lic_name--;
    lic_number--;

    lic_test++;

    if (lic_test == -3) {
      $('#add_lic').show();
    }
  });
});

/* 어학 추가버튼 */

$(document).ready(function () {
  let fl_number = 0;
  let fl_name = 1;
  let fl_test = 0;
  let caNumber;

  //when the Add Field button is clicked
  $('#add_fl').click(function (e) {
    fl_name++;
    $('.line_fl').before(
      '<div  class="item_fl">                                      <div  class="info">                                            <div  class="common_div  width-180">                                              <label  class="absolute-label"  for="">외국어명  <span>*</span></label>                                              <select  class="common_select  fl_language"  name="language[][fl_language]">                                                  <option  value="">-외국어  선택-</option>                                                  <option  value="영어">영어</option>                                                  <option  value="일본어">일본어</option>                                                  <option  value="중국어">중국어</option>                                                  <option  value="독일어">독일어</option>                                                  <option  value="프랑스어">프랑스어</option>                                                  <option  value="스페인어">스페인어</option>                                                  <option  value="러시아어">러시아어</option>                                                  <option  value="이탈리아어">이탈리아어</option>                                                  <option  value="아랍어">아랍어</option>                                                  <option  value="태국어">태국어</option>                                                  <option  value="마인어">마인어</option>                                                  <option  value="그리스어">그리스어</option>                                                  <option  value="포르투갈어">포르투갈어</option>                                                  <option  value="베트남어">베트남어</option>                                                  <option  value="네달란드어">네달란드어</option>                                                  <option  value="힌디어">힌디어</option>                                                  <option  value="노르웨이어">노르웨이어</option>                                                  <option  value="한국어">한국어</option>                                              </select>                                          </div>                                            <div  class="common_div  width-104">                                              <label  class="absolute-label"  for="">회화능력  <span>*</span></label>                                              <select  class="common_select  fl_conversation"  name="language[][fl_conversation]">                                                  <option  value="">선택</option>                                                  <option  value="상">상</option>                                                  <option  value="중">중</option>                                                  <option  value="하">하</option>                                              </select>                                          </div>                                            <div  class="common_div  width-104">                                              <label  class="absolute-label"  for="">독해능력  <span>*</span></label>                                              <select  class="common_select  fl_reading"  name="language[][fl_reading]">                                                  <option  value="">선택</option>                                                  <option  value="상">상</option>                                                  <option  value="중">중</option>                                                  <option  value="하">하</option>                                              </select>                                          </div>                                            <div  class="common_div  width-104">                                              <label  class="absolute-label"  for="">작문능력  <span>*</span></label>                                              <select  class="common_select  fl_writing"  name="language[][fl_writing]">                                                  <option  value="">선택</option>                                                  <option  value="상">상</option>                                                  <option  value="중">중</option>                                                  <option  value="하">하</option>                                              </select>                                          </div>                                          <br  />                                            <div  class="common_div  width-405">                                              <label  class="absolute-label"  for="">시험종류  <span>*</span></label>                                              <input  class="common_input  fl_name"  type="text"  name="language[][fl_name]"  />                                          </div>                                          <div  class="common_div  width-104">                                              <label  class="absolute-label"  for="">점수  </label>                                              <input  class="common_input"  type="text"  name="language[][fl_score]"  />                                          </div>                                          <div  class="common_div  width-104">                                              <label  class="absolute-label"  for="">급수</label>                                              <input  class="common_input"  type="text"  name="language[][fl_rank]"  />                                          </div>                                          <div  class="common_div  width-180">                                              <label  class="absolute-label"  for="">취득일  <span>*</span></label>                                              <input  class="common_input  fl_date"  type="date"  name="language[][fl_date]"  />                                          </div>                                      </div>                                  </div>  '
    );
    fl_number++;
    if (fl_number > 0) {
      $('#delete_fl').fadeIn('1500');
    }
    if (fl_number > 3) {
      $('#add_fl').hide();
    }
    fl_test--;
    console.log(2);
  });
  $('body').on('click', '#delete_fl', function (e) {
    $('.item_fl').last().remove();
    console.log(1);
    fl_name--;
    fl_number--;

    fl_test++;

    if (fl_test == -3) {
      $('#add_fl').show();
    }
  });
});

// 학력사항 양식

// 학점 정규식 함수
function score() {
  this.value = this.value.replace(/[^0-9]+[.]/g, '');
}

document.addEventListener('DOMContentLoaded', () => {
  let SchoolTypeSelect = document.querySelectorAll('.SchoolTypeSelect');
  let hignschool_field = document.querySelectorAll('.hignschool_field');
  let college_field = document.querySelectorAll('.college_field');
  let university_field = document.querySelectorAll('.university_field');
  let graduate_field = document.querySelectorAll('.graduate_field');
  let add = document.querySelector('#add');

  for (let i = 0; i < SchoolTypeSelect.length; i++) {
    SchoolTypeSelect[i].addEventListener('change', () => {
      if (SchoolTypeSelect[i].value === '고등학교') {
        hignschool_field[i].classList.replace('displayNone', 'displayInlineBlock');
        college_field[i].classList.replace('displayInlineBlock', 'displayNone');
        university_field[i].classList.replace('displayInlineBlock', 'displayNone');
        graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
      } else if (SchoolTypeSelect[i].value === '전문대') {
        college_field[i].classList.replace('displayNone', 'displayInlineBlock');
        hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
        university_field[i].classList.replace('displayInlineBlock', 'displayNone');
        graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
      } else if (SchoolTypeSelect[i].value === '대학교') {
        university_field[i].classList.replace('displayNone', 'displayInlineBlock');
        hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
        college_field[i].classList.replace('displayInlineBlock', 'displayNone');
        graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
      } else if (SchoolTypeSelect[i].value === '대학원') {
        graduate_field[i].classList.replace('displayNone', 'displayInlineBlock');
        hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
        college_field[i].classList.replace('displayInlineBlock', 'displayNone');
        university_field[i].classList.replace('displayInlineBlock', 'displayNone');
      } else {
        college_field[i].classList.replace('displayInlineBlock', 'displayNone');
        hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
        university_field[i].classList.replace('displayInlineBlock', 'displayNone');
        graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
      }
    });
  }
  add.addEventListener(
    'click',
    () => {
      setTimeout(function () {
        SchoolTypeSelect = document.querySelectorAll('.SchoolTypeSelect');
        console.log(SchoolTypeSelect);
        hignschool_field = document.querySelectorAll('.hignschool_field');
        college_field = document.querySelectorAll('.college_field');
        university_field = document.querySelectorAll('.university_field');
        graduate_field = document.querySelectorAll('.graduate_field');

        for (let i = 0; i < SchoolTypeSelect.length; i++) {
          SchoolTypeSelect[i].addEventListener('change', () => {
            if (SchoolTypeSelect[i].value === '고등학교') {
              hignschool_field[i].classList.replace('displayNone', 'displayInlineBlock');
              college_field[i].classList.replace('displayInlineBlock', 'displayNone');
              university_field[i].classList.replace('displayInlineBlock', 'displayNone');
              graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
            } else if (SchoolTypeSelect[i].value === '전문대') {
              college_field[i].classList.replace('displayNone', 'displayInlineBlock');
              hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
              university_field[i].classList.replace('displayInlineBlock', 'displayNone');
              graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
            } else if (SchoolTypeSelect[i].value === '대학교') {
              university_field[i].classList.replace('displayNone', 'displayInlineBlock');
              hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
              college_field[i].classList.replace('displayInlineBlock', 'displayNone');
              graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
            } else if (SchoolTypeSelect[i].value === '대학원') {
              graduate_field[i].classList.replace('displayNone', 'displayInlineBlock');
              hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
              college_field[i].classList.replace('displayInlineBlock', 'displayNone');
              university_field[i].classList.replace('displayInlineBlock', 'displayNone');
            } else {
              college_field[i].classList.replace('displayInlineBlock', 'displayNone');
              hignschool_field[i].classList.replace('displayInlineBlock', 'displayNone');
              university_field[i].classList.replace('displayInlineBlock', 'displayNone');
              graduate_field[i].classList.replace('displayInlineBlock', 'displayNone');
            }
          });
        }
      });
    },
    100
  );
});

// 학력사항 양식 end

// 희망조건

let sallayButton = document.querySelector('#decisionInterview');

let checkWhite = document.querySelector('.fa-check-square');

let checkBlack = document.querySelector('.checkBlack');
let st = 1;

sallayButton.addEventListener('click', event => {
  if (st == 0) {
    checkWhite.style = 'color: rgb(206, 197, 197)';
    // document.querySelector('.money_input').disabled = false;
    document.querySelector('#sallay_div').style = 'background-color:white';
    document.querySelector('.money_input').style = 'visibility:visible';
    document.querySelector('#desire').style = 'visibility:visible';
    document.querySelector('#desired_salary').value = '';
    st = 1;
  } else {
    checkWhite.style = 'color: black';
    // document.querySelector('.money_input').disabled = true;
    document.querySelector('.money_input').style = 'visibility:hidden';
    document.querySelector('#desire').style = 'visibility:hidden';
    document.querySelector('#sallay_div').style = 'background-color:#c7c7c7';
    document.querySelector('#desired_salary').value = '면접 후 결정';
    st = 0;
  }
});

// $('#decisionInterview').click(function () {
//   checkWhite.style = 'display:none';
// });

// 희망조건 END

/* 우대사항/ 병역 */

const cv_verteran = document.querySelector('#cv_verteran');
const cv_verteran_hidden = document.querySelector('#cv_verteran_hidden');
const cv_disability = document.getElementById('cv_disability');
const cv_disability_hidden = document.getElementById('cv_disability_hidden');
const cv_military = document.getElementById('cv_military');
const cv_military_hidden = document.getElementById('cv_military_hidden');
const info_extra = document.querySelector('#info-extra');
const disability_value = document.querySelector('#disability-value');
const military_value = document.querySelector('#military-value');

// 보훈대상

function checkVerteran() {
  if (cv_verteran.checked) {
    cv_verteran_hidden.disabled = true;
    document.querySelector('#verteran_div').classList.replace('common_div', 'common_div_blue');
  } else {
    document.querySelector('#verteran_div').classList.replace('common_div_blue', 'common_div');
  }
}

function checkBoth() {
  if (cv_disability.checked || cv_military.checked) {
    info_extra.style = 'display:block';
  } else {
    info_extra.style = 'display:none';
  }

  if (cv_disability.checked) {
    cv_disability_hidden.disabled = true;
    disability_value.style = 'display:block';
    document.querySelector('#disability_div').classList.replace('common_div', 'common_div_blue');
  } else {
    disability_value.style = 'display:none';
    document.querySelector('#disability_div').classList.replace('common_div_blue', 'common_div');
  }

  if (cv_military.checked) {
    cv_military_hidden.disabled = true;

    military_value.style = 'display:block';
    document.querySelector('#military_div').classList.replace('common_div', 'common_div_blue');
  } else {
    military_value.style = 'display:none';
    document.querySelector('#military_div').classList.replace('common_div_blue', 'common_div');
  }
}

/* 우대사항/병역 END */

/* 달력 */

/* var picker = new Pikaday({
  field: document.getElementsByClassName('date'),
  format: 'yyyy-MM-dd',
  toString(date, format) {
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  },
}); */

/* 수상내역 */

/* 경력사항 */

$('input:radio[name=user_employment]').click(function () {
  if ($('input:radio[name=user_employment]:checked').val() == '0') {
    let etp_name = document.querySelectorAll('.etp_name');
    let employment = document.querySelectorAll('.employment');
    let resignation = document.querySelectorAll('.resignation');
    let position = document.querySelectorAll('.position');
    let resign = document.querySelectorAll('.resign');
    let salary = document.querySelectorAll('.salary');
    let cr_task = document.querySelectorAll('.cr_task');
    let cr_task2 = document.querySelectorAll('.cr_task2');
    $('#carrerField').prop('disabled', true);
    $('#carrerField').attr('style', 'display:none;');
    $('#carrerButtonBox').attr('style', 'display:none;');
    for (let i = 0; i < etp_name.length; i++) {
      etp_name[i].value = '';
      employment[i].value = '';
      resignation[i].value = '';
      position[i].value = '';
      resign[i].value = '';
      salary[i].value = '';
      cr_task[i].value = '';
      cr_task2[i].value = '';
      console.log(i);
    }
  } else {
    $('#carrerField').prop('disabled', false);
    $('#carrerField').attr('style', 'display:block;');
    $('#carrerButtonBox').attr('style', 'display:block;');
  }
});

let hignschool = document.querySelectorAll('.hignschool_field');
let college = document.querySelectorAll('.college_field');
let university = document.querySelectorAll('.university_field');
let graduate = document.querySelectorAll('.graduate_field');

let schoolType;

schoolType = document.getElementsByClassName('SchoolTypeSelect');

for (let i = 0; i < schoolType.length; i++) {
  if (schoolType[i].value == '고등학교') {
    hignschool[i].classList.replace('displayNone', 'displayInlineBlock');
  } else if (schoolType[i].value == '전문대') {
    college[i].classList.replace('displayNone', 'displayInlineBlock');
  } else if (schoolType[i].value == '대학교') {
    university[i].classList.replace('displayNone', 'displayInlineBlock');
  } else if (schoolType[i].value == '대학원') {
    graduate[i].classList.replace('displayNone', 'displayInlineBlock');
  }
  console.log(i);

  // switch (schoolType[i].value) {
  //   case '고등학교':
  //     high[i].style = 'display:inline-block'
  //     break;
  //   case '전문대':
  //     college[i].style = 'display:inline-block';
  //     college2[i].style = 'display:inline-block';
  //     break;
  //   case '대학교':
  //     university[i].style = 'display:inline-block';
  //     university2[i].style = 'display:inline-block';
  //     break;

  //   case '대학원':
  //     graduate[i].style = 'display:inline-block';
  //     graduate2[i].style = 'display:inline-block';
  //     break;
  // }
}

let desired_salary = document.querySelector('#desired_salary').value;

if (!desired_salary) {
  document.querySelector('.money_input').style = 'visibility:hidden';
  document.querySelector('#desire').style = 'visibility:hidden';
  document.querySelector('#sallay_div').style = 'background-color:#c7c7c7';
  document.querySelector('#desired_salary').value = '면접 후 결정';
}
