package com.dung.geul.controller;

import com.dung.geul.dto.*;
import com.dung.geul.entity.Consult;
import com.dung.geul.entity.Member;
import com.dung.geul.security.dto.AuthMemberDTO;
import com.dung.geul.service.ConsultService;
import com.dung.geul.service.ConsultServiceImpl;
import com.dung.geul.service.MemberServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequestMapping("/admin")
@Log4j2
@RequiredArgsConstructor
public class AdminconsultController {
    @Autowired
    private ConsultService consultService;

    @Autowired
    private MemberServiceImpl memberService;

        @GetMapping("/admin_consult")
        public void list (PageRequestDTO pageRequestDTO, Model model) {

            log.info("리스트" + pageRequestDTO);
            PageResultDTO<ConsultDTO, Consult> getlist = consultService.getList(pageRequestDTO);

            model.addAttribute("counselorList", memberService.findByType("COUNSELOR"));

            model.addAttribute("consultlist", getlist.getDtoList());

            log.info("counselorList : " + memberService.findByType("COUNSELOR"));
        }


        @GetMapping("/admin_consult_Reg")
        public String reg(Model model, @AuthenticationPrincipal AuthMemberDTO authMemberDTO){
//            Member member = memberService.getMember(authMemberDTO.getUser_id());

//            model.addAttribute("user",member);

            log.info("ddddd");

        return "admin/admin_consult_Reg";
        }

        //지민우
        //상담정보 모달에 띄우기
        @GetMapping("/admin_consult/detail")
        public ResponseEntity memberDetailsRead(@RequestParam("consult_num") Long cno){

            ConsultDTO consult = consultService.read(cno);
            log.info(consult.toString());
            return new ResponseEntity(consult, HttpStatus.OK);
        }



}