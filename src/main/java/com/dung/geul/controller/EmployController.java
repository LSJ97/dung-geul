package com.dung.geul.controller;

import com.dung.geul.dto.EmployDTO;
import com.dung.geul.dto.EnterpriseDTO;
import com.dung.geul.dto.MemberDTO;
import com.dung.geul.dto.PageRequestDTO;
import com.dung.geul.entity.Member;
import com.dung.geul.security.dto.AuthMemberDTO;
import com.dung.geul.service.EmployService;
import com.dung.geul.service.MemberService;
import com.dung.geul.service.MemberServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Log4j2
@RequestMapping("/Employ")
@Controller
public class EmployController {

    @Autowired
    private EmployService service;

    @Autowired
    MemberService memberService;

    @Autowired
    private MemberServiceImpl memberServiceImpl;
    
    //채용공고리스트
    @GetMapping("/list")
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        model.addAttribute("result", service.getList(pageRequestDTO));
    }

    //채용공고상세페이지
    @GetMapping("/read")
    public void read(long num, @ModelAttribute("requestDTO") PageRequestDTO requestDTO, @AuthenticationPrincipal AuthMemberDTO authMemberDTO, Model model) {
        //@ModelAttribute는 클라이언트가 전송하는 여러 파라미터들을 1대1로 객체에 바인딩하여 다시 View로 넘겨서 출력하기 위해 사용되는 오브젝트이다.

        log.info("num :" +num);

        EmployDTO dto = service.read(num);

        model.addAttribute("dto", dto);

//        //지민우
//        Member member = memberServiceImpl.getMember(authMemberDTO.getUser_id());
//
//        model.addAttribute("memberDTO", member);
    }
    
    //채용등록이동
    @GetMapping("/register")
    public void register(@AuthenticationPrincipal AuthMemberDTO authMemberDTO, Model model) {

        EnterpriseDTO enterpriseDTO = memberService.getEnterprise(authMemberDTO.getUser_id());

        model.addAttribute("etp", enterpriseDTO);
    }

    //채용수정이동
    @GetMapping("/modify")
    public void modify(long num, @ModelAttribute("requestDTO") PageRequestDTO requestDTO,@AuthenticationPrincipal AuthMemberDTO authMemberDTO, Model model) {
        log.info("num :" +num);

        EnterpriseDTO enterpriseDTO = memberService.getEnterprise(authMemberDTO.getUser_id());

        EmployDTO dto = service.read(num);

        model.addAttribute("etp", enterpriseDTO);
        model.addAttribute("dto", dto);
    }




}
