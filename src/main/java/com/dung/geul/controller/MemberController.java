package com.dung.geul.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MemberController {


    // 로그인

    @GetMapping("/login")
    public String login(){
        return "/login/login";
    }


    //회원가입

    @GetMapping("/sign-up")
    public String signUp(){
        return "/sign-up/user_classification";
    }

    @GetMapping("/school-user_category")
    public String signUpSchoolUserCategory(){
        return "/sign-up/school-user_category";
    }

    @GetMapping("/student_sign-up")
    public String studentSignUp(){
        return "/sign-up/student_sign-up";
    }


}